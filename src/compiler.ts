import { ParserRuleContext, ParseTree, TerminalNode } from "antlr4";
import GrammarParser, { ArgContext, BexpContext, DefnContext, ExpContext, FContext, MContext, ProgContext, TContext } from "./antlr/generated/GrammarParser";
import GrammarVisitor from "./antlr/generated/GrammarVisitor";

type Context = FContext | ExpContext | MContext | TContext | DefnContext 

export class Compiler extends GrammarVisitor<String>{
    public code_start: string = '(module \n (import "console" "log" (func $log (param i32))) \n'
    public code_end: string = '(start $main) \n)'
    private env: Map<string, number> = new Map<string,number>
    private typeConvert: Map<string,string> = new Map<string,string>([["Int","i32"], ["Double","f32"]])

    getType(ctx: Context, ts: Map<String,String>): String {
       if (ctx instanceof FContext) {
        if (ctx.L_PAREN() && ctx.exp(0) && ctx.R_PAREN() || ctx.L_CURLY_PAREN() && ctx.exp(0) && ctx.R_CURLY_PAREN()){
            return this.getType(ctx.exp(0),ts)
        }
        if (ctx.ID() && ctx.L_PAREN() && ctx.exp_list() && ctx.R_PAREN || ctx.ID() && ctx.L_PAREN() && ctx.R_PAREN || ctx.ID()){
            return ts.get(ctx.ID().getText())
        }
        if (ctx.GLOBAL_ID()){
            return ts.get(ctx.GLOBAL_ID().getText())
        }
        if (ctx.SUB() && ctx.DECIMAL_NUMBER() || ctx.ADD() && ctx.DECIMAL_NUMBER() || ctx.DECIMAL_NUMBER())
        {
                return "Double"
        }
        if (ctx.SUB() && ctx.NUMBER() || ctx.ADD() && ctx.NUMBER() || ctx.NUMBER())
        {
            return "Int"
        }
       }
       if (ctx instanceof MContext) {
        if ( ctx.t() && ctx.exp()){
            const t1 = this.getType(ctx.t(),ts)
            const t2 = this.getType(ctx.exp(),ts)
            if (t1 === t2) return t1
            else throw new Error("Incorrect Types")
        }
        if (ctx.t()) return this.getType(ctx.t(),ts)
       }
       if (ctx instanceof TContext) {
        if (ctx.f() && ctx.t()){
            const t1 = this.getType(ctx.f(), ts)
            const t2 = this.getType(ctx.t(), ts)
            if (t1 === t2) return t1
            else throw new Error("Incorrect Types")
        }
        if (ctx.f()){
          return this.getType(ctx.f(), ts)
        } 
        }
        if (ctx instanceof ExpContext){
            if (ctx.IF() && ctx.bexp() && ctx.THEN() && ctx.exp(0) && ctx.ELSE() && ctx.exp(1)) {
                const t1 = this.getType(ctx.exp(0), ts)
                const t2 = this.getType(ctx.exp(1), ts)
                if (t1 === t2) return t1
                else throw new Error("Incorrect Types")
            }
            if (ctx.m() && ctx.SEMI_COLON() && ctx.exp(0)){
                const t1 = this.getType(ctx.exp(0),ts)
                const t2 = this.getType(ctx.m(), ts)
                if (t1 === t2) return t1
                else throw new Error("Incorrect Types")
            }
            if (ctx.m()) return this.getType(ctx.m(),ts)
        }
    }
    visitProg(ctx: ProgContext, ts: Map<String,String>): String {
        if (ctx.defn() && ctx.SEMI_COLON() && ctx.prog()){
            return `${this.visit_node(ctx.defn(),ts)} ${this.visit_node(ctx.prog(),ts)}`
        }
        if (ctx.exp_list()) {
            return "(func $main\n" +  ctx.exp_list().map((ctx) => this.visitExp(ctx,ts)).toString().replace(",","\n") + ")\n"
        }
       
    }
    visitBexp(ctx: BexpContext, ts?: Map<String, String>): String {
        if(ctx.exp(0) && ctx.exp(1)){
            const e1 = this.visit_node(ctx.exp(0),ts)
            const e2 = this.visit_node(ctx.exp(1),ts)
            const t1 = this.getType(ctx.exp(0),ts)
            const t2 = this.getType(ctx.exp(1),ts)
            const sameType = t1 == t2
            if(sameType && t1 == "Int"){
                if (ctx.EQUAL_TO()) return `${e1}${e2}i32.eq\n`
                if (ctx.NOT_EQUAL_TO()) return `${e1}${e2}i32.ne\n`
                if (ctx.LESS_THAN()) return `${e1}${e2}i32.lt_s\n`
                if (ctx.LESS_THAN_EQUAL()) return `${e1}${e2}i32.le_s\n`
                if (ctx.MORE_THAN()) return `${e1}${e2}i32.gt_s\n`
                if (ctx.MORE_THAN_EQUAL()) return `${e1}${e2}i32.gt_e\n`
            }
            if(sameType && t1 == "Double"){
                if (ctx.EQUAL_TO()) return `${e1}${e2}f32.eq\n`
                if (ctx.NOT_EQUAL_TO()) return `${e1}${e2}f32.ne\n`
                if (ctx.LESS_THAN()) return `${e1}${e2}f32.lt\n`
                if (ctx.LESS_THAN_EQUAL()) return `${e1}${e2}f32.le\n`
                if (ctx.MORE_THAN()) return `${e1}${e2}f32.gt\n`
                if (ctx.MORE_THAN_EQUAL()) return `${e1}${e2}f32.gt\n`
            }
            else throw new Error("Boolean expression has two different types")
        }
    }
    visitExp(ctx: ExpContext, ts: Map<String,String>): String {
       if (ctx.T_SKIP() && ctx.L_PAREN() && ctx.R_PAREN()) return `call $skip\n`
       if (ctx.T_SKIP()) return `call $skip\n`
       if (ctx.IF() && ctx.bexp() && ctx.THEN() && ctx.exp(0) && ctx.ELSE() && ctx.exp(1)){
            const t1 = this.getType(ctx.exp(0),ts)
            const t2 = this.getType(ctx.exp(1),ts)
            if (t1 == t2){
                if (t1 == "Int") return  this.visit_node(ctx.bexp(),ts) + `(if (result i32)\n (then\n ${this.visit_node(ctx.exp(0),ts)}) (else\n ${this.visit_node(ctx.exp(1),ts)})\n)\n`
                if (t1 == "Double") return this.visit_node(ctx.bexp(),ts) + `(if result f32)\n (then\n ${this.visit_node(ctx.exp(0),ts)}) (else\n ${this.visit_node(ctx.exp(1),ts)})\n)\n`
            }
       }
       if (ctx.m() && ctx.SEMI_COLON() && ctx.exp(0)){
            return `${this.visit_node(ctx.m(),ts)}${this.visit_node(ctx.exp(0),ts)}`
       }
       if (ctx.m()){
            return this.visit_node(ctx.m(),ts)
       }
    }

