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
		T_SKIP=1, IF=2, THEN=3, ELSE=4, WHILE=5, DO=6, DEF=7, VAL=8, INT=9, DOUBLE=10, 
		STRING_TYPE=11, VOID=12, NUMBER=13, DECIMAL_NUMBER=14, ID=15, GLOBAL_ID=16, 
		STRING=17, ADD=18, SUB=19, MULT=20, DIV=21, MOD=22, MORE_THAN=23, LESS_THAN=24, 
		MORE_THAN_EQUAL=25, LESS_THAN_EQUAL=26, EQUAL_TO=27, NOT_EQUAL_TO=28, 
		EQUAL=29, AND_OP=30, OR_OP=31, L_CURLY_PAREN=32, R_CURLY_PAREN=33, L_SQUARE_PAREN=34, 
		R_SQUARE_PAREN=35, L_PAREN=36, R_PAREN=37, SEMI_COLON=38, COMMA=39, COLON=40, 
		WHITESPACE=41;
	public static final int
		RULE_exp = 0, RULE_m = 1, RULE_t = 2, RULE_f = 3, RULE_bexp = 4, RULE_a = 5, 
		RULE_ta = 6, RULE_defn = 7, RULE_prog = 8, RULE_block = 9, RULE_arg = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"exp", "m", "t", "f", "bexp", "a", "ta", "defn", "prog", "block", "arg"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'skip'", "'if'", "'then'", "'else'", "'while'", "'do'", "'def'", 
			"'val'", "'Int'", "'Double'", "'String'", "'Void'", null, null, null, 
			null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "'>'", "'<'", "'>='", 
			"'<='", "'=='", "'!='", "'='", "'&&'", "'||'", "'{'", "'}'", "'['", "']'", 
			"'('", "')'", "';'", "','", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "T_SKIP", "IF", "THEN", "ELSE", "WHILE", "DO", "DEF", "VAL", "INT", 
			"DOUBLE", "STRING_TYPE", "VOID", "NUMBER", "DECIMAL_NUMBER", "ID", "GLOBAL_ID", 
			"STRING", "ADD", "SUB", "MULT", "DIV", "MOD", "MORE_THAN", "LESS_THAN", 
			"MORE_THAN_EQUAL", "LESS_THAN_EQUAL", "EQUAL_TO", "NOT_EQUAL_TO", "EQUAL", 
			"AND_OP", "OR_OP", "L_CURLY_PAREN", "R_CURLY_PAREN", "L_SQUARE_PAREN", 
			"R_SQUARE_PAREN", "L_PAREN", "R_PAREN", "SEMI_COLON", "COMMA", "COLON", 
			"WHITESPACE"
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
			setState(38);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(22);
				match(T_SKIP);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(23);
				match(T_SKIP);
				setState(24);
				match(L_PAREN);
				setState(25);
				match(R_PAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(26);
				match(IF);
				setState(27);
				bexp();
				setState(28);
				match(THEN);
				setState(29);
				exp();
				setState(30);
				match(ELSE);
				setState(31);
				exp();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(33);
				m();
				setState(34);
				match(SEMI_COLON);
				setState(35);
				exp();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(37);
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
			setState(45);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				t();
				setState(41);
				_la = _input.LA(1);
				if ( !(_la==ADD || _la==SUB) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(42);
				exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(44);
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
			setState(52);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				f();
				setState(48);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 7340032L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(49);
				t();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(51);
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
		public TerminalNode R_SQUARE_PAREN() { return getToken(GrammarParser.R_SQUARE_PAREN, 0); }
		public TerminalNode GLOBAL_ID() { return getToken(GrammarParser.GLOBAL_ID, 0); }
		public TerminalNode SUB() { return getToken(GrammarParser.SUB, 0); }
		public TerminalNode NUMBER() { return getToken(GrammarParser.NUMBER, 0); }
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
			setState(100);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(54);
				match(L_PAREN);
				setState(55);
				exp();
				setState(56);
				match(R_PAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(58);
				match(L_CURLY_PAREN);
				setState(59);
				exp();
				setState(60);
				match(R_CURLY_PAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(62);
				match(ID);
				setState(63);
				match(L_PAREN);
				setState(64);
				exp();
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(65);
					match(COMMA);
					setState(66);
					exp();
					}
					}
					setState(71);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(72);
				match(R_PAREN);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(74);
				match(ID);
				setState(75);
				match(L_PAREN);
				setState(76);
				match(R_PAREN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(77);
				match(ID);
				setState(78);
				match(L_SQUARE_PAREN);
				setState(79);
				exp();
				setState(80);
				match(R_SQUARE_PAREN);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(82);
				match(ID);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(83);
				match(GLOBAL_ID);
				setState(84);
				match(L_SQUARE_PAREN);
				setState(85);
				exp();
				setState(86);
				match(R_SQUARE_PAREN);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(88);
				match(GLOBAL_ID);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(89);
				match(SUB);
				setState(90);
				match(NUMBER);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(91);
				match(ADD);
				setState(92);
				match(NUMBER);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(93);
				match(SUB);
				setState(94);
				match(DECIMAL_NUMBER);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(95);
				match(ADD);
				setState(96);
				match(DECIMAL_NUMBER);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(97);
				match(NUMBER);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(98);
				match(DECIMAL_NUMBER);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(99);
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
		public AContext a() {
			return getRuleContext(AContext.class,0);
		}
		public TerminalNode OR_OP() { return getToken(GrammarParser.OR_OP, 0); }
		public BexpContext bexp() {
			return getRuleContext(BexpContext.class,0);
		}
		public BexpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bexp; }
	}

	public final BexpContext bexp() throws RecognitionException {
		BexpContext _localctx = new BexpContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_bexp);
		try {
			setState(107);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(102);
				a();
				setState(103);
				match(OR_OP);
				setState(104);
				bexp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(106);
				a();
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
	public static class AContext extends ParserRuleContext {
		public TaContext ta() {
			return getRuleContext(TaContext.class,0);
		}
		public TerminalNode AND_OP() { return getToken(GrammarParser.AND_OP, 0); }
		public AContext a() {
			return getRuleContext(AContext.class,0);
		}
		public AContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_a; }
	}

	public final AContext a() throws RecognitionException {
		AContext _localctx = new AContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_a);
		try {
			setState(114);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(109);
				ta();
				setState(110);
				match(AND_OP);
				setState(111);
				a();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(113);
				ta();
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
	public static class TaContext extends ParserRuleContext {
		public TerminalNode L_PAREN() { return getToken(GrammarParser.L_PAREN, 0); }
		public BexpContext bexp() {
			return getRuleContext(BexpContext.class,0);
		}
		public TerminalNode R_PAREN() { return getToken(GrammarParser.R_PAREN, 0); }
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
		public TaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ta; }
	}

	public final TaContext ta() throws RecognitionException {
		TaContext _localctx = new TaContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ta);
		int _la;
		try {
			setState(124);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(116);
				match(L_PAREN);
				setState(117);
				bexp();
				setState(118);
				match(R_PAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(120);
				exp();
				setState(121);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 528482304L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(122);
				exp();
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
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode INT() { return getToken(GrammarParser.INT, 0); }
		public TerminalNode DOUBLE() { return getToken(GrammarParser.DOUBLE, 0); }
		public TerminalNode STRING_TYPE() { return getToken(GrammarParser.STRING_TYPE, 0); }
		public TerminalNode VOID() { return getToken(GrammarParser.VOID, 0); }
		public List<TerminalNode> COMMA() { return getTokens(GrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(GrammarParser.COMMA, i);
		}
		public TerminalNode L_SQUARE_PAREN() { return getToken(GrammarParser.L_SQUARE_PAREN, 0); }
		public TerminalNode R_SQUARE_PAREN() { return getToken(GrammarParser.R_SQUARE_PAREN, 0); }
		public TerminalNode VAL() { return getToken(GrammarParser.VAL, 0); }
		public TerminalNode GLOBAL_ID() { return getToken(GrammarParser.GLOBAL_ID, 0); }
		public TerminalNode NUMBER() { return getToken(GrammarParser.NUMBER, 0); }
		public TerminalNode DECIMAL_NUMBER() { return getToken(GrammarParser.DECIMAL_NUMBER, 0); }
		public TerminalNode SUB() { return getToken(GrammarParser.SUB, 0); }
		public TerminalNode STRING() { return getToken(GrammarParser.STRING, 0); }
		public DefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defn; }
	}

	public final DefnContext defn() throws RecognitionException {
		DefnContext _localctx = new DefnContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_defn);
		int _la;
		try {
			setState(195);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(126);
				match(DEF);
				setState(127);
				match(ID);
				setState(128);
				match(L_PAREN);
				setState(129);
				arg();
				setState(134);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(130);
					match(COMMA);
					setState(131);
					arg();
					}
					}
					setState(136);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(137);
				match(R_PAREN);
				setState(138);
				match(COLON);
				setState(146);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
				case 1:
					{
					setState(139);
					match(INT);
					}
					break;
				case 2:
					{
					setState(140);
					match(DOUBLE);
					}
					break;
				case 3:
					{
					setState(141);
					match(STRING_TYPE);
					}
					break;
				case 4:
					{
					setState(142);
					match(VOID);
					}
					break;
				case 5:
					{
					{
					setState(143);
					_la = _input.LA(1);
					if ( !(_la==INT || _la==DOUBLE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(144);
					match(L_SQUARE_PAREN);
					setState(145);
					match(R_SQUARE_PAREN);
					}
					}
					break;
				}
				setState(148);
				match(EQUAL);
				setState(149);
				exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(151);
				match(DEF);
				setState(152);
				match(ID);
				setState(153);
				match(L_PAREN);
				setState(154);
				match(R_PAREN);
				setState(155);
				match(COLON);
				setState(163);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
				case 1:
					{
					setState(156);
					match(INT);
					}
					break;
				case 2:
					{
					setState(157);
					match(DOUBLE);
					}
					break;
				case 3:
					{
					setState(158);
					match(STRING_TYPE);
					}
					break;
				case 4:
					{
					setState(159);
					match(VOID);
					}
					break;
				case 5:
					{
					{
					setState(160);
					_la = _input.LA(1);
					if ( !(_la==INT || _la==DOUBLE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(161);
					match(L_SQUARE_PAREN);
					setState(162);
					match(R_SQUARE_PAREN);
					}
					}
					break;
				}
				setState(165);
				match(EQUAL);
				setState(166);
				exp();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(167);
				match(VAL);
				setState(168);
				match(GLOBAL_ID);
				setState(169);
				match(COLON);
				setState(170);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3584L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(171);
				match(EQUAL);
				setState(179);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
				case 1:
					{
					setState(172);
					match(NUMBER);
					}
					break;
				case 2:
					{
					setState(173);
					match(DECIMAL_NUMBER);
					}
					break;
				case 3:
					{
					setState(174);
					match(SUB);
					setState(175);
					match(DECIMAL_NUMBER);
					}
					break;
				case 4:
					{
					setState(176);
					match(SUB);
					setState(177);
					match(NUMBER);
					}
					break;
				case 5:
					{
					setState(178);
					match(STRING);
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(181);
				match(VAL);
				setState(182);
				match(GLOBAL_ID);
				setState(183);
				match(L_SQUARE_PAREN);
				setState(184);
				match(NUMBER);
				setState(185);
				match(R_SQUARE_PAREN);
				setState(186);
				match(COLON);
				setState(187);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==DOUBLE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(188);
				match(GLOBAL_ID);
				setState(189);
				match(L_SQUARE_PAREN);
				setState(190);
				exp();
				setState(191);
				match(R_SQUARE_PAREN);
				setState(192);
				match(EQUAL);
				setState(193);
				exp();
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
		enterRule(_localctx, 16, RULE_prog);
		int _la;
		try {
			setState(207);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(197);
				defn();
				setState(198);
				match(SEMI_COLON);
				setState(199);
				prog();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(202); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(201);
					exp();
					}
					}
					setState(204); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 73015484422L) != 0) );
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(206);
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
		enterRule(_localctx, 18, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(L_CURLY_PAREN);
			setState(210);
			prog();
			setState(211);
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
		public TerminalNode L_SQUARE_PAREN() { return getToken(GrammarParser.L_SQUARE_PAREN, 0); }
		public TerminalNode R_SQUARE_PAREN() { return getToken(GrammarParser.R_SQUARE_PAREN, 0); }
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_arg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(ID);
			setState(214);
			match(COLON);
			setState(221);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				{
				setState(215);
				match(INT);
				}
				break;
			case 2:
				{
				setState(216);
				match(DOUBLE);
				}
				break;
			case 3:
				{
				setState(217);
				match(STRING_TYPE);
				}
				break;
			case 4:
				{
				{
				setState(218);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==DOUBLE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(219);
				match(L_SQUARE_PAREN);
				setState(220);
				match(R_SQUARE_PAREN);
				}
				}
				break;
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
		"\u0004\u0001)\u00e0\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0003\u0000\'\b\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001.\b\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u00025\b\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0005\u0003D\b\u0003\n\u0003\f\u0003G\t\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u0003e\b\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004l\b\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005s\b"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0003\u0006}\b\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007\u0085"+
		"\b\u0007\n\u0007\f\u0007\u0088\t\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0003\u0007\u0093\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007"+
		"\u00a4\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007\u00b4\b\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0003\u0007\u00c4\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0004\b\u00cb\b\b\u000b\b\f\b\u00cc\u0001\b\u0003\b\u00d0\b\b"+
		"\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0003\n\u00de\b\n\u0001\n\u0000\u0000\u000b"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0000\u0005\u0001"+
		"\u0000\u0012\u0013\u0001\u0000\u0014\u0016\u0001\u0000\u0017\u001c\u0001"+
		"\u0000\t\n\u0001\u0000\t\u000b\u0103\u0000&\u0001\u0000\u0000\u0000\u0002"+
		"-\u0001\u0000\u0000\u0000\u00044\u0001\u0000\u0000\u0000\u0006d\u0001"+
		"\u0000\u0000\u0000\bk\u0001\u0000\u0000\u0000\nr\u0001\u0000\u0000\u0000"+
		"\f|\u0001\u0000\u0000\u0000\u000e\u00c3\u0001\u0000\u0000\u0000\u0010"+
		"\u00cf\u0001\u0000\u0000\u0000\u0012\u00d1\u0001\u0000\u0000\u0000\u0014"+
		"\u00d5\u0001\u0000\u0000\u0000\u0016\'\u0005\u0001\u0000\u0000\u0017\u0018"+
		"\u0005\u0001\u0000\u0000\u0018\u0019\u0005$\u0000\u0000\u0019\'\u0005"+
		"%\u0000\u0000\u001a\u001b\u0005\u0002\u0000\u0000\u001b\u001c\u0003\b"+
		"\u0004\u0000\u001c\u001d\u0005\u0003\u0000\u0000\u001d\u001e\u0003\u0000"+
		"\u0000\u0000\u001e\u001f\u0005\u0004\u0000\u0000\u001f \u0003\u0000\u0000"+
		"\u0000 \'\u0001\u0000\u0000\u0000!\"\u0003\u0002\u0001\u0000\"#\u0005"+
		"&\u0000\u0000#$\u0003\u0000\u0000\u0000$\'\u0001\u0000\u0000\u0000%\'"+
		"\u0003\u0002\u0001\u0000&\u0016\u0001\u0000\u0000\u0000&\u0017\u0001\u0000"+
		"\u0000\u0000&\u001a\u0001\u0000\u0000\u0000&!\u0001\u0000\u0000\u0000"+
		"&%\u0001\u0000\u0000\u0000\'\u0001\u0001\u0000\u0000\u0000()\u0003\u0004"+
		"\u0002\u0000)*\u0007\u0000\u0000\u0000*+\u0003\u0000\u0000\u0000+.\u0001"+
		"\u0000\u0000\u0000,.\u0003\u0004\u0002\u0000-(\u0001\u0000\u0000\u0000"+
		"-,\u0001\u0000\u0000\u0000.\u0003\u0001\u0000\u0000\u0000/0\u0003\u0006"+
		"\u0003\u000001\u0007\u0001\u0000\u000012\u0003\u0004\u0002\u000025\u0001"+
		"\u0000\u0000\u000035\u0003\u0006\u0003\u00004/\u0001\u0000\u0000\u0000"+
		"43\u0001\u0000\u0000\u00005\u0005\u0001\u0000\u0000\u000067\u0005$\u0000"+
		"\u000078\u0003\u0000\u0000\u000089\u0005%\u0000\u00009e\u0001\u0000\u0000"+
		"\u0000:;\u0005 \u0000\u0000;<\u0003\u0000\u0000\u0000<=\u0005!\u0000\u0000"+
		"=e\u0001\u0000\u0000\u0000>?\u0005\u000f\u0000\u0000?@\u0005$\u0000\u0000"+
		"@E\u0003\u0000\u0000\u0000AB\u0005\'\u0000\u0000BD\u0003\u0000\u0000\u0000"+
		"CA\u0001\u0000\u0000\u0000DG\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000"+
		"\u0000EF\u0001\u0000\u0000\u0000FH\u0001\u0000\u0000\u0000GE\u0001\u0000"+
		"\u0000\u0000HI\u0005%\u0000\u0000Ie\u0001\u0000\u0000\u0000JK\u0005\u000f"+
		"\u0000\u0000KL\u0005$\u0000\u0000Le\u0005%\u0000\u0000MN\u0005\u000f\u0000"+
		"\u0000NO\u0005\"\u0000\u0000OP\u0003\u0000\u0000\u0000PQ\u0005#\u0000"+
		"\u0000Qe\u0001\u0000\u0000\u0000Re\u0005\u000f\u0000\u0000ST\u0005\u0010"+
		"\u0000\u0000TU\u0005\"\u0000\u0000UV\u0003\u0000\u0000\u0000VW\u0005#"+
		"\u0000\u0000We\u0001\u0000\u0000\u0000Xe\u0005\u0010\u0000\u0000YZ\u0005"+
		"\u0013\u0000\u0000Ze\u0005\r\u0000\u0000[\\\u0005\u0012\u0000\u0000\\"+
		"e\u0005\r\u0000\u0000]^\u0005\u0013\u0000\u0000^e\u0005\u000e\u0000\u0000"+
		"_`\u0005\u0012\u0000\u0000`e\u0005\u000e\u0000\u0000ae\u0005\r\u0000\u0000"+
		"be\u0005\u000e\u0000\u0000ce\u0005\u0011\u0000\u0000d6\u0001\u0000\u0000"+
		"\u0000d:\u0001\u0000\u0000\u0000d>\u0001\u0000\u0000\u0000dJ\u0001\u0000"+
		"\u0000\u0000dM\u0001\u0000\u0000\u0000dR\u0001\u0000\u0000\u0000dS\u0001"+
		"\u0000\u0000\u0000dX\u0001\u0000\u0000\u0000dY\u0001\u0000\u0000\u0000"+
		"d[\u0001\u0000\u0000\u0000d]\u0001\u0000\u0000\u0000d_\u0001\u0000\u0000"+
		"\u0000da\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000dc\u0001\u0000"+
		"\u0000\u0000e\u0007\u0001\u0000\u0000\u0000fg\u0003\n\u0005\u0000gh\u0005"+
		"\u001f\u0000\u0000hi\u0003\b\u0004\u0000il\u0001\u0000\u0000\u0000jl\u0003"+
		"\n\u0005\u0000kf\u0001\u0000\u0000\u0000kj\u0001\u0000\u0000\u0000l\t"+
		"\u0001\u0000\u0000\u0000mn\u0003\f\u0006\u0000no\u0005\u001e\u0000\u0000"+
		"op\u0003\n\u0005\u0000ps\u0001\u0000\u0000\u0000qs\u0003\f\u0006\u0000"+
		"rm\u0001\u0000\u0000\u0000rq\u0001\u0000\u0000\u0000s\u000b\u0001\u0000"+
		"\u0000\u0000tu\u0005$\u0000\u0000uv\u0003\b\u0004\u0000vw\u0005%\u0000"+
		"\u0000w}\u0001\u0000\u0000\u0000xy\u0003\u0000\u0000\u0000yz\u0007\u0002"+
		"\u0000\u0000z{\u0003\u0000\u0000\u0000{}\u0001\u0000\u0000\u0000|t\u0001"+
		"\u0000\u0000\u0000|x\u0001\u0000\u0000\u0000}\r\u0001\u0000\u0000\u0000"+
		"~\u007f\u0005\u0007\u0000\u0000\u007f\u0080\u0005\u000f\u0000\u0000\u0080"+
		"\u0081\u0005$\u0000\u0000\u0081\u0086\u0003\u0014\n\u0000\u0082\u0083"+
		"\u0005\'\u0000\u0000\u0083\u0085\u0003\u0014\n\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0085\u0088\u0001\u0000\u0000\u0000\u0086\u0084\u0001"+
		"\u0000\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000\u0087\u0089\u0001"+
		"\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0089\u008a\u0005"+
		"%\u0000\u0000\u008a\u0092\u0005(\u0000\u0000\u008b\u0093\u0005\t\u0000"+
		"\u0000\u008c\u0093\u0005\n\u0000\u0000\u008d\u0093\u0005\u000b\u0000\u0000"+
		"\u008e\u0093\u0005\f\u0000\u0000\u008f\u0090\u0007\u0003\u0000\u0000\u0090"+
		"\u0091\u0005\"\u0000\u0000\u0091\u0093\u0005#\u0000\u0000\u0092\u008b"+
		"\u0001\u0000\u0000\u0000\u0092\u008c\u0001\u0000\u0000\u0000\u0092\u008d"+
		"\u0001\u0000\u0000\u0000\u0092\u008e\u0001\u0000\u0000\u0000\u0092\u008f"+
		"\u0001\u0000\u0000\u0000\u0093\u0094\u0001\u0000\u0000\u0000\u0094\u0095"+
		"\u0005\u001d\u0000\u0000\u0095\u0096\u0003\u0000\u0000\u0000\u0096\u00c4"+
		"\u0001\u0000\u0000\u0000\u0097\u0098\u0005\u0007\u0000\u0000\u0098\u0099"+
		"\u0005\u000f\u0000\u0000\u0099\u009a\u0005$\u0000\u0000\u009a\u009b\u0005"+
		"%\u0000\u0000\u009b\u00a3\u0005(\u0000\u0000\u009c\u00a4\u0005\t\u0000"+
		"\u0000\u009d\u00a4\u0005\n\u0000\u0000\u009e\u00a4\u0005\u000b\u0000\u0000"+
		"\u009f\u00a4\u0005\f\u0000\u0000\u00a0\u00a1\u0007\u0003\u0000\u0000\u00a1"+
		"\u00a2\u0005\"\u0000\u0000\u00a2\u00a4\u0005#\u0000\u0000\u00a3\u009c"+
		"\u0001\u0000\u0000\u0000\u00a3\u009d\u0001\u0000\u0000\u0000\u00a3\u009e"+
		"\u0001\u0000\u0000\u0000\u00a3\u009f\u0001\u0000\u0000\u0000\u00a3\u00a0"+
		"\u0001\u0000\u0000\u0000\u00a4\u00a5\u0001\u0000\u0000\u0000\u00a5\u00a6"+
		"\u0005\u001d\u0000\u0000\u00a6\u00c4\u0003\u0000\u0000\u0000\u00a7\u00a8"+
		"\u0005\b\u0000\u0000\u00a8\u00a9\u0005\u0010\u0000\u0000\u00a9\u00aa\u0005"+
		"(\u0000\u0000\u00aa\u00ab\u0007\u0004\u0000\u0000\u00ab\u00b3\u0005\u001d"+
		"\u0000\u0000\u00ac\u00b4\u0005\r\u0000\u0000\u00ad\u00b4\u0005\u000e\u0000"+
		"\u0000\u00ae\u00af\u0005\u0013\u0000\u0000\u00af\u00b4\u0005\u000e\u0000"+
		"\u0000\u00b0\u00b1\u0005\u0013\u0000\u0000\u00b1\u00b4\u0005\r\u0000\u0000"+
		"\u00b2\u00b4\u0005\u0011\u0000\u0000\u00b3\u00ac\u0001\u0000\u0000\u0000"+
		"\u00b3\u00ad\u0001\u0000\u0000\u0000\u00b3\u00ae\u0001\u0000\u0000\u0000"+
		"\u00b3\u00b0\u0001\u0000\u0000\u0000\u00b3\u00b2\u0001\u0000\u0000\u0000"+
		"\u00b4\u00c4\u0001\u0000\u0000\u0000\u00b5\u00b6\u0005\b\u0000\u0000\u00b6"+
		"\u00b7\u0005\u0010\u0000\u0000\u00b7\u00b8\u0005\"\u0000\u0000\u00b8\u00b9"+
		"\u0005\r\u0000\u0000\u00b9\u00ba\u0005#\u0000\u0000\u00ba\u00bb\u0005"+
		"(\u0000\u0000\u00bb\u00c4\u0007\u0003\u0000\u0000\u00bc\u00bd\u0005\u0010"+
		"\u0000\u0000\u00bd\u00be\u0005\"\u0000\u0000\u00be\u00bf\u0003\u0000\u0000"+
		"\u0000\u00bf\u00c0\u0005#\u0000\u0000\u00c0\u00c1\u0005\u001d\u0000\u0000"+
		"\u00c1\u00c2\u0003\u0000\u0000\u0000\u00c2\u00c4\u0001\u0000\u0000\u0000"+
		"\u00c3~\u0001\u0000\u0000\u0000\u00c3\u0097\u0001\u0000\u0000\u0000\u00c3"+
		"\u00a7\u0001\u0000\u0000\u0000\u00c3\u00b5\u0001\u0000\u0000\u0000\u00c3"+
		"\u00bc\u0001\u0000\u0000\u0000\u00c4\u000f\u0001\u0000\u0000\u0000\u00c5"+
		"\u00c6\u0003\u000e\u0007\u0000\u00c6\u00c7\u0005&\u0000\u0000\u00c7\u00c8"+
		"\u0003\u0010\b\u0000\u00c8\u00d0\u0001\u0000\u0000\u0000\u00c9\u00cb\u0003"+
		"\u0000\u0000\u0000\u00ca\u00c9\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001"+
		"\u0000\u0000\u0000\u00cc\u00ca\u0001\u0000\u0000\u0000\u00cc\u00cd\u0001"+
		"\u0000\u0000\u0000\u00cd\u00d0\u0001\u0000\u0000\u0000\u00ce\u00d0\u0003"+
		"\u0012\t\u0000\u00cf\u00c5\u0001\u0000\u0000\u0000\u00cf\u00ca\u0001\u0000"+
		"\u0000\u0000\u00cf\u00ce\u0001\u0000\u0000\u0000\u00d0\u0011\u0001\u0000"+
		"\u0000\u0000\u00d1\u00d2\u0005 \u0000\u0000\u00d2\u00d3\u0003\u0010\b"+
		"\u0000\u00d3\u00d4\u0005!\u0000\u0000\u00d4\u0013\u0001\u0000\u0000\u0000"+
		"\u00d5\u00d6\u0005\u000f\u0000\u0000\u00d6\u00dd\u0005(\u0000\u0000\u00d7"+
		"\u00de\u0005\t\u0000\u0000\u00d8\u00de\u0005\n\u0000\u0000\u00d9\u00de"+
		"\u0005\u000b\u0000\u0000\u00da\u00db\u0007\u0003\u0000\u0000\u00db\u00dc"+
		"\u0005\"\u0000\u0000\u00dc\u00de\u0005#\u0000\u0000\u00dd\u00d7\u0001"+
		"\u0000\u0000\u0000\u00dd\u00d8\u0001\u0000\u0000\u0000\u00dd\u00d9\u0001"+
		"\u0000\u0000\u0000\u00dd\u00da\u0001\u0000\u0000\u0000\u00de\u0015\u0001"+
		"\u0000\u0000\u0000\u0010&-4Edkr|\u0086\u0092\u00a3\u00b3\u00c3\u00cc\u00cf"+
		"\u00dd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}