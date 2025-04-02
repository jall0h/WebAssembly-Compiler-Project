import { CharStream, CommonTokenStream, Token } from "antlr4"
import GrammarLexer from "../src/antlr/generated/GrammarLexer"
import GrammarParser from "../src/antlr/generated/GrammarParser"
import { ThrowErrorListener } from "../src/antlr/ErrorListener"
import {describe, expect, test} from '@jest/globals';
import { Compiler } from "../src/compiler";

const getSyntaxTree = (source : string) =>{
  const compiler = new Compiler()
  const lexedProgram = compiler.lexProgram(source)
  const tree = compiler.parseProgram(lexedProgram)
  return tree
}

  describe('Parser', () => {
    test('Parser should parser valid program', () => {
      expect(getSyntaxTree("{print_string(4)}")).toBeDefined();
    });
    test('Parser should throw an error for invalid program', () => {
        expect(() => getSyntaxTree("if a < 4; then 3 else 4 print_string(4)")).toThrow();
    });
  });