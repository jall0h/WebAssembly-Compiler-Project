import { CharStream, CommonTokenStream, Token } from "antlr4";
import GrammarLexer from "../src/antlr/generated/GrammarLexer";
import { ThrowErrorListener } from "../src/antlr/ErrorListener";
import GrammarParser from "../src/antlr/generated/GrammarParser";
import { Compiler } from "../src/codegen";
import { type_env } from "../src/types";


const generateWATText = (program: string): string => {
    const input = new CharStream(program)
    const lexer = new GrammarLexer (input) 
    const tokens = new CommonTokenStream(lexer)
    const parser = new GrammarParser(tokens) 

    const tree = parser.prog()
    const listener = new Compiler()
    const initialEnvironment: type_env = new Map()

    //Setup Initial Typing Environment
    initialEnvironment.set("skip",["Void"])
    initialEnvironment.set("print_string", ["Void", "String"])
    initialEnvironment.set("print_int", ["Void", "Int"])
    initialEnvironment.set("print_float", ["Void", "Double"])
    initialEnvironment.set("print_char", ["Void", "Int"])
    initialEnvironment.set("read", ["Int"])
    initialEnvironment.set("length",["Int", "String"])
    initialEnvironment.set("set_val_i32", ["Void", "Int[]", "Int", "Int"])
    initialEnvironment.set("set_val_f32", ["Void", "Double[]", "Int", "Double"])
    const code = listener.compile(tree,initialEnvironment)
   return code
}


describe('Code Generator', () => {
    test('Generates correct code', () => {
      expect(generateWATText(`def hello(): String = "Hello World!\\n";

def print_hello(x: String) : Void = print_string(x);

print_string(hello())`)).toEqual(`(module
(import "process" "print_string" (func $print_string (param i32 i32)))
(import "process" "print_int" (func $print_int (param i32)))
(import "process" "print_char" (func $print_char (param i32)))
(import "process" "print_float" (func $print_float (param f32)))
(import "functions" "string_eq" (func $string_eq (param i32 i32) (param i32 i32) (result i32)))
(import "functions" "string_ne" (func $string_ne (param i32 i32) (param i32 i32) (result i32)))
(import "functions" "length" (func $length (param i32) (param i32) (result i32)))
(import "functions" "set_val_i32" (func $set_val_i32 (param i32) (param i32) (param i32) (result )))
(import "functions" "set_val_f32" (func $set_val_f32 (param i32) (param i32) (param f32) (result )))
(import "functions" "read" (func $read (result i32)))
(import "js" "mem" (memory 1))(data (i32.const 0) "Hello World!\\n")
(func $hello  (result i32 i32)
 i32.const 0
 i32.const 14
)
 (func $print_hello (param $x_o i32) (param $x_l i32) (result  )
 local.get $x_o
local.get $x_l
 call $print_string
)
 (func (export "main") (result i32)
 call $hello
 call $print_string

i32.const 0
return)
)`);
    });
  
  });



