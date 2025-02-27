// Generated from c:/Users/SSSha/Desktop/WebAssembly-Compiler-Project/src/antlr/Grammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class GrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T_SKIP=1, TRUE=2, FALSE=3, IF=4, THEN=5, ELSE=6, WHILE=7, DO=8, DEF=9, 
		VAL=10, INT=11, DOUBLE=12, STRING_TYPE=13, VOID=14, ARRAY=15, NUMBER=16, 
		DECIMAL_NUMBER=17, ID=18, GLOBAL_ID=19, STRING=20, ADD=21, SUB=22, MULT=23, 
		DIV=24, MOD=25, MORE_THAN=26, LESS_THAN=27, MORE_THAN_EQUAL=28, LESS_THAN_EQUAL=29, 
		EQUAL_TO=30, NOT_EQUAL_TO=31, EQUAL=32, L_CURLY_PAREN=33, R_CURLY_PAREN=34, 
		L_SQUARE_PAREN=35, R_SQUARE_PAREN=36, L_PAREN=37, R_PAREN=38, SEMI_COLON=39, 
		COMMA=40, COLON=41, WHITESPACE=42;
	public static final int
		RULE_exp = 0, RULE_m = 1, RULE_t = 2, RULE_f = 3, RULE_bexp = 4, RULE_defn = 5, 
		RULE_prog = 6, RULE_block = 7, RULE_arg = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"exp", "m", "t", "f", "bexp", "defn", "prog", "block", "arg"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'skip'", "'true'", "'false'", "'if'", "'then'", "'else'", "'while'", 
			"'do'", "'def'", "'val'", "'Int'", "'Double'", "'String'", "'Void'", 
			"'array'", null, null, null, null, null, "'+'", "'-'", "'*'", "'/'", 
			"'%'", "'>'", "'<'", "'>='", "'<='", "'=='", "'!='", "'='", "'{'", "'}'", 
			"'['", "']'", "'('", "')'", "';'", "','", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "T_SKIP", "TRUE", "FALSE", "IF", "THEN", "ELSE", "WHILE", "DO", 
			"DEF", "VAL", "INT", "DOUBLE", "STRING_TYPE", "VOID", "ARRAY", "NUMBER", 
			"DECIMAL_NUMBER", "ID", "GLOBAL_ID", "STRING", "ADD", "SUB", "MULT", 
			"DIV", "MOD", "MORE_THAN", "LESS_THAN", "MORE_THAN_EQUAL", "LESS_THAN_EQUAL", 
			"EQUAL_TO", "NOT_EQUAL_TO", "EQUAL", "L_CURLY_PAREN", "R_CURLY_PAREN", 
			"L_SQUARE_PAREN", "R_SQUARE_PAREN", "L_PAREN", "R_PAREN", "SEMI_COLON", 
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

	@Override
	public String getGrammarFileName() { return "Grammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpContext extends ParserRuleContext {
		public TerminalNode T_SKIP() { return getToken(GrammarParser.T_SKIP, 0); }
		public TerminalNode L_PAREN() { return getToken(GrammarParser.L_PAREN, 0); }
		public TerminalNode R_PAREN() { return getToken(GrammarParser.R_PAREN, 0); }
		public TerminalNode IF() { return getToken(GrammarParser.IF, 0); }
		public BexpContext bexp() {
			return getRuleContext(BexpContext.class,0);
		}
		public TerminalNode THEN() { return getToken(GrammarParser.THEN, 0); }
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(GrammarParser.ELSE, 0); }
		public MContext m() {
			return getRuleContext(MContext.class,0);
		}
		public TerminalNode SEMI_COLON() { return getToken(GrammarParser.SEMI_COLON, 0); }
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	}

	public final ExpContext exp() throws RecognitionException {
		ExpContext _localctx = new ExpContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_exp);
		try {
			setState(34);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(18);
				match(T_SKIP);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(19);
				match(T_SKIP);
				setState(20);
				match(L_PAREN);
				setState(21);
				match(R_PAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(22);
				match(IF);
				setState(23);
				bexp();
				setState(24);
				match(THEN);
				setState(25);
				exp();
				setState(26);
				match(ELSE);
				setState(27);
				exp();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(29);
				m();
				setState(30);
				match(SEMI_COLON);
				setState(31);
				exp();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(33);
				m();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MContext extends ParserRuleContext {
		public TContext t() {
			return getRuleContext(TContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode ADD() { return getToken(GrammarParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(GrammarParser.SUB, 0); }
		public MContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_m; }
	}

	public final MContext m() throws RecognitionException {
		MContext _localctx = new MContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_m);
		int _la;
		try {
			setState(41);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(36);
				t();
				setState(37);
				_la = _input.LA(1);
				if ( !(_la==ADD || _la==SUB) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(38);
				exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				t();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TContext extends ParserRuleContext {
		public FContext f() {
			return getRuleContext(FContext.class,0);
		}
		public TContext t() {
			return getRuleContext(TContext.class,0);
		}
		public TerminalNode MULT() { return getToken(GrammarParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(GrammarParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(GrammarParser.MOD, 0); }
		public TContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_t; }
	}

	public final TContext t() throws RecognitionException {
		TContext _localctx = new TContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_t);
		int _la;
		try {
			setState(48);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(43);
				f();
				setState(44);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 58720256L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(45);
				t();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				f();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FContext extends ParserRuleContext {
		public TerminalNode L_PAREN() { return getToken(GrammarParser.L_PAREN, 0); }
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode R_PAREN() { return getToken(GrammarParser.R_PAREN, 0); }
		public TerminalNode L_CURLY_PAREN() { return getToken(GrammarParser.L_CURLY_PAREN, 0); }
		public TerminalNode R_CURLY_PAREN() { return getToken(GrammarParser.R_CURLY_PAREN, 0); }
		public TerminalNode ID() { return getToken(GrammarParser.ID, 0); }
		public List<TerminalNode> COMMA() { return getTokens(GrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(GrammarParser.COMMA, i);
		}
		public TerminalNode L_SQUARE_PAREN() { return getToken(GrammarParser.L_SQUARE_PAREN, 0); }
		public TerminalNode NUMBER() { return getToken(GrammarParser.NUMBER, 0); }
		public TerminalNode R_SQUARE_PAREN() { return getToken(GrammarParser.R_SQUARE_PAREN, 0); }
		public TerminalNode GLOBAL_ID() { return getToken(GrammarParser.GLOBAL_ID, 0); }
		public TerminalNode SUB() { return getToken(GrammarParser.SUB, 0); }
		public TerminalNode ADD() { return getToken(GrammarParser.ADD, 0); }
		public TerminalNode DECIMAL_NUMBER() { return getToken(GrammarParser.DECIMAL_NUMBER, 0); }
		public TerminalNode STRING() { return getToken(GrammarParser.STRING, 0); }
		public FContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_f; }
	}

	public final FContext f() throws RecognitionException {
		FContext _localctx = new FContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_f);
		int _la;
		try {
			setState(94);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(50);
				match(L_PAREN);
				setState(51);
				exp();
				setState(52);
				match(R_PAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(54);
				match(L_CURLY_PAREN);
				setState(55);
				exp();
				setState(56);
				match(R_CURLY_PAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(58);
				match(ID);
				setState(59);
				match(L_PAREN);
				setState(60);
				exp();
				setState(65);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(61);
					match(COMMA);
					setState(62);
					exp();
					}
					}
					setState(67);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(68);
				match(R_PAREN);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(70);
				match(ID);
				setState(71);
				match(L_PAREN);
				setState(72);
				match(R_PAREN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(73);
				match(ID);
				setState(74);
				match(L_SQUARE_PAREN);
				setState(75);
				match(NUMBER);
				setState(76);
				match(R_SQUARE_PAREN);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(77);
				match(ID);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(78);
				match(GLOBAL_ID);
				setState(79);
				match(L_SQUARE_PAREN);
				setState(80);
				match(NUMBER);
				setState(81);
				match(R_SQUARE_PAREN);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(82);
				match(GLOBAL_ID);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(83);
				match(SUB);
				setState(84);
				match(NUMBER);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(85);
				match(ADD);
				setState(86);
				match(NUMBER);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(87);
				match(SUB);
				setState(88);
				match(DECIMAL_NUMBER);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(89);
				match(ADD);
				setState(90);
				match(DECIMAL_NUMBER);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(91);
				match(NUMBER);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(92);
				match(DECIMAL_NUMBER);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(93);
				match(STRING);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BexpContext extends ParserRuleContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode EQUAL_TO() { return getToken(GrammarParser.EQUAL_TO, 0); }
		public TerminalNode NOT_EQUAL_TO() { return getToken(GrammarParser.NOT_EQUAL_TO, 0); }
		public TerminalNode LESS_THAN() { return getToken(GrammarParser.LESS_THAN, 0); }
		public TerminalNode MORE_THAN() { return getToken(GrammarParser.MORE_THAN, 0); }
		public TerminalNode LESS_THAN_EQUAL() { return getToken(GrammarParser.LESS_THAN_EQUAL, 0); }
		public TerminalNode MORE_THAN_EQUAL() { return getToken(GrammarParser.MORE_THAN_EQUAL, 0); }
		public BexpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bexp; }
	}

	public final BexpContext bexp() throws RecognitionException {
		BexpContext _localctx = new BexpContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_bexp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			exp();
			setState(97);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4227858432L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(98);
			exp();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefnContext extends ParserRuleContext {
		public TerminalNode DEF() { return getToken(GrammarParser.DEF, 0); }
		public TerminalNode ID() { return getToken(GrammarParser.ID, 0); }
		public TerminalNode L_PAREN() { return getToken(GrammarParser.L_PAREN, 0); }
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public TerminalNode R_PAREN() { return getToken(GrammarParser.R_PAREN, 0); }
		public TerminalNode COLON() { return getToken(GrammarParser.COLON, 0); }
		public TerminalNode EQUAL() { return getToken(GrammarParser.EQUAL, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode INT() { return getToken(GrammarParser.INT, 0); }
		public TerminalNode DOUBLE() { return getToken(GrammarParser.DOUBLE, 0); }
		public TerminalNode STRING_TYPE() { return getToken(GrammarParser.STRING_TYPE, 0); }
		public TerminalNode VOID() { return getToken(GrammarParser.VOID, 0); }
		public List<TerminalNode> COMMA() { return getTokens(GrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(GrammarParser.COMMA, i);
		}
		public TerminalNode VAL() { return getToken(GrammarParser.VAL, 0); }
		public TerminalNode GLOBAL_ID() { return getToken(GrammarParser.GLOBAL_ID, 0); }
		public List<TerminalNode> NUMBER() { return getTokens(GrammarParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(GrammarParser.NUMBER, i);
		}
		public TerminalNode DECIMAL_NUMBER() { return getToken(GrammarParser.DECIMAL_NUMBER, 0); }
		public TerminalNode SUB() { return getToken(GrammarParser.SUB, 0); }
		public TerminalNode STRING() { return getToken(GrammarParser.STRING, 0); }
		public List<TerminalNode> L_SQUARE_PAREN() { return getTokens(GrammarParser.L_SQUARE_PAREN); }
		public TerminalNode L_SQUARE_PAREN(int i) {
			return getToken(GrammarParser.L_SQUARE_PAREN, i);
		}
		public List<TerminalNode> R_SQUARE_PAREN() { return getTokens(GrammarParser.R_SQUARE_PAREN); }
		public TerminalNode R_SQUARE_PAREN(int i) {
			return getToken(GrammarParser.R_SQUARE_PAREN, i);
		}
		public DefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defn; }
	}

	public final DefnContext defn() throws RecognitionException {
		DefnContext _localctx = new DefnContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_defn);
		int _la;
		try {
			setState(162);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(100);
				match(DEF);
				setState(101);
				match(ID);
				setState(102);
				match(L_PAREN);
				setState(103);
				arg();
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(104);
					match(COMMA);
					setState(105);
					arg();
					}
					}
					setState(110);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(111);
				match(R_PAREN);
				setState(112);
				match(COLON);
				setState(113);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 30720L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(114);
				match(EQUAL);
				setState(115);
				exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(117);
				match(DEF);
				setState(118);
				match(ID);
				setState(119);
				match(L_PAREN);
				setState(120);
				match(R_PAREN);
				setState(121);
				match(COLON);
				setState(122);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 30720L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(123);
				match(EQUAL);
				setState(124);
				exp();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(125);
				match(VAL);
				setState(126);
				_la = _input.LA(1);
				if ( !(_la==ID || _la==GLOBAL_ID) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(127);
				match(COLON);
				setState(128);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 14336L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(129);
				match(EQUAL);
				setState(137);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(130);
					match(NUMBER);
					}
					break;
				case 2:
					{
					setState(131);
					match(DECIMAL_NUMBER);
					}
					break;
				case 3:
					{
					setState(132);
					match(SUB);
					setState(133);
					match(DECIMAL_NUMBER);
					}
					break;
				case 4:
					{
					setState(134);
					match(SUB);
					setState(135);
					match(NUMBER);
					}
					break;
				case 5:
					{
					setState(136);
					match(STRING);
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(139);
				match(VAL);
				setState(140);
				_la = _input.LA(1);
				if ( !(_la==ID || _la==GLOBAL_ID) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(141);
				match(L_SQUARE_PAREN);
				setState(142);
				match(NUMBER);
				setState(143);
				match(R_SQUARE_PAREN);
				setState(144);
				match(COLON);
				setState(145);
				match(L_SQUARE_PAREN);
				setState(146);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==DOUBLE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(147);
				match(R_SQUARE_PAREN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(148);
				_la = _input.LA(1);
				if ( !(_la==ID || _la==GLOBAL_ID) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(149);
				match(L_SQUARE_PAREN);
				setState(150);
				match(NUMBER);
				setState(151);
				match(R_SQUARE_PAREN);
				setState(152);
				match(EQUAL);
				setState(160);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(153);
					match(NUMBER);
					}
					break;
				case 2:
					{
					setState(154);
					match(DECIMAL_NUMBER);
					}
					break;
				case 3:
					{
					setState(155);
					match(SUB);
					setState(156);
					match(DECIMAL_NUMBER);
					}
					break;
				case 4:
					{
					setState(157);
					match(SUB);
					setState(158);
					match(NUMBER);
					}
					break;
				case 5:
					{
					setState(159);
					match(STRING);
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public DefnContext defn() {
			return getRuleContext(DefnContext.class,0);
		}
		public TerminalNode SEMI_COLON() { return getToken(GrammarParser.SEMI_COLON, 0); }
		public ProgContext prog() {
			return getRuleContext(ProgContext.class,0);
		}
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_prog);
		int _la;
		try {
			setState(174);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(164);
				defn();
				setState(165);
				match(SEMI_COLON);
				setState(166);
				prog();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(169); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(168);
					exp();
					}
					}
					setState(171); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 146037211154L) != 0) );
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(173);
				block();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public TerminalNode L_CURLY_PAREN() { return getToken(GrammarParser.L_CURLY_PAREN, 0); }
		public ProgContext prog() {
			return getRuleContext(ProgContext.class,0);
		}
		public TerminalNode R_CURLY_PAREN() { return getToken(GrammarParser.R_CURLY_PAREN, 0); }
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(L_CURLY_PAREN);
			setState(177);
			prog();
			setState(178);
			match(R_CURLY_PAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(GrammarParser.ID, 0); }
		public TerminalNode COLON() { return getToken(GrammarParser.COLON, 0); }
		public TerminalNode INT() { return getToken(GrammarParser.INT, 0); }
		public TerminalNode DOUBLE() { return getToken(GrammarParser.DOUBLE, 0); }
		public TerminalNode STRING_TYPE() { return getToken(GrammarParser.STRING_TYPE, 0); }
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_arg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			match(ID);
			setState(181);
			match(COLON);
			setState(182);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 14336L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001*\u00b9\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000"+
		"#\b\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0003\u0001*\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u00021\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003@\b\u0003"+
		"\n\u0003\f\u0003C\t\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003_\b\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005k\b\u0005"+
		"\n\u0005\f\u0005n\t\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u008a\b\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u00a1\b\u0005\u0003\u0005"+
		"\u00a3\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0004\u0006\u00aa\b\u0006\u000b\u0006\f\u0006\u00ab\u0001\u0006\u0003"+
		"\u0006\u00af\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0000\u0000\t\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0000\u0007\u0001\u0000\u0015\u0016\u0001\u0000\u0017"+
		"\u0019\u0001\u0000\u001a\u001f\u0001\u0000\u000b\u000e\u0001\u0000\u0012"+
		"\u0013\u0001\u0000\u000b\r\u0001\u0000\u000b\f\u00d4\u0000\"\u0001\u0000"+
		"\u0000\u0000\u0002)\u0001\u0000\u0000\u0000\u00040\u0001\u0000\u0000\u0000"+
		"\u0006^\u0001\u0000\u0000\u0000\b`\u0001\u0000\u0000\u0000\n\u00a2\u0001"+
		"\u0000\u0000\u0000\f\u00ae\u0001\u0000\u0000\u0000\u000e\u00b0\u0001\u0000"+
		"\u0000\u0000\u0010\u00b4\u0001\u0000\u0000\u0000\u0012#\u0005\u0001\u0000"+
		"\u0000\u0013\u0014\u0005\u0001\u0000\u0000\u0014\u0015\u0005%\u0000\u0000"+
		"\u0015#\u0005&\u0000\u0000\u0016\u0017\u0005\u0004\u0000\u0000\u0017\u0018"+
		"\u0003\b\u0004\u0000\u0018\u0019\u0005\u0005\u0000\u0000\u0019\u001a\u0003"+
		"\u0000\u0000\u0000\u001a\u001b\u0005\u0006\u0000\u0000\u001b\u001c\u0003"+
		"\u0000\u0000\u0000\u001c#\u0001\u0000\u0000\u0000\u001d\u001e\u0003\u0002"+
		"\u0001\u0000\u001e\u001f\u0005\'\u0000\u0000\u001f \u0003\u0000\u0000"+
		"\u0000 #\u0001\u0000\u0000\u0000!#\u0003\u0002\u0001\u0000\"\u0012\u0001"+
		"\u0000\u0000\u0000\"\u0013\u0001\u0000\u0000\u0000\"\u0016\u0001\u0000"+
		"\u0000\u0000\"\u001d\u0001\u0000\u0000\u0000\"!\u0001\u0000\u0000\u0000"+
		"#\u0001\u0001\u0000\u0000\u0000$%\u0003\u0004\u0002\u0000%&\u0007\u0000"+
		"\u0000\u0000&\'\u0003\u0000\u0000\u0000\'*\u0001\u0000\u0000\u0000(*\u0003"+
		"\u0004\u0002\u0000)$\u0001\u0000\u0000\u0000)(\u0001\u0000\u0000\u0000"+
		"*\u0003\u0001\u0000\u0000\u0000+,\u0003\u0006\u0003\u0000,-\u0007\u0001"+
		"\u0000\u0000-.\u0003\u0004\u0002\u0000.1\u0001\u0000\u0000\u0000/1\u0003"+
		"\u0006\u0003\u00000+\u0001\u0000\u0000\u00000/\u0001\u0000\u0000\u0000"+
		"1\u0005\u0001\u0000\u0000\u000023\u0005%\u0000\u000034\u0003\u0000\u0000"+
		"\u000045\u0005&\u0000\u00005_\u0001\u0000\u0000\u000067\u0005!\u0000\u0000"+
		"78\u0003\u0000\u0000\u000089\u0005\"\u0000\u00009_\u0001\u0000\u0000\u0000"+
		":;\u0005\u0012\u0000\u0000;<\u0005%\u0000\u0000<A\u0003\u0000\u0000\u0000"+
		"=>\u0005(\u0000\u0000>@\u0003\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000"+
		"@C\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000"+
		"\u0000BD\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000DE\u0005&\u0000"+
		"\u0000E_\u0001\u0000\u0000\u0000FG\u0005\u0012\u0000\u0000GH\u0005%\u0000"+
		"\u0000H_\u0005&\u0000\u0000IJ\u0005\u0012\u0000\u0000JK\u0005#\u0000\u0000"+
		"KL\u0005\u0010\u0000\u0000L_\u0005$\u0000\u0000M_\u0005\u0012\u0000\u0000"+
		"NO\u0005\u0013\u0000\u0000OP\u0005#\u0000\u0000PQ\u0005\u0010\u0000\u0000"+
		"Q_\u0005$\u0000\u0000R_\u0005\u0013\u0000\u0000ST\u0005\u0016\u0000\u0000"+
		"T_\u0005\u0010\u0000\u0000UV\u0005\u0015\u0000\u0000V_\u0005\u0010\u0000"+
		"\u0000WX\u0005\u0016\u0000\u0000X_\u0005\u0011\u0000\u0000YZ\u0005\u0015"+
		"\u0000\u0000Z_\u0005\u0011\u0000\u0000[_\u0005\u0010\u0000\u0000\\_\u0005"+
		"\u0011\u0000\u0000]_\u0005\u0014\u0000\u0000^2\u0001\u0000\u0000\u0000"+
		"^6\u0001\u0000\u0000\u0000^:\u0001\u0000\u0000\u0000^F\u0001\u0000\u0000"+
		"\u0000^I\u0001\u0000\u0000\u0000^M\u0001\u0000\u0000\u0000^N\u0001\u0000"+
		"\u0000\u0000^R\u0001\u0000\u0000\u0000^S\u0001\u0000\u0000\u0000^U\u0001"+
		"\u0000\u0000\u0000^W\u0001\u0000\u0000\u0000^Y\u0001\u0000\u0000\u0000"+
		"^[\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000^]\u0001\u0000\u0000"+
		"\u0000_\u0007\u0001\u0000\u0000\u0000`a\u0003\u0000\u0000\u0000ab\u0007"+
		"\u0002\u0000\u0000bc\u0003\u0000\u0000\u0000c\t\u0001\u0000\u0000\u0000"+
		"de\u0005\t\u0000\u0000ef\u0005\u0012\u0000\u0000fg\u0005%\u0000\u0000"+
		"gl\u0003\u0010\b\u0000hi\u0005(\u0000\u0000ik\u0003\u0010\b\u0000jh\u0001"+
		"\u0000\u0000\u0000kn\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000"+
		"lm\u0001\u0000\u0000\u0000mo\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000"+
		"\u0000op\u0005&\u0000\u0000pq\u0005)\u0000\u0000qr\u0007\u0003\u0000\u0000"+
		"rs\u0005 \u0000\u0000st\u0003\u0000\u0000\u0000t\u00a3\u0001\u0000\u0000"+
		"\u0000uv\u0005\t\u0000\u0000vw\u0005\u0012\u0000\u0000wx\u0005%\u0000"+
		"\u0000xy\u0005&\u0000\u0000yz\u0005)\u0000\u0000z{\u0007\u0003\u0000\u0000"+
		"{|\u0005 \u0000\u0000|\u00a3\u0003\u0000\u0000\u0000}~\u0005\n\u0000\u0000"+
		"~\u007f\u0007\u0004\u0000\u0000\u007f\u0080\u0005)\u0000\u0000\u0080\u0081"+
		"\u0007\u0005\u0000\u0000\u0081\u0089\u0005 \u0000\u0000\u0082\u008a\u0005"+
		"\u0010\u0000\u0000\u0083\u008a\u0005\u0011\u0000\u0000\u0084\u0085\u0005"+
		"\u0016\u0000\u0000\u0085\u008a\u0005\u0011\u0000\u0000\u0086\u0087\u0005"+
		"\u0016\u0000\u0000\u0087\u008a\u0005\u0010\u0000\u0000\u0088\u008a\u0005"+
		"\u0014\u0000\u0000\u0089\u0082\u0001\u0000\u0000\u0000\u0089\u0083\u0001"+
		"\u0000\u0000\u0000\u0089\u0084\u0001\u0000\u0000\u0000\u0089\u0086\u0001"+
		"\u0000\u0000\u0000\u0089\u0088\u0001\u0000\u0000\u0000\u008a\u00a3\u0001"+
		"\u0000\u0000\u0000\u008b\u008c\u0005\n\u0000\u0000\u008c\u008d\u0007\u0004"+
		"\u0000\u0000\u008d\u008e\u0005#\u0000\u0000\u008e\u008f\u0005\u0010\u0000"+
		"\u0000\u008f\u0090\u0005$\u0000\u0000\u0090\u0091\u0005)\u0000\u0000\u0091"+
		"\u0092\u0005#\u0000\u0000\u0092\u0093\u0007\u0006\u0000\u0000\u0093\u00a3"+
		"\u0005$\u0000\u0000\u0094\u0095\u0007\u0004\u0000\u0000\u0095\u0096\u0005"+
		"#\u0000\u0000\u0096\u0097\u0005\u0010\u0000\u0000\u0097\u0098\u0005$\u0000"+
		"\u0000\u0098\u00a0\u0005 \u0000\u0000\u0099\u00a1\u0005\u0010\u0000\u0000"+
		"\u009a\u00a1\u0005\u0011\u0000\u0000\u009b\u009c\u0005\u0016\u0000\u0000"+
		"\u009c\u00a1\u0005\u0011\u0000\u0000\u009d\u009e\u0005\u0016\u0000\u0000"+
		"\u009e\u00a1\u0005\u0010\u0000\u0000\u009f\u00a1\u0005\u0014\u0000\u0000"+
		"\u00a0\u0099\u0001\u0000\u0000\u0000\u00a0\u009a\u0001\u0000\u0000\u0000"+
		"\u00a0\u009b\u0001\u0000\u0000\u0000\u00a0\u009d\u0001\u0000\u0000\u0000"+
		"\u00a0\u009f\u0001\u0000\u0000\u0000\u00a1\u00a3\u0001\u0000\u0000\u0000"+
		"\u00a2d\u0001\u0000\u0000\u0000\u00a2u\u0001\u0000\u0000\u0000\u00a2}"+
		"\u0001\u0000\u0000\u0000\u00a2\u008b\u0001\u0000\u0000\u0000\u00a2\u0094"+
		"\u0001\u0000\u0000\u0000\u00a3\u000b\u0001\u0000\u0000\u0000\u00a4\u00a5"+
		"\u0003\n\u0005\u0000\u00a5\u00a6\u0005\'\u0000\u0000\u00a6\u00a7\u0003"+
		"\f\u0006\u0000\u00a7\u00af\u0001\u0000\u0000\u0000\u00a8\u00aa\u0003\u0000"+
		"\u0000\u0000\u00a9\u00a8\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000"+
		"\u0000\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000\u00ab\u00ac\u0001\u0000"+
		"\u0000\u0000\u00ac\u00af\u0001\u0000\u0000\u0000\u00ad\u00af\u0003\u000e"+
		"\u0007\u0000\u00ae\u00a4\u0001\u0000\u0000\u0000\u00ae\u00a9\u0001\u0000"+
		"\u0000\u0000\u00ae\u00ad\u0001\u0000\u0000\u0000\u00af\r\u0001\u0000\u0000"+
		"\u0000\u00b0\u00b1\u0005!\u0000\u0000\u00b1\u00b2\u0003\f\u0006\u0000"+
		"\u00b2\u00b3\u0005\"\u0000\u0000\u00b3\u000f\u0001\u0000\u0000\u0000\u00b4"+
		"\u00b5\u0005\u0012\u0000\u0000\u00b5\u00b6\u0005)\u0000\u0000\u00b6\u00b7"+
		"\u0007\u0005\u0000\u0000\u00b7\u0011\u0001\u0000\u0000\u0000\u000b\")"+
		"0A^l\u0089\u00a0\u00a2\u00ab\u00ae";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}