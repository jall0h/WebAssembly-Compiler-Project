import { CharStream, CommonTokenStream } from "antlr4";
import GrammarLexer from "./antlr/generated/GrammarLexer";
import GrammarParser from "./antlr/generated/GrammarParser";
import { Compiler } from "./compiler";


const input = new CharStream("def facT(n: Int, acc: Int) : Int = if n == 0 then acc else facT(n - 1, n * acc);facT(5,1)")
const lexer = new GrammarLexer (input)
const tokens = new CommonTokenStream(lexer)
// console.log(tokens)
const parser = new GrammarParser(tokens)
const tree = parser.prog()
// console.log(tree)
const listener = new Compiler()
const f = new Map<String,String>()
f.set("n", "Int")
f.set("acc", "Int")
f.set("facT", "Int")
console.log(listener.code_start + listener.visit_node(tree,f) + listener.code_end)