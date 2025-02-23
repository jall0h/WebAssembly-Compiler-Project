import { CharStream, CommonTokenStream } from "antlr4";
import GrammarLexer from "./antlr/generated/GrammarLexer";
import GrammarParser from "./antlr/generated/GrammarParser";
import { Compiler } from "./compiler";
import fs from 'fs';
import {exec} from 'child_process'

const args = process.argv;
if (args.length !== 3){
    throw new Error("Incorrect Usage")
}
const file = args[2];
const file_input:string = fs.readFileSync(`./src/examples/${file}.fun`, 'utf-8')

const input = new CharStream(file_input)
const lexer = new GrammarLexer (input)
const tokens = new CommonTokenStream(lexer)
// console.log(tokens)
const parser = new GrammarParser(tokens)
const tree = parser.prog()
// console.log(tree)
const listener = new Compiler()
const f = new Map<String,String>()
f.set("log","Void")
f.set("skip","Void")
f.set("print_string", "Void")
const body = listener.visit_node(tree,f)[0]
const code = listener.code_start + body + listener.code_end
fs.writeFile(`./src/wat/${file}.wat`,code, (err) => {console.log(err)})

// execute(file)




