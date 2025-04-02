import { CharStream, CommonTokenStream, Token } from "antlr4";
import GrammarLexer from "../src/antlr/generated/GrammarLexer";
import { ThrowErrorListener } from "../src/antlr/ErrorListener";
import GrammarParser from "../src/antlr/generated/GrammarParser";
import { CodeGenerator } from "../src/codegen";
import { type_env } from "../src/types";
import { Compiler } from "../src/compiler";


let compiler;

beforeEach(() => {
   compiler = new Compiler()
})


describe('Code Generator', () => {
    test('Generates correct code', () => {
      expect(compiler.generateWATString("hello")).toEqual(`(module
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
    test('Throws error for incorrect index', () => {
      expect(() =>compiler.generateWATString("test_incorrect")).toThrow();
    });
  });