    visitM(ctx: MContext, ts: Map<String,String>): String {
        if (ctx.t() && ctx.exp()){
            const t1 = this.getType(ctx.t(),ts)
            const t2 = this.getType(ctx.exp(),ts)
            console.log(t1,t2)
            if (t1 == t2){
                if (t1 == "Int"){
                    if (ctx.ADD()){
                    return `${this.visit_node(ctx.t(),ts)} ${this.visit_node(ctx.exp(),ts)} i32.add\n`
                    }
                    if (ctx.SUB()){
                        return `${this.visit_node(ctx.t(),ts)} ${this.visit_node(ctx.exp(),ts)} i32.sub\n`
                    }
                }
                if (t1 == "Double"){
                    if (ctx.ADD()){
                        return `${this.visit_node(ctx.t(),ts)} ${this.visit_node(ctx.exp(),ts)} f32.add\n`
                        }
                    if (ctx.SUB()){
                        return `${this.visit_node(ctx.t(),ts)} ${this.visit_node(ctx.exp(),ts)} f32.sub\n`
                    }
                }
            }
        }
        if (ctx.t()){
            return this.visit_node(ctx.t(),ts)
        }
    }
    visitT(ctx: TContext, ts: Map<String,String>): String {
        if (ctx.f() && ctx.t()) {
            const t1 = this.getType(ctx.f(),ts)
            const t2 = this.getType(ctx.t(),ts)
            if (t1 == t2) {
                if (t1 == "Int"){
                    if (ctx.MULT()){
                        return `${this.visit_node(ctx.f(),ts)}${this.visit_node(ctx.t(),ts)}i32.mul\n`
                    }
                    if (ctx.DIV()){
                        return `${this.visit_node(ctx.f(),ts)}${this.visit_node(ctx.t(),ts)}i32.div_s\n`
                    }
                    if (ctx.MOD()){
                        return `${this.visit_node(ctx.f(),ts)}${this.visit_node(ctx.t(),ts)}i32.rem_s\n`
                    }
                }
                if (t1 == "Double"){
                    if (ctx.MULT()){
                        return `${this.visit_node(ctx.f(),ts)}${this.visit_node(ctx.t(),ts)}f32.mul\n`
                    }
                    if (ctx.DIV()){
                        return `${this.visit_node(ctx.f(),ts)}${this.visit_node(ctx.t(),ts)}f32.div_s\n`
                    }
                    if (ctx.MOD()){
                        return `${this.visit_node(ctx.f(),ts)}${this.visit_node(ctx.t(),ts)}f32.rem_s\n`
                    }
                }
            }
           
        }
        if (ctx.f()){
            return this.visit_node(ctx.f(),ts)
        }
    }
    
