// Generated from Grammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class GrammarLexer extends Lexer {
	public static readonly T_SKIP = 1;
	public static readonly TRUE = 2;
	public static readonly FALSE = 3;
	public static readonly IF = 4;
	public static readonly THEN = 5;
	public static readonly ELSE = 6;
	public static readonly WHILE = 7;
	public static readonly DO = 8;
	public static readonly DEF = 9;
	public static readonly VAL = 10;
	public static readonly INT = 11;
	public static readonly DOUBLE = 12;
	public static readonly VOID = 13;
	public static readonly NUMBER = 14;
	public static readonly DECIMAL_NUMBER = 15;
	public static readonly ID = 16;
	public static readonly GLOBAL_ID = 17;
	public static readonly ADD = 18;
	public static readonly SUB = 19;
	public static readonly MULT = 20;
	public static readonly DIV = 21;
	public static readonly MOD = 22;
	public static readonly MORE_THAN = 23;
	public static readonly LESS_THAN = 24;
	public static readonly MORE_THAN_EQUAL = 25;
	public static readonly LESS_THAN_EQUAL = 26;
	public static readonly EQUAL_TO = 27;
	public static readonly NOT_EQUAL_TO = 28;
	public static readonly EQUAL = 29;
	public static readonly L_CURLY_PAREN = 30;
	public static readonly R_CURLY_PAREN = 31;
	public static readonly L_PAREN = 32;
	public static readonly R_PAREN = 33;
	public static readonly SEMI_COLON = 34;
	public static readonly COMMA = 35;
	public static readonly COLON = 36;
	public static readonly WHITESPACE = 37;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'skip'", 
                                                            "'true'", "'false'", 
                                                            "'if'", "'then'", 
                                                            "'else'", "'while'", 
                                                            "'do'", "'def'", 
                                                            "'val'", "'Int'", 
                                                            "'Double'", 
                                                            "'Void'", null, 
                                                            null, null, 
                                                            null, "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'>'", "'<'", 
                                                            "'>='", "'<='", 
                                                            "'=='", "'!='", 
                                                            "'='", "'{'", 
                                                            "'}'", "'('", 
                                                            "')'", "';'", 
                                                            "','", "':'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "T_SKIP", 
                                                             "TRUE", "FALSE", 
                                                             "IF", "THEN", 
                                                             "ELSE", "WHILE", 
                                                             "DO", "DEF", 
                                                             "VAL", "INT", 
                                                             "DOUBLE", "VOID", 
                                                             "NUMBER", "DECIMAL_NUMBER", 
                                                             "ID", "GLOBAL_ID", 
                                                             "ADD", "SUB", 
                                                             "MULT", "DIV", 
                                                             "MOD", "MORE_THAN", 
                                                             "LESS_THAN", 
                                                             "MORE_THAN_EQUAL", 
                                                             "LESS_THAN_EQUAL", 
                                                             "EQUAL_TO", 
                                                             "NOT_EQUAL_TO", 
                                                             "EQUAL", "L_CURLY_PAREN", 
                                                             "R_CURLY_PAREN", 
                                                             "L_PAREN", 
                                                             "R_PAREN", 
                                                             "SEMI_COLON", 
                                                             "COMMA", "COLON", 
                                                             "WHITESPACE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T_SKIP", "TRUE", "FALSE", "IF", "THEN", "ELSE", "WHILE", "DO", "DEF", 
		"VAL", "INT", "DOUBLE", "VOID", "NUMBER", "DECIMAL_NUMBER", "ID", "GLOBAL_ID", 
		"ADD", "SUB", "MULT", "DIV", "MOD", "MORE_THAN", "LESS_THAN", "MORE_THAN_EQUAL", 
		"LESS_THAN_EQUAL", "EQUAL_TO", "NOT_EQUAL_TO", "EQUAL", "L_CURLY_PAREN", 
		"R_CURLY_PAREN", "L_PAREN", "R_PAREN", "SEMI_COLON", "COMMA", "COLON", 
		"WHITESPACE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, GrammarLexer._ATN, GrammarLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Grammar.g4"; }

	public get literalNames(): (string | null)[] { return GrammarLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return GrammarLexer.symbolicNames; }
	public get ruleNames(): string[] { return GrammarLexer.ruleNames; }

	public get serializedATN(): number[] { return GrammarLexer._serializedATN; }

	public get channelNames(): string[] { return GrammarLexer.channelNames; }

	public get modeNames(): string[] { return GrammarLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,37,225,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,1,
	0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,
	4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,
	8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,
	1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,5,13,140,8,13,10,13,12,13,
	143,9,13,1,13,3,13,146,8,13,1,14,4,14,149,8,14,11,14,12,14,150,1,14,1,14,
	4,14,155,8,14,11,14,12,14,156,1,15,1,15,1,15,1,15,5,15,163,8,15,10,15,12,
	15,166,9,15,1,16,1,16,1,16,1,16,5,16,172,8,16,10,16,12,16,175,9,16,1,17,
	1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,
	24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,29,1,29,
	1,30,1,30,1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,4,36,220,
	8,36,11,36,12,36,221,1,36,1,36,0,0,37,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,
	8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,
	41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,
	65,33,67,34,69,35,71,36,73,37,1,0,7,1,0,49,57,1,0,48,57,1,0,48,48,1,0,97,
	122,2,0,65,90,97,122,1,0,65,90,3,0,9,10,13,13,32,32,235,0,1,1,0,0,0,0,3,
	1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,
	15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,
	0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,
	37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,
	0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,
	59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,
	0,0,0,71,1,0,0,0,0,73,1,0,0,0,1,75,1,0,0,0,3,80,1,0,0,0,5,85,1,0,0,0,7,
	91,1,0,0,0,9,94,1,0,0,0,11,99,1,0,0,0,13,104,1,0,0,0,15,110,1,0,0,0,17,
	113,1,0,0,0,19,117,1,0,0,0,21,121,1,0,0,0,23,125,1,0,0,0,25,132,1,0,0,0,
	27,145,1,0,0,0,29,148,1,0,0,0,31,158,1,0,0,0,33,167,1,0,0,0,35,176,1,0,
	0,0,37,178,1,0,0,0,39,180,1,0,0,0,41,182,1,0,0,0,43,184,1,0,0,0,45,186,
	1,0,0,0,47,188,1,0,0,0,49,190,1,0,0,0,51,193,1,0,0,0,53,196,1,0,0,0,55,
	199,1,0,0,0,57,202,1,0,0,0,59,204,1,0,0,0,61,206,1,0,0,0,63,208,1,0,0,0,
	65,210,1,0,0,0,67,212,1,0,0,0,69,214,1,0,0,0,71,216,1,0,0,0,73,219,1,0,
	0,0,75,76,5,115,0,0,76,77,5,107,0,0,77,78,5,105,0,0,78,79,5,112,0,0,79,
	2,1,0,0,0,80,81,5,116,0,0,81,82,5,114,0,0,82,83,5,117,0,0,83,84,5,101,0,
	0,84,4,1,0,0,0,85,86,5,102,0,0,86,87,5,97,0,0,87,88,5,108,0,0,88,89,5,115,
	0,0,89,90,5,101,0,0,90,6,1,0,0,0,91,92,5,105,0,0,92,93,5,102,0,0,93,8,1,
	0,0,0,94,95,5,116,0,0,95,96,5,104,0,0,96,97,5,101,0,0,97,98,5,110,0,0,98,
	10,1,0,0,0,99,100,5,101,0,0,100,101,5,108,0,0,101,102,5,115,0,0,102,103,
	5,101,0,0,103,12,1,0,0,0,104,105,5,119,0,0,105,106,5,104,0,0,106,107,5,
	105,0,0,107,108,5,108,0,0,108,109,5,101,0,0,109,14,1,0,0,0,110,111,5,100,
	0,0,111,112,5,111,0,0,112,16,1,0,0,0,113,114,5,100,0,0,114,115,5,101,0,
	0,115,116,5,102,0,0,116,18,1,0,0,0,117,118,5,118,0,0,118,119,5,97,0,0,119,
	120,5,108,0,0,120,20,1,0,0,0,121,122,5,73,0,0,122,123,5,110,0,0,123,124,
	5,116,0,0,124,22,1,0,0,0,125,126,5,68,0,0,126,127,5,111,0,0,127,128,5,117,
	0,0,128,129,5,98,0,0,129,130,5,108,0,0,130,131,5,101,0,0,131,24,1,0,0,0,
	132,133,5,86,0,0,133,134,5,111,0,0,134,135,5,105,0,0,135,136,5,100,0,0,
	136,26,1,0,0,0,137,141,7,0,0,0,138,140,7,1,0,0,139,138,1,0,0,0,140,143,
	1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,146,1,0,0,0,143,141,1,0,0,0,
	144,146,7,2,0,0,145,137,1,0,0,0,145,144,1,0,0,0,146,28,1,0,0,0,147,149,
	7,1,0,0,148,147,1,0,0,0,149,150,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,
	151,152,1,0,0,0,152,154,5,46,0,0,153,155,7,1,0,0,154,153,1,0,0,0,155,156,
	1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,30,1,0,0,0,158,164,7,3,0,0,
	159,163,7,4,0,0,160,163,3,27,13,0,161,163,5,95,0,0,162,159,1,0,0,0,162,
	160,1,0,0,0,162,161,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,
	0,0,165,32,1,0,0,0,166,164,1,0,0,0,167,173,7,5,0,0,168,172,7,4,0,0,169,
	172,3,27,13,0,170,172,5,95,0,0,171,168,1,0,0,0,171,169,1,0,0,0,171,170,
	1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,34,1,0,0,0,
	175,173,1,0,0,0,176,177,5,43,0,0,177,36,1,0,0,0,178,179,5,45,0,0,179,38,
	1,0,0,0,180,181,5,42,0,0,181,40,1,0,0,0,182,183,5,47,0,0,183,42,1,0,0,0,
	184,185,5,37,0,0,185,44,1,0,0,0,186,187,5,62,0,0,187,46,1,0,0,0,188,189,
	5,60,0,0,189,48,1,0,0,0,190,191,5,62,0,0,191,192,5,61,0,0,192,50,1,0,0,
	0,193,194,5,60,0,0,194,195,5,61,0,0,195,52,1,0,0,0,196,197,5,61,0,0,197,
	198,5,61,0,0,198,54,1,0,0,0,199,200,5,33,0,0,200,201,5,61,0,0,201,56,1,
	0,0,0,202,203,5,61,0,0,203,58,1,0,0,0,204,205,5,123,0,0,205,60,1,0,0,0,
	206,207,5,125,0,0,207,62,1,0,0,0,208,209,5,40,0,0,209,64,1,0,0,0,210,211,
	5,41,0,0,211,66,1,0,0,0,212,213,5,59,0,0,213,68,1,0,0,0,214,215,5,44,0,
	0,215,70,1,0,0,0,216,217,5,58,0,0,217,72,1,0,0,0,218,220,7,6,0,0,219,218,
	1,0,0,0,220,221,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,223,1,0,0,0,
	223,224,6,36,0,0,224,74,1,0,0,0,10,0,141,145,150,156,162,164,171,173,221,
	1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GrammarLexer.__ATN) {
			GrammarLexer.__ATN = new ATNDeserializer().deserialize(GrammarLexer._serializedATN);
		}

		return GrammarLexer.__ATN;
	}


	static DecisionsToDFA = GrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}