import { ParserRuleContext, ParseTree, TerminalNode } from "antlr4";
import GrammarParser, { ArgContext, BexpContext, DefnContext, ExpContext, FContext, MContext, ProgContext, TContext } from "./antlr/generated/GrammarParser";
import GrammarVisitor from "./antlr/generated/GrammarVisitor";

type Context = FContext | ExpContext | MContext | TContext | DefnContext 

 export class Compiler extends GrammarVisitor<[String, Map<String,String>]>{
    public code_start: string = '(module \n (import "console" "log" (func $log (param i32))) \n'
    public code_end: string = ')'
    private env: Map<string, number> = new Map<string,number>
    private typeConvert: Map<string,string> = new Map<string,string>([["Int","i32"], ["Double","f32"]])

    getType(ctx: Context, ts: Map<String,String>): String {
       if (ctx instanceof FContext) {
        if (ctx.L_CURLY_PAREN() && ctx.exp(0) && ctx.R_CURLY_PAREN()){
            return this.getType(ctx.exp(0), ts)
        }
        if (ctx.ID() && ctx.L_PAREN() && ctx.exp_list() && ctx.R_PAREN || ctx.ID() && ctx.L_PAREN() && ctx.R_PAREN || ctx.ID()){
            return ts.get(ctx.ID().getText())
        }
        if (ctx.L_PAREN() && ctx.exp(0) && ctx.R_PAREN() ){
            return this.getType(ctx.exp(0),ts)
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
                console.log(t1)
                return t1
            }
            if (ctx.m()) return this.getType(ctx.m(),ts)
        }
    }
     makeParams: (ctx: ArgContext[], env: Map<String,String>) => [String,Map<String,String>] = (ctx: ArgContext[], env: Map<String,String>)  => {
        let p = "";
        let t = env;
        // console.log(t)
        for (let i = 0; i < ctx.length; i++){
            let [param,n_ts] = this.visit_node(ctx[i],t)
            p += param
            t = n_ts
        }
        // console.log(t)
        return [p, t]
    }

    visitBexp(ctx: BexpContext, ts?: Map<String, String>): [String,Map<String,String>] {
        if(ctx.exp(0) && ctx.exp(1)){
            const e1 = this.visit_node(ctx.exp(0),ts)[0]
            const e2 = this.visit_node(ctx.exp(1),ts)[0]
            const t1 = this.getType(ctx.exp(0),ts)
            const t2 = this.getType(ctx.exp(1),ts)
            const sameType = t1 == t2
            if(sameType && t1 == "Int"){
                if (ctx.EQUAL_TO()) return [`${e1}${e2}i32.eq\n`,ts]
                if (ctx.NOT_EQUAL_TO()) return [`${e1}${e2}i32.ne\n`,ts]
                if (ctx.LESS_THAN()) return [`${e1}${e2}i32.lt_s\n`,ts]
                if (ctx.LESS_THAN_EQUAL()) return [`${e1}${e2}i32.le_s\n`,ts]
                if (ctx.MORE_THAN()) return [`${e1}${e2}i32.gt_s\n`,ts]
                if (ctx.MORE_THAN_EQUAL()) return [`${e1}${e2}i32.gt_e\n`,ts]
            }
            if(sameType && t1 == "Double"){
                if (ctx.EQUAL_TO()) return [`${e1}${e2}f32.eq\n`,ts]
                if (ctx.NOT_EQUAL_TO()) return [`${e1}${e2}f32.ne\n`,ts]
                if (ctx.LESS_THAN()) return [`${e1}${e2}f32.lt\n`,ts]
                if (ctx.LESS_THAN_EQUAL()) return [`${e1}${e2}f32.le\n`,ts]
                if (ctx.MORE_THAN()) return [`${e1}${e2}f32.gt\n`,ts]
                if (ctx.MORE_THAN_EQUAL()) return [`${e1}${e2}f32.gt\n`,ts]
            }
            else throw new Error(`Boolean expression has two different types:${ts.entries}`)
        }
    }
    visitExp(ctx: ExpContext, ts: Map<String,String>): [String,Map<String,String>] {
       if (ctx.T_SKIP() && ctx.L_PAREN() && ctx.R_PAREN()) return [`call $skip\n`,ts]
       if (ctx.T_SKIP()) return [`call $skip\n`,ts]
       if (ctx.IF() && ctx.bexp() && ctx.THEN() && ctx.exp(0) && ctx.ELSE() && ctx.exp(1)){
            const t1 = this.getType(ctx.exp(0),ts)
            const t2 = this.getType(ctx.exp(1),ts)
            console.log("type1",this.visit_node(ctx.bexp(),ts))
            console.log("type2",t2)
            if (t1 == t2){
                if (t1 == "Int") return  [this.visit_node(ctx.bexp(),ts)[0] + `(if (result i32)\n (then\n ${this.visit_node(ctx.exp(0),ts)[0]}) (else\n ${this.visit_node(ctx.exp(1),ts)[0]})\n)\n`,ts]
                if (t1 == "Double") return [this.visit_node(ctx.bexp(),ts)[0] + `(if (result f32)\n (then\n ${this.visit_node(ctx.exp(0),ts)[0]}) (else\n ${this.visit_node(ctx.exp(1),ts)[0]})\n)\n`,ts]
                if (t1 == "Void") return [this.visit_node(ctx.bexp(),ts)[0] + `(if (result )\n (then\n ${this.visit_node(ctx.exp(0),ts)[0]}) (else\n ${this.visit_node(ctx.exp(1),ts)[0]})\n)\n`,ts]
            }
       }
       if (ctx.m() && ctx.SEMI_COLON() && ctx.exp(0)){
            return [`${this.visit_node(ctx.m(),ts)[0]}${this.visit_node(ctx.exp(0),ts)[0]}`,ts]
       }
       if (ctx.m()){
            return this.visit_node(ctx.m(),ts)
       }
    }

    visitM(ctx: MContext, ts: Map<String,String>): [String,Map<String,String>] {
        if (ctx.t() && ctx.exp()){
            const t1 = this.getType(ctx.t(),ts)
            const t2 = this.getType(ctx.exp(),ts)
            // console.log(t1,t2)
            if (t1 == t2){
                if (t1 == "Int"){
                    if (ctx.ADD()){
                    return [`${this.visit_node(ctx.t(),ts)[0]} ${this.visit_node(ctx.exp(),ts)[0]} i32.add\n`, ts]
                    }
                    if (ctx.SUB()){
                        return [`${this.visit_node(ctx.t(),ts)[0]} ${this.visit_node(ctx.exp(),ts)[0]} i32.sub\n`,ts]
                    }
                }
                if (t1 == "Double"){
                    if (ctx.ADD()){
                        return [`${this.visit_node(ctx.t(),ts)[0]} ${this.visit_node(ctx.exp(),ts[0])} f32.add\n`,ts]
                        }
                    if (ctx.SUB()){
                        return [`${this.visit_node(ctx.t(),ts)[0]} ${this.visit_node(ctx.exp(),ts)[0]} f32.sub\n`,ts]
                    }
                }
            }
        }
        if (ctx.t()){
            return this.visit_node(ctx.t(),ts)
        }
    }
    visitT(ctx: TContext, ts: Map<String,String>): [String,Map<String,String>] {
        if (ctx.f() && ctx.t()) {
            const t1 = this.getType(ctx.f(),ts)
            const t2 = this.getType(ctx.t(),ts)
            if (t1 == t2) {
                if (t1 == "Int"){
                    if (ctx.MULT()){
                        return [`${this.visit_node(ctx.f(),ts)[0]}${this.visit_node(ctx.t(),ts)[0]}i32.mul\n`,ts]
                    }
                    if (ctx.DIV()){
                        return [`${this.visit_node(ctx.f(),ts)[0]}${this.visit_node(ctx.t(),ts)[0]}i32.div_s\n`,ts]
                    }
                    if (ctx.MOD()){
                        return [`${this.visit_node(ctx.f(),ts)[0]}${this.visit_node(ctx.t(),ts)[0]}i32.rem_s\n`,ts]
                    }
                }
                if (t1 == "Double"){
                    if (ctx.MULT()){
                        return [`${this.visit_node(ctx.f(),ts)[0]}${this.visit_node(ctx.t(),ts)[0]}f32.mul\n`,ts]
                    }
                    if (ctx.DIV()){
                        return [`${this.visit_node(ctx.f(),ts)[0]}${this.visit_node(ctx.t(),ts)[0]}f32.div_s\n`,ts]
                    }
                    if (ctx.MOD()){
                        return [`${this.visit_node(ctx.f(),ts)[0]}${this.visit_node(ctx.t(),ts)[0]}f32.rem_s\n`,ts]
                    }
                }
            }
           
        }
        if (ctx.f()){
            return this.visit_node(ctx.f(),ts)
        }
    }
    
    visitF(ctx: FContext, ts: Map<String,String>): [String, Map<String,String>] {
        if (ctx.ID() && ctx.L_PAREN() && ctx.exp_list() && ctx.R_PAREN){
            return [`${ctx.exp_list().map((ctx) => this.visitExp(ctx,ts)[0]).toString().replace(",","")} call $${ctx.ID().getText()}\n`,ts]
        }
        if (ctx.ID() && ctx.L_PAREN() && ctx.R_PAREN){
            return [`call ${ctx.ID().getText()}`,ts]
        }
        if (ctx.L_PAREN() && ctx.exp(0) && ctx.R_PAREN()){
            console.log(this.visit_node(ctx.exp(0),ts))
            return [ this.visit_node(ctx.exp(0),ts)[0] + "\n",ts]
        }
        if (ctx.L_CURLY_PAREN() && ctx.exp(0) && ctx.R_CURLY_PAREN()){
            console.log(this.visit_node(ctx.exp(0),ts))
            return ["" + this.visit_node(ctx.exp(0),ts)[0] + "\n", ts]
        }
        if (ctx.ID()){
            return [`local.get $${ctx.ID().getText()}\n`,ts]
        }
        if (ctx.GLOBAL_ID()){
            return [`global.get $${ctx.GLOBAL_ID().getText()}\n`,ts]
        }
        if (ctx.SUB() && ctx.DECIMAL_NUMBER())
        {
            return [`f32.const ${ctx.DECIMAL_NUMBER().getText()}\nf32.neg\n` ,ts]
        }
        if (ctx.ADD() && ctx.DECIMAL_NUMBER() || ctx.DECIMAL_NUMBER())
        {
                return [`f32.const ${ctx.DECIMAL_NUMBER().getText()}\n`, ts ]
        }
        if (ctx.SUB() && ctx.NUMBER())
        {
            return [`i32.const ${ctx.NUMBER().getText()}\ni32.neg\n`, ts]
        }
        if (ctx.ADD() && ctx.NUMBER() || ctx.NUMBER())
        {
            return [`i32.const ${ctx.NUMBER().getText()} \n`, ts]
        }
    }
    
    visitDefn(ctx: DefnContext, ts?: Map<String, String>): [String,Map<String,String>] {
        //TODO: ADD TYPING IN GRAMMAR TO TYPES AND ADD TO IF
        //TODO: REMOVE REDUNDANT CODE
        if(ctx.VAL() && ctx.GLOBAL_ID() && ctx.COLON() && ctx.INT() && ctx.EQUAL() && ctx.NUMBER()){
            const new_ts = new Map<String,String>([...ts, [ctx.GLOBAL_ID().getText(), "Int"]])
            return [`(global $${ctx.GLOBAL_ID().getText()} i32 (i32.const ${ctx.NUMBER().getText()}))\n`, new_ts]
        }
        if(ctx.VAL() && ctx.GLOBAL_ID() && ctx.COLON() && ctx.DOUBLE() && ctx.EQUAL() && ctx.DECIMAL_NUMBER()){
            const new_ts = new Map<String,String>([...ts, [ctx.GLOBAL_ID().getText(), "Double"]])
            return [`(global $${ctx.GLOBAL_ID().getText()} f32 (f32.const ${ctx.DECIMAL_NUMBER().getText()}))\n`, new_ts]
       }
        //TODO: ENSURE GRAMMAR DIFFERENTIATES BETWEEN GLOBAL/LOCAL and TYPES, ADD TYPING ENV CHANGE
        if(ctx.VAL() && ctx.ID() && ctx.COLON() && ctx.INT() && ctx.EQUAL() && ctx.NUMBER()){
          const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(), "Int"]])
          return [`(local $${ctx.ID().getText()} i32)\n(local.set $${ctx.ID().getText()} (i32.const ${ctx.NUMBER().getText()}))\n`, new_ts]
        }
        if(ctx.VAL() && ctx.ID() && ctx.COLON() && ctx.DOUBLE() && ctx.EQUAL() && ctx.DECIMAL_NUMBER()){
             const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(), "Double"]])
             return [`(local $${ctx.ID().getText()} f32)\n(local.set $${ctx.ID().getText()} (f32.const ${ctx.DECIMAL_NUMBER().getText()}))\n`, new_ts]
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.arg_list() && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.DOUBLE()){
            const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(), "Int"]])
            const [params, u_ts] = this.makeParams(ctx.arg_list(),new_ts)
            return [`(func $${ctx.ID()} ${params} (result f32)\n ${this.visit_node(ctx.exp(), u_ts)[0]})\n`,u_ts]
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.arg_list() && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.VOID()){
            const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(), "Void"]])
            const [params, u_ts] = this.makeParams(ctx.arg_list(),new_ts)
            return [`(func $${ctx.ID()} ${params} (result  )\n ${this.visit_node(ctx.exp(), u_ts)[0]})\n`, u_ts]
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.arg_list() && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.INT()){
            const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(), "Int"]])
            const [params, u_ts] = this.makeParams(ctx.arg_list(),new_ts)
            return [`(func $${ctx.ID()} ${params} (result i32)\n ${this.visit_node(ctx.exp(), u_ts)[0]})\n`, u_ts]
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.R_PAREN()  && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.INT()){
            const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(), "Int"]])
            return [`(func $${ctx.ID().getText()} (result i32)\n ${this.visit_node(ctx.exp(), new_ts)[0]})\n`, new_ts]
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.R_PAREN()  && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.DOUBLE()){
            const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(), "Double"]])
            return [`(func $${ctx.ID().getText()} (result f32)\n ${this.visit_node(ctx.exp(), new_ts)[0]})\n`, new_ts]
        }
        if (ctx.DEF()  && ctx.L_PAREN() && ctx.ID() && ctx.R_PAREN()  && ctx.COLON && ctx.EQUAL() && ctx.exp() && ctx.VOID()){
            const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(), "Void"]])
            return [`(func $${ctx.ID().getText()} (result  )\n ${this.visit_node(ctx.exp(), new_ts)[0]})\n`,new_ts]
        }
    }

    visitArg(ctx: ArgContext, ts?: Map<String, String>): [String, Map<String,String>] {
        // console.log("here visited")
        if (ctx.ID() && ctx.COLON() && ctx.INT()){
            const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(),"Int"]])
            return [`(param $${ctx.ID().getText()} i32) `, new_ts]
        }
        if (ctx.ID() && ctx.COLON() && ctx.DOUBLE()){
            const new_ts = new Map<String,String>([...ts, [ctx.ID().getText(),"Int"]])
            return [`(param $${ctx.ID().getText()} f32)`, new_ts]
        }
    }

    visitProg(ctx: ProgContext, ts: Map<String,String>): [String, Map<String,String>] {
        if (ctx.defn() && ctx.SEMI_COLON() && ctx.prog()){
            const [code, new_ts] = this.visit_node(ctx.defn(),ts)
            return [`${code} ${this.visit_node(ctx.prog(),new_ts)[0]}`, new_ts]
        }
        if (ctx.exp_list()) {
            // TODO: ADD expression parser for env updating
            console.log(this.visit_node(ctx.exp(0),ts))
            console.log(this.visit_node(ctx.exp(1),ts))
            return ["(func (export \"main\") (result i32)\n" +  ctx.exp_list().map((ctx) => this.visit_node(ctx,ts)[0]).toString().replace(",","\n") + "i32.const 0\nreturn)\n", ts]
        }
       if (ctx.block()){
            return [`(${this.visit_node(ctx.block(), ts)[0]})`,ts]
       }
    }
}