    visitF(ctx: FContext, ts: Map<String,String>): String {
        if (ctx.ID() && ctx.L_PAREN() && ctx.exp_list() && ctx.R_PAREN){
            return `${ctx.exp_list().map((ctx) => this.visitExp(ctx,ts)).toString().replace(",","")} call $${ctx.ID().getText()}\n`
        }
        if (ctx.ID() && ctx.L_PAREN() && ctx.R_PAREN){
            return `call ${ctx.ID().getText()}`
        }
        if (ctx.L_PAREN() && ctx.exp(0) && ctx.R_PAREN()){
            return "\t( " + this.visit_node(ctx.exp(0),ts) + "\t)\n"
        }
        if (ctx.L_CURLY_PAREN() && ctx.exp(0) && ctx.R_CURLY_PAREN()){
            return "\t( " + this.visit_node(ctx.exp(0),ts) + "\t)\n"
        }
        if (ctx.ID()){
            return `local.get $${ctx.ID().getText()}\n`
        }
        if (ctx.GLOBAL_ID()){
            return `global.get $${ctx.GLOBAL_ID().getText()}\n`
        }
        if (ctx.SUB() && ctx.DECIMAL_NUMBER())
        {
            return `f32.const ${ctx.DECIMAL_NUMBER().getText()}\nf32.neg\n` 
        }
        if (ctx.ADD() && ctx.DECIMAL_NUMBER() || ctx.DECIMAL_NUMBER())
        {
                return `f32.const ${ctx.DECIMAL_NUMBER().getText()}\n` 
        }
        if (ctx.SUB() && ctx.NUMBER())
        {
            return `i32.const ${ctx.NUMBER().getText()}\ni32.neg\n` 
        }
        if (ctx.ADD() && ctx.NUMBER() || ctx.NUMBER())
        {
            return `i32.const ${ctx.NUMBER().getText()} \n`
        }
    }

