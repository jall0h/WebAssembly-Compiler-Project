import { CharStream, CommonTokenStream } from "antlr4";
import GrammarLexer from "../src/antlr/generated/GrammarLexer";
// import {describe, expect, test} from '@jest/globals';

const lexProgram = (source: string) => {
    const characterSequence = new CharStream(source)
    const lexer = new GrammarLexer(characterSequence)
    const tokens = new CommonTokenStream(lexer)
    return lexer.getAllTokens().map((t) => lexer.getSymbolicNames()[t.type])
}




describe('Lexer', () => {
    test('Lexer recognises numbers', () => {
      expect(lexProgram("1 2 3")).toStrictEqual(["NUMBER", "NUMBER", "NUMBER"]);
    });
    test('Lexer recognises decimal numbers', () => {
        expect(lexProgram("1.2 2.4 3.7")).toStrictEqual(["DECIMAL_NUMBER", "DECIMAL_NUMBER", "DECIMAL_NUMBER"]);
      });
      test('Lexer recognises key words', () => {
        expect(lexProgram("skip if then else while do def val Int Double String Void")).toStrictEqual(["T_SKIP", "IF", "THEN", "ELSE", "WHILE", "DO", "DEF", "VAL", "INT", "DOUBLE", "STRING_TYPE", "VOID"]);
      });
      test('Lexer recognises identifers', () => {
        expect(lexProgram("Abu x y ")).toStrictEqual(["GLOBAL_ID", "ID", "ID"]);
      });
      test('Lexer recognises strings', () => {
        expect(lexProgram("\"I am a cool A_FUN compiler\" ")).toStrictEqual(["STRING"]);
      });
      test('Lexer recognises Operators', () => {
        expect(lexProgram("+ - * / % > < >= <= == != = && || { } [ ] ( ) ; , :")).toStrictEqual(["ADD","SUB","MULT", "DIV", "MOD", "MORE_THAN", "LESS_THAN",
                                                                                                  "MORE_THAN_EQUAL", "LESS_THAN_EQUAL", "EQUAL_TO", "NOT_EQUAL_TO",
                                                                                                  "EQUAL", "AND_OP", "OR_OP", "L_CURLY_PAREN", "R_CURLY_PAREN",
                                                                                                  "L_SQUARE_PAREN","R_SQUARE_PAREN", "L_PAREN", "R_PAREN", "SEMI_COLON", "COMMA", "COLON"]);
      });
      test('Lexer ignores Whitespce', () => {
        expect(lexProgram("\n\n\n\n\t\t\t\t\t\r\r\n")).toStrictEqual([]);
      });
  });



