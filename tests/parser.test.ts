import { CharStream, CommonTokenStream, Token } from "antlr4"
import GrammarLexer from "../src/antlr/generated/GrammarLexer"
import GrammarParser from "../src/antlr/generated/GrammarParser"
import { Tree } from "antlr4/src/antlr4/tree/Tree"
import { ThrowErrorListener } from "../src/antlr/ErrorListener"

const parseProgram = (source: string) => {
    const characterSequence = new CharStream(source)
    const lexer = new GrammarLexer(characterSequence)
    const tokens = new CommonTokenStream(lexer)
    const parser = new GrammarParser(tokens)
    parser.removeErrorListeners()
    parser.addErrorListener(new ThrowErrorListener<Token>());
    return parser.prog()
  }
console.log(parseProgram("print_string(4)").prog())

  describe('Parser', () => {
    test('Parser should parser valid program', () => {
      expect(parseProgram("{print_string(4)}")).toBeDefined();
    });
    test('Parser should throw an error for invalid program', () => {
        expect(() => parseProgram("if a < 4; then 3 else 4 print_string(4)")).toThrow(Error);
    });
  });