    visitDefn(ctx: DefnContext, ts?: Map<String, String>): String {
        //TODO: ADD TYPING IN GRAMMAR TO TYPES AND ADD TO IF
        //TODO: REMOVE REDUNDANT CODE
        if(ctx.VAL() && ctx.GLOBAL_ID() && ctx.COLON() && ctx.INT() && ctx.EQUAL() && ctx.NUMBER()){
            return `(global $${ctx.GLOBAL_ID().getText()} i32 (i32.const ${ctx.NUMBER().getText()}))\n`
        }
        if(ctx.VAL() && ctx.GLOBAL_ID() && ctx.COLON() && ctx.DOUBLE() && ctx.EQUAL() && ctx.DECIMAL_NUMBER()){
            return `(global $${ctx.GLOBAL_ID().getText()} f32 (f32.const ${ctx.DECIMAL_NUMBER().getText()}))\n`
       }
        //TODO: ENSURE GRAMMAR DIFFERENTIATES BETWEEN GLOBAL/LOCAL and TYPES, ADD TYPING ENV CHANGE
        if(ctx.VAL() && ctx.ID() && ctx.COLON() && ctx.INT() && ctx.EQUAL() && ctx.NUMBER()){
          return `(local $${ctx.ID().getText()} i32)\n(local.set $${ctx.ID().getText()} (i32.const ${ctx.NUMBER().getText()}))\n`
        }
        if(ctx.VAL() && ctx.ID() && ctx.COLON() && ctx.DOUBLE() && ctx.EQUAL() && ctx.DECIMAL_NUMBER()){
             return `(local $${ctx.ID().getText()} f32)\n(local.set $${ctx.ID().getText()} (f32.const ${ctx.DECIMAL_NUMBER().getText()}))\n`
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.arg_list() && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.DOUBLE()){
            const new_ts = ts.set(ctx.ID().getText(), ctx.DOUBLE().getText())
            return `(func $${ctx.ID()} ${ctx.arg_list().map((ctx) => this.visit_node(ctx,ts)).toString().replace(","," ")} (result f32)\n ${this.visit_node(ctx.exp(), new_ts)})\n`
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.arg_list() && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.VOID()){
            const new_ts = ts.set(ctx.ID().getText(), ctx.VOID().getText())
            return `(func $${ctx.ID()} ${ctx.arg_list().map((ctx) => this.visit_node(ctx,ts)).toString().replace(","," ")} (result  )\n ${this.visit_node(ctx.exp(), new_ts)})\n`
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.arg_list() && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.INT()){
            const new_ts = ts.set(ctx.ID().getText(), ctx.INT().getText())
            return `(func $${ctx.ID()} ${ctx.arg_list().map((ctx) => this.visit_node(ctx,ts)).toString().replace(","," ")} (result i32)\n ${this.visit_node(ctx.exp(), new_ts)})\n`
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.R_PAREN()  && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.INT()){
            const new_ts = ts.set(ctx.ID().getText(), "Int")
            return `(func $${ctx.ID().getText()} (result i32)\n ${this.visit_node(ctx.exp(), new_ts)})\n`
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.R_PAREN()  && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.DOUBLE()){
            const new_ts = ts.set(ctx.ID().getText(), "Double")
            return `(func $${ctx.ID().getText()} (result f32)\n ${this.visit_node(ctx.exp(), new_ts)})\n`
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.R_PAREN()  && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.VOID()){
            const new_ts = ts.set(ctx.ID().getText(), "Double")
            return `(func $${ctx.ID().getText()} (result  )\n ${this.visit_node(ctx.exp(), new_ts)})\n`
        }
    }

    visitArg(ctx: ArgContext, ts?: Map<String, String>): String {
        console.log("here visited")
        if (ctx.ID() && ctx.COLON() && ctx.INT()){
            return `(param $${ctx.ID().getText()} i32) `
        }
        if (ctx.ID() && ctx.COLON() && ctx.DOUBLE()){
            return `(param $${ctx.ID().getText()} f32) `
        }
    }
}