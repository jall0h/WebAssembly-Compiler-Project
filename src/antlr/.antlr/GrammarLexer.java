// Generated from c:/Users/SSSha/Desktop/WebAssembly-Compiler-Project/src/antlr/Grammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class GrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T_SKIP=1, TRUE=2, FALSE=3, IF=4, THEN=5, ELSE=6, WHILE=7, DO=8, DEF=9, 
		VAL=10, INT=11, DOUBLE=12, VOID=13, NUMBER=14, DECIMAL_NUMBER=15, ID=16, 
		GLOBAL_ID=17, ADD=18, SUB=19, MULT=20, DIV=21, MOD=22, MORE_THAN=23, LESS_THAN=24, 
		MORE_THAN_EQUAL=25, LESS_THAN_EQUAL=26, EQUAL_TO=27, NOT_EQUAL_TO=28, 
		EQUAL=29, L_CURLY_PAREN=30, R_CURLY_PAREN=31, L_PAREN=32, R_PAREN=33, 
		SEMI_COLON=34, COMMA=35, COLON=36, WHITESPACE=37;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T_SKIP", "TRUE", "FALSE", "IF", "THEN", "ELSE", "WHILE", "DO", "DEF", 
			"VAL", "INT", "DOUBLE", "VOID", "NUMBER", "DECIMAL_NUMBER", "ID", "GLOBAL_ID", 
			"ADD", "SUB", "MULT", "DIV", "MOD", "MORE_THAN", "LESS_THAN", "MORE_THAN_EQUAL", 
			"LESS_THAN_EQUAL", "EQUAL_TO", "NOT_EQUAL_TO", "EQUAL", "L_CURLY_PAREN", 
			"R_CURLY_PAREN", "L_PAREN", "R_PAREN", "SEMI_COLON", "COMMA", "COLON", 
			"WHITESPACE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'skip'", "'true'", "'false'", "'if'", "'then'", "'else'", "'while'", 
			"'do'", "'def'", "'val'", "'Int'", "'Double'", "'Void'", null, null, 
			null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "'>'", "'<'", "'>='", 
			"'<='", "'=='", "'!='", "'='", "'{'", "'}'", "'('", "')'", "';'", "','", 
			"':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "T_SKIP", "TRUE", "FALSE", "IF", "THEN", "ELSE", "WHILE", "DO", 
			"DEF", "VAL", "INT", "DOUBLE", "VOID", "NUMBER", "DECIMAL_NUMBER", "ID", 
			"GLOBAL_ID", "ADD", "SUB", "MULT", "DIV", "MOD", "MORE_THAN", "LESS_THAN", 
			"MORE_THAN_EQUAL", "LESS_THAN_EQUAL", "EQUAL_TO", "NOT_EQUAL_TO", "EQUAL", 
			"L_CURLY_PAREN", "R_CURLY_PAREN", "L_PAREN", "R_PAREN", "SEMI_COLON", 
			"COMMA", "COLON", "WHITESPACE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public GrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Grammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000%\u00e1\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002"+
		"\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002"+
		"\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002"+
		"\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007"+
		"!\u0002\"\u0007\"\u0002#\u0007#\u0002$\u0007$\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0005\r\u008c\b\r\n\r\f\r\u008f\t\r\u0001\r\u0003\r"+
		"\u0092\b\r\u0001\u000e\u0004\u000e\u0095\b\u000e\u000b\u000e\f\u000e\u0096"+
		"\u0001\u000e\u0001\u000e\u0004\u000e\u009b\b\u000e\u000b\u000e\f\u000e"+
		"\u009c\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0005\u000f\u00a3"+
		"\b\u000f\n\u000f\f\u000f\u00a6\t\u000f\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0005\u0010\u00ac\b\u0010\n\u0010\f\u0010\u00af\t\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001"+
		"\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001"+
		"\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0001"+
		"\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001!\u0001"+
		"!\u0001\"\u0001\"\u0001#\u0001#\u0001$\u0004$\u00dc\b$\u000b$\f$\u00dd"+
		"\u0001$\u0001$\u0000\u0000%\u0001\u0001\u0003\u0002\u0005\u0003\u0007"+
		"\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b"+
		"\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013"+
		"\'\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b7\u001c9\u001d"+
		";\u001e=\u001f? A!C\"E#G$I%\u0001\u0000\u0007\u0001\u000019\u0001\u0000"+
		"09\u0001\u000000\u0001\u0000az\u0002\u0000AZaz\u0001\u0000AZ\u0003\u0000"+
		"\t\n\r\r  \u00eb\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000"+
		"%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001"+
		"\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000"+
		"\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u0000"+
		"3\u0001\u0000\u0000\u0000\u00005\u0001\u0000\u0000\u0000\u00007\u0001"+
		"\u0000\u0000\u0000\u00009\u0001\u0000\u0000\u0000\u0000;\u0001\u0000\u0000"+
		"\u0000\u0000=\u0001\u0000\u0000\u0000\u0000?\u0001\u0000\u0000\u0000\u0000"+
		"A\u0001\u0000\u0000\u0000\u0000C\u0001\u0000\u0000\u0000\u0000E\u0001"+
		"\u0000\u0000\u0000\u0000G\u0001\u0000\u0000\u0000\u0000I\u0001\u0000\u0000"+
		"\u0000\u0001K\u0001\u0000\u0000\u0000\u0003P\u0001\u0000\u0000\u0000\u0005"+
		"U\u0001\u0000\u0000\u0000\u0007[\u0001\u0000\u0000\u0000\t^\u0001\u0000"+
		"\u0000\u0000\u000bc\u0001\u0000\u0000\u0000\rh\u0001\u0000\u0000\u0000"+
		"\u000fn\u0001\u0000\u0000\u0000\u0011q\u0001\u0000\u0000\u0000\u0013u"+
		"\u0001\u0000\u0000\u0000\u0015y\u0001\u0000\u0000\u0000\u0017}\u0001\u0000"+
		"\u0000\u0000\u0019\u0084\u0001\u0000\u0000\u0000\u001b\u0091\u0001\u0000"+
		"\u0000\u0000\u001d\u0094\u0001\u0000\u0000\u0000\u001f\u009e\u0001\u0000"+
		"\u0000\u0000!\u00a7\u0001\u0000\u0000\u0000#\u00b0\u0001\u0000\u0000\u0000"+
		"%\u00b2\u0001\u0000\u0000\u0000\'\u00b4\u0001\u0000\u0000\u0000)\u00b6"+
		"\u0001\u0000\u0000\u0000+\u00b8\u0001\u0000\u0000\u0000-\u00ba\u0001\u0000"+
		"\u0000\u0000/\u00bc\u0001\u0000\u0000\u00001\u00be\u0001\u0000\u0000\u0000"+
		"3\u00c1\u0001\u0000\u0000\u00005\u00c4\u0001\u0000\u0000\u00007\u00c7"+
		"\u0001\u0000\u0000\u00009\u00ca\u0001\u0000\u0000\u0000;\u00cc\u0001\u0000"+
		"\u0000\u0000=\u00ce\u0001\u0000\u0000\u0000?\u00d0\u0001\u0000\u0000\u0000"+
		"A\u00d2\u0001\u0000\u0000\u0000C\u00d4\u0001\u0000\u0000\u0000E\u00d6"+
		"\u0001\u0000\u0000\u0000G\u00d8\u0001\u0000\u0000\u0000I\u00db\u0001\u0000"+
		"\u0000\u0000KL\u0005s\u0000\u0000LM\u0005k\u0000\u0000MN\u0005i\u0000"+
		"\u0000NO\u0005p\u0000\u0000O\u0002\u0001\u0000\u0000\u0000PQ\u0005t\u0000"+
		"\u0000QR\u0005r\u0000\u0000RS\u0005u\u0000\u0000ST\u0005e\u0000\u0000"+
		"T\u0004\u0001\u0000\u0000\u0000UV\u0005f\u0000\u0000VW\u0005a\u0000\u0000"+
		"WX\u0005l\u0000\u0000XY\u0005s\u0000\u0000YZ\u0005e\u0000\u0000Z\u0006"+
		"\u0001\u0000\u0000\u0000[\\\u0005i\u0000\u0000\\]\u0005f\u0000\u0000]"+
		"\b\u0001\u0000\u0000\u0000^_\u0005t\u0000\u0000_`\u0005h\u0000\u0000`"+
		"a\u0005e\u0000\u0000ab\u0005n\u0000\u0000b\n\u0001\u0000\u0000\u0000c"+
		"d\u0005e\u0000\u0000de\u0005l\u0000\u0000ef\u0005s\u0000\u0000fg\u0005"+
		"e\u0000\u0000g\f\u0001\u0000\u0000\u0000hi\u0005w\u0000\u0000ij\u0005"+
		"h\u0000\u0000jk\u0005i\u0000\u0000kl\u0005l\u0000\u0000lm\u0005e\u0000"+
		"\u0000m\u000e\u0001\u0000\u0000\u0000no\u0005d\u0000\u0000op\u0005o\u0000"+
		"\u0000p\u0010\u0001\u0000\u0000\u0000qr\u0005d\u0000\u0000rs\u0005e\u0000"+
		"\u0000st\u0005f\u0000\u0000t\u0012\u0001\u0000\u0000\u0000uv\u0005v\u0000"+
		"\u0000vw\u0005a\u0000\u0000wx\u0005l\u0000\u0000x\u0014\u0001\u0000\u0000"+
		"\u0000yz\u0005I\u0000\u0000z{\u0005n\u0000\u0000{|\u0005t\u0000\u0000"+
		"|\u0016\u0001\u0000\u0000\u0000}~\u0005D\u0000\u0000~\u007f\u0005o\u0000"+
		"\u0000\u007f\u0080\u0005u\u0000\u0000\u0080\u0081\u0005b\u0000\u0000\u0081"+
		"\u0082\u0005l\u0000\u0000\u0082\u0083\u0005e\u0000\u0000\u0083\u0018\u0001"+
		"\u0000\u0000\u0000\u0084\u0085\u0005V\u0000\u0000\u0085\u0086\u0005o\u0000"+
		"\u0000\u0086\u0087\u0005i\u0000\u0000\u0087\u0088\u0005d\u0000\u0000\u0088"+
		"\u001a\u0001\u0000\u0000\u0000\u0089\u008d\u0007\u0000\u0000\u0000\u008a"+
		"\u008c\u0007\u0001\u0000\u0000\u008b\u008a\u0001\u0000\u0000\u0000\u008c"+
		"\u008f\u0001\u0000\u0000\u0000\u008d\u008b\u0001\u0000\u0000\u0000\u008d"+
		"\u008e\u0001\u0000\u0000\u0000\u008e\u0092\u0001\u0000\u0000\u0000\u008f"+
		"\u008d\u0001\u0000\u0000\u0000\u0090\u0092\u0007\u0002\u0000\u0000\u0091"+
		"\u0089\u0001\u0000\u0000\u0000\u0091\u0090\u0001\u0000\u0000\u0000\u0092"+
		"\u001c\u0001\u0000\u0000\u0000\u0093\u0095\u0007\u0001\u0000\u0000\u0094"+
		"\u0093\u0001\u0000\u0000\u0000\u0095\u0096\u0001\u0000\u0000\u0000\u0096"+
		"\u0094\u0001\u0000\u0000\u0000\u0096\u0097\u0001\u0000\u0000\u0000\u0097"+
		"\u0098\u0001\u0000\u0000\u0000\u0098\u009a\u0005.\u0000\u0000\u0099\u009b"+
		"\u0007\u0001\u0000\u0000\u009a\u0099\u0001\u0000\u0000\u0000\u009b\u009c"+
		"\u0001\u0000\u0000\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009c\u009d"+
		"\u0001\u0000\u0000\u0000\u009d\u001e\u0001\u0000\u0000\u0000\u009e\u00a4"+
		"\u0007\u0003\u0000\u0000\u009f\u00a3\u0007\u0004\u0000\u0000\u00a0\u00a3"+
		"\u0003\u001b\r\u0000\u00a1\u00a3\u0005_\u0000\u0000\u00a2\u009f\u0001"+
		"\u0000\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a2\u00a1\u0001"+
		"\u0000\u0000\u0000\u00a3\u00a6\u0001\u0000\u0000\u0000\u00a4\u00a2\u0001"+
		"\u0000\u0000\u0000\u00a4\u00a5\u0001\u0000\u0000\u0000\u00a5 \u0001\u0000"+
		"\u0000\u0000\u00a6\u00a4\u0001\u0000\u0000\u0000\u00a7\u00ad\u0007\u0005"+
		"\u0000\u0000\u00a8\u00ac\u0007\u0004\u0000\u0000\u00a9\u00ac\u0003\u001b"+
		"\r\u0000\u00aa\u00ac\u0005_\u0000\u0000\u00ab\u00a8\u0001\u0000\u0000"+
		"\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000\u00ab\u00aa\u0001\u0000\u0000"+
		"\u0000\u00ac\u00af\u0001\u0000\u0000\u0000\u00ad\u00ab\u0001\u0000\u0000"+
		"\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae\"\u0001\u0000\u0000\u0000"+
		"\u00af\u00ad\u0001\u0000\u0000\u0000\u00b0\u00b1\u0005+\u0000\u0000\u00b1"+
		"$\u0001\u0000\u0000\u0000\u00b2\u00b3\u0005-\u0000\u0000\u00b3&\u0001"+
		"\u0000\u0000\u0000\u00b4\u00b5\u0005*\u0000\u0000\u00b5(\u0001\u0000\u0000"+
		"\u0000\u00b6\u00b7\u0005/\u0000\u0000\u00b7*\u0001\u0000\u0000\u0000\u00b8"+
		"\u00b9\u0005%\u0000\u0000\u00b9,\u0001\u0000\u0000\u0000\u00ba\u00bb\u0005"+
		">\u0000\u0000\u00bb.\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005<\u0000"+
		"\u0000\u00bd0\u0001\u0000\u0000\u0000\u00be\u00bf\u0005>\u0000\u0000\u00bf"+
		"\u00c0\u0005=\u0000\u0000\u00c02\u0001\u0000\u0000\u0000\u00c1\u00c2\u0005"+
		"<\u0000\u0000\u00c2\u00c3\u0005=\u0000\u0000\u00c34\u0001\u0000\u0000"+
		"\u0000\u00c4\u00c5\u0005=\u0000\u0000\u00c5\u00c6\u0005=\u0000\u0000\u00c6"+
		"6\u0001\u0000\u0000\u0000\u00c7\u00c8\u0005!\u0000\u0000\u00c8\u00c9\u0005"+
		"=\u0000\u0000\u00c98\u0001\u0000\u0000\u0000\u00ca\u00cb\u0005=\u0000"+
		"\u0000\u00cb:\u0001\u0000\u0000\u0000\u00cc\u00cd\u0005{\u0000\u0000\u00cd"+
		"<\u0001\u0000\u0000\u0000\u00ce\u00cf\u0005}\u0000\u0000\u00cf>\u0001"+
		"\u0000\u0000\u0000\u00d0\u00d1\u0005(\u0000\u0000\u00d1@\u0001\u0000\u0000"+
		"\u0000\u00d2\u00d3\u0005)\u0000\u0000\u00d3B\u0001\u0000\u0000\u0000\u00d4"+
		"\u00d5\u0005;\u0000\u0000\u00d5D\u0001\u0000\u0000\u0000\u00d6\u00d7\u0005"+
		",\u0000\u0000\u00d7F\u0001\u0000\u0000\u0000\u00d8\u00d9\u0005:\u0000"+
		"\u0000\u00d9H\u0001\u0000\u0000\u0000\u00da\u00dc\u0007\u0006\u0000\u0000"+
		"\u00db\u00da\u0001\u0000\u0000\u0000\u00dc\u00dd\u0001\u0000\u0000\u0000"+
		"\u00dd\u00db\u0001\u0000\u0000\u0000\u00dd\u00de\u0001\u0000\u0000\u0000"+
		"\u00de\u00df\u0001\u0000\u0000\u0000\u00df\u00e0\u0006$\u0000\u0000\u00e0"+
		"J\u0001\u0000\u0000\u0000\n\u0000\u008d\u0091\u0096\u009c\u00a2\u00a4"+
		"\u00ab\u00ad\u00dd\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}