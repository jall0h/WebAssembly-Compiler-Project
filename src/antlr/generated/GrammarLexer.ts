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
	public static readonly STRING_TYPE = 13;
	public static readonly VOID = 14;
	public static readonly NUMBER = 15;
	public static readonly DECIMAL_NUMBER = 16;
	public static readonly ID = 17;
	public static readonly GLOBAL_ID = 18;
	public static readonly STRING = 19;
	public static readonly ADD = 20;
	public static readonly SUB = 21;
	public static readonly MULT = 22;
	public static readonly DIV = 23;
	public static readonly MOD = 24;
	public static readonly MORE_THAN = 25;
	public static readonly LESS_THAN = 26;
	public static readonly MORE_THAN_EQUAL = 27;
	public static readonly LESS_THAN_EQUAL = 28;
	public static readonly EQUAL_TO = 29;
	public static readonly NOT_EQUAL_TO = 30;
	public static readonly EQUAL = 31;
	public static readonly AND_OP = 32;
	public static readonly OR_OP = 33;
	public static readonly L_CURLY_PAREN = 34;
	public static readonly R_CURLY_PAREN = 35;
	public static readonly L_SQUARE_PAREN = 36;
	public static readonly R_SQUARE_PAREN = 37;
	public static readonly L_PAREN = 38;
	public static readonly R_PAREN = 39;
	public static readonly SEMI_COLON = 40;
	public static readonly COMMA = 41;
	public static readonly COLON = 42;
	public static readonly WHITESPACE = 43;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'skip'", 
                                                            "'true'", "'false'", 
                                                            "'if'", "'then'", 
                                                            "'else'", "'while'", 
                                                            "'do'", "'def'", 
                                                            "'val'", "'Int'", 
                                                            "'Double'", 
                                                            "'String'", 
                                                            "'Void'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'>'", 
                                                            "'<'", "'>='", 
                                                            "'<='", "'=='", 
                                                            "'!='", "'='", 
                                                            "'&&'", "'||'", 
                                                            "'{'", "'}'", 
                                                            "'['", "']'", 
                                                            "'('", "')'", 
                                                            "';'", "','", 
                                                            "':'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "T_SKIP", 
                                                             "TRUE", "FALSE", 
                                                             "IF", "THEN", 
                                                             "ELSE", "WHILE", 
                                                             "DO", "DEF", 
                                                             "VAL", "INT", 
                                                             "DOUBLE", "STRING_TYPE", 
                                                             "VOID", "NUMBER", 
                                                             "DECIMAL_NUMBER", 
                                                             "ID", "GLOBAL_ID", 
                                                             "STRING", "ADD", 
                                                             "SUB", "MULT", 
                                                             "DIV", "MOD", 
                                                             "MORE_THAN", 
                                                             "LESS_THAN", 
                                                             "MORE_THAN_EQUAL", 
                                                             "LESS_THAN_EQUAL", 
                                                             "EQUAL_TO", 
                                                             "NOT_EQUAL_TO", 
                                                             "EQUAL", "AND_OP", 
                                                             "OR_OP", "L_CURLY_PAREN", 
                                                             "R_CURLY_PAREN", 
                                                             "L_SQUARE_PAREN", 
                                                             "R_SQUARE_PAREN", 
                                                             "L_PAREN", 
                                                             "R_PAREN", 
                                                             "SEMI_COLON", 
                                                             "COMMA", "COLON", 
                                                             "WHITESPACE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T_SKIP", "TRUE", "FALSE", "IF", "THEN", "ELSE", "WHILE", "DO", "DEF", 
		"VAL", "INT", "DOUBLE", "STRING_TYPE", "VOID", "NUMBER", "DECIMAL_NUMBER", 
		"ID", "GLOBAL_ID", "STRING", "ADD", "SUB", "MULT", "DIV", "MOD", "MORE_THAN", 
		"LESS_THAN", "MORE_THAN_EQUAL", "LESS_THAN_EQUAL", "EQUAL_TO", "NOT_EQUAL_TO", 
		"EQUAL", "AND_OP", "OR_OP", "L_CURLY_PAREN", "R_CURLY_PAREN", "L_SQUARE_PAREN", 
		"R_SQUARE_PAREN", "L_PAREN", "R_PAREN", "SEMI_COLON", "COMMA", "COLON", 
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

	public static readonly _serializedATN: number[] = [4,0,43,263,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,1,0,1,0,1,0,1,0,1,0,1,1,1,
	1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
	5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,
	9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
	12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,5,14,
	159,8,14,10,14,12,14,162,9,14,1,14,3,14,165,8,14,1,15,4,15,168,8,15,11,
	15,12,15,169,1,15,1,15,4,15,174,8,15,11,15,12,15,175,1,16,1,16,1,16,1,16,
	5,16,182,8,16,10,16,12,16,185,9,16,1,17,1,17,1,17,1,17,5,17,191,8,17,10,
	17,12,17,194,9,17,1,18,1,18,5,18,198,8,18,10,18,12,18,201,9,18,1,18,1,18,
	1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,
	26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,31,
	1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,
	37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,4,42,258,8,42,11,42,12,
	42,259,1,42,1,42,0,0,43,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,
	11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,
	23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,
	35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,1,0,8,1,0,49,57,1,0,
	48,57,1,0,48,48,1,0,97,122,2,0,65,90,97,122,1,0,65,90,1,0,34,34,3,0,9,10,
	13,13,32,32,274,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,
	0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,
	21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,
	0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,
	43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,
	0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,
	65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,
	0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,1,
	87,1,0,0,0,3,92,1,0,0,0,5,97,1,0,0,0,7,103,1,0,0,0,9,106,1,0,0,0,11,111,
	1,0,0,0,13,116,1,0,0,0,15,122,1,0,0,0,17,125,1,0,0,0,19,129,1,0,0,0,21,
	133,1,0,0,0,23,137,1,0,0,0,25,144,1,0,0,0,27,151,1,0,0,0,29,164,1,0,0,0,
	31,167,1,0,0,0,33,177,1,0,0,0,35,186,1,0,0,0,37,195,1,0,0,0,39,204,1,0,
	0,0,41,206,1,0,0,0,43,208,1,0,0,0,45,210,1,0,0,0,47,212,1,0,0,0,49,214,
	1,0,0,0,51,216,1,0,0,0,53,218,1,0,0,0,55,221,1,0,0,0,57,224,1,0,0,0,59,
	227,1,0,0,0,61,230,1,0,0,0,63,232,1,0,0,0,65,235,1,0,0,0,67,238,1,0,0,0,
	69,240,1,0,0,0,71,242,1,0,0,0,73,244,1,0,0,0,75,246,1,0,0,0,77,248,1,0,
	0,0,79,250,1,0,0,0,81,252,1,0,0,0,83,254,1,0,0,0,85,257,1,0,0,0,87,88,5,
	115,0,0,88,89,5,107,0,0,89,90,5,105,0,0,90,91,5,112,0,0,91,2,1,0,0,0,92,
	93,5,116,0,0,93,94,5,114,0,0,94,95,5,117,0,0,95,96,5,101,0,0,96,4,1,0,0,
	0,97,98,5,102,0,0,98,99,5,97,0,0,99,100,5,108,0,0,100,101,5,115,0,0,101,
	102,5,101,0,0,102,6,1,0,0,0,103,104,5,105,0,0,104,105,5,102,0,0,105,8,1,
	0,0,0,106,107,5,116,0,0,107,108,5,104,0,0,108,109,5,101,0,0,109,110,5,110,
	0,0,110,10,1,0,0,0,111,112,5,101,0,0,112,113,5,108,0,0,113,114,5,115,0,
	0,114,115,5,101,0,0,115,12,1,0,0,0,116,117,5,119,0,0,117,118,5,104,0,0,
	118,119,5,105,0,0,119,120,5,108,0,0,120,121,5,101,0,0,121,14,1,0,0,0,122,
	123,5,100,0,0,123,124,5,111,0,0,124,16,1,0,0,0,125,126,5,100,0,0,126,127,
	5,101,0,0,127,128,5,102,0,0,128,18,1,0,0,0,129,130,5,118,0,0,130,131,5,
	97,0,0,131,132,5,108,0,0,132,20,1,0,0,0,133,134,5,73,0,0,134,135,5,110,
	0,0,135,136,5,116,0,0,136,22,1,0,0,0,137,138,5,68,0,0,138,139,5,111,0,0,
	139,140,5,117,0,0,140,141,5,98,0,0,141,142,5,108,0,0,142,143,5,101,0,0,
	143,24,1,0,0,0,144,145,5,83,0,0,145,146,5,116,0,0,146,147,5,114,0,0,147,
	148,5,105,0,0,148,149,5,110,0,0,149,150,5,103,0,0,150,26,1,0,0,0,151,152,
	5,86,0,0,152,153,5,111,0,0,153,154,5,105,0,0,154,155,5,100,0,0,155,28,1,
	0,0,0,156,160,7,0,0,0,157,159,7,1,0,0,158,157,1,0,0,0,159,162,1,0,0,0,160,
	158,1,0,0,0,160,161,1,0,0,0,161,165,1,0,0,0,162,160,1,0,0,0,163,165,7,2,
	0,0,164,156,1,0,0,0,164,163,1,0,0,0,165,30,1,0,0,0,166,168,7,1,0,0,167,
	166,1,0,0,0,168,169,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,171,1,0,
	0,0,171,173,5,46,0,0,172,174,7,1,0,0,173,172,1,0,0,0,174,175,1,0,0,0,175,
	173,1,0,0,0,175,176,1,0,0,0,176,32,1,0,0,0,177,183,7,3,0,0,178,182,7,4,
	0,0,179,182,3,29,14,0,180,182,5,95,0,0,181,178,1,0,0,0,181,179,1,0,0,0,
	181,180,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,34,
	1,0,0,0,185,183,1,0,0,0,186,192,7,5,0,0,187,191,7,4,0,0,188,191,3,29,14,
	0,189,191,5,95,0,0,190,187,1,0,0,0,190,188,1,0,0,0,190,189,1,0,0,0,191,
	194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,36,1,0,0,0,194,192,1,0,
	0,0,195,199,5,34,0,0,196,198,8,6,0,0,197,196,1,0,0,0,198,201,1,0,0,0,199,
	197,1,0,0,0,199,200,1,0,0,0,200,202,1,0,0,0,201,199,1,0,0,0,202,203,5,34,
	0,0,203,38,1,0,0,0,204,205,5,43,0,0,205,40,1,0,0,0,206,207,5,45,0,0,207,
	42,1,0,0,0,208,209,5,42,0,0,209,44,1,0,0,0,210,211,5,47,0,0,211,46,1,0,
	0,0,212,213,5,37,0,0,213,48,1,0,0,0,214,215,5,62,0,0,215,50,1,0,0,0,216,
	217,5,60,0,0,217,52,1,0,0,0,218,219,5,62,0,0,219,220,5,61,0,0,220,54,1,
	0,0,0,221,222,5,60,0,0,222,223,5,61,0,0,223,56,1,0,0,0,224,225,5,61,0,0,
	225,226,5,61,0,0,226,58,1,0,0,0,227,228,5,33,0,0,228,229,5,61,0,0,229,60,
	1,0,0,0,230,231,5,61,0,0,231,62,1,0,0,0,232,233,5,38,0,0,233,234,5,38,0,
	0,234,64,1,0,0,0,235,236,5,124,0,0,236,237,5,124,0,0,237,66,1,0,0,0,238,
	239,5,123,0,0,239,68,1,0,0,0,240,241,5,125,0,0,241,70,1,0,0,0,242,243,5,
	91,0,0,243,72,1,0,0,0,244,245,5,93,0,0,245,74,1,0,0,0,246,247,5,40,0,0,
	247,76,1,0,0,0,248,249,5,41,0,0,249,78,1,0,0,0,250,251,5,59,0,0,251,80,
	1,0,0,0,252,253,5,44,0,0,253,82,1,0,0,0,254,255,5,58,0,0,255,84,1,0,0,0,
	256,258,7,7,0,0,257,256,1,0,0,0,258,259,1,0,0,0,259,257,1,0,0,0,259,260,
	1,0,0,0,260,261,1,0,0,0,261,262,6,42,0,0,262,86,1,0,0,0,11,0,160,164,169,
	175,181,183,190,192,199,259,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GrammarLexer.__ATN) {
			GrammarLexer.__ATN = new ATNDeserializer().deserialize(GrammarLexer._serializedATN);
		}

		return GrammarLexer.__ATN;
	}


	static DecisionsToDFA = GrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}