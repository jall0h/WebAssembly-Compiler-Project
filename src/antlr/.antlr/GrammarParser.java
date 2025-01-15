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
		VAL=10, INT=11, DOUBLE=12, VOID=13, NUMBER=14, DECIMAL_NUMBER=15, ID=16, 
		GLOBAL_ID=17, ADD=18, SUB=19, MULT=20, DIV=21, MOD=22, MORE_THAN=23, LESS_THAN=24, 
		MORE_THAN_EQUAL=25, LESS_THAN_EQUAL=26, EQUAL_TO=27, NOT_EQUAL_TO=28, 
		EQUAL=29, L_CURLY_PAREN=30, R_CURLY_PAREN=31, L_PAREN=32, R_PAREN=33, 
		SEMI_COLON=34, COMMA=35, COLON=36, WHITESPACE=37;
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
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 7340032L) != 0)) ) {
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
		public TerminalNode GLOBAL_ID() { return getToken(GrammarParser.GLOBAL_ID, 0); }
		public TerminalNode SUB() { return getToken(GrammarParser.SUB, 0); }
		public TerminalNode NUMBER() { return getToken(GrammarParser.NUMBER, 0); }
		public TerminalNode ADD() { return getToken(GrammarParser.ADD, 0); }
		public TerminalNode DECIMAL_NUMBER() { return getToken(GrammarParser.DECIMAL_NUMBER, 0); }
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
			setState(85);
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
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(74);
				match(GLOBAL_ID);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(75);
				match(SUB);
				setState(76);
				match(NUMBER);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(77);
				match(ADD);
				setState(78);
				match(NUMBER);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(79);
				match(SUB);
				setState(80);
				match(DECIMAL_NUMBER);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(81);
				match(ADD);
				setState(82);
				match(DECIMAL_NUMBER);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(83);
				match(NUMBER);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(84);
				match(DECIMAL_NUMBER);
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
			setState(87);
			exp();
			setState(88);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 528482304L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(89);
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
		public TerminalNode VOID() { return getToken(GrammarParser.VOID, 0); }
		public List<TerminalNode> COMMA() { return getTokens(GrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(GrammarParser.COMMA, i);
		}
		public TerminalNode VAL() { return getToken(GrammarParser.VAL, 0); }
		public TerminalNode GLOBAL_ID() { return getToken(GrammarParser.GLOBAL_ID, 0); }
		public TerminalNode NUMBER() { return getToken(GrammarParser.NUMBER, 0); }
		public TerminalNode DECIMAL_NUMBER() { return getToken(GrammarParser.DECIMAL_NUMBER, 0); }
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
			setState(122);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(91);
				match(DEF);
				setState(92);
				match(ID);
				setState(93);
				match(L_PAREN);
				setState(94);
				arg();
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(95);
					match(COMMA);
					setState(96);
					arg();
					}
					}
					setState(101);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(102);
				match(R_PAREN);
				setState(103);
				match(COLON);
				setState(104);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 14336L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(105);
				match(EQUAL);
				setState(106);
				exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(108);
				match(DEF);
				setState(109);
				match(ID);
				setState(110);
				match(L_PAREN);
				setState(111);
				match(R_PAREN);
				setState(112);
				match(COLON);
				setState(113);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 14336L) != 0)) ) {
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
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(116);
				match(VAL);
				setState(117);
				_la = _input.LA(1);
				if ( !(_la==ID || _la==GLOBAL_ID) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(118);
				match(COLON);
				setState(119);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==DOUBLE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(120);
				match(EQUAL);
				setState(121);
				_la = _input.LA(1);
				if ( !(_la==NUMBER || _la==DECIMAL_NUMBER) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
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
			setState(134);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(124);
				defn();
				setState(125);
				match(SEMI_COLON);
				setState(126);
				prog();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(129); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(128);
					exp();
					}
					}
					setState(131); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 5369741330L) != 0) );
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(133);
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
			setState(136);
			match(L_CURLY_PAREN);
			setState(137);
			prog();
			setState(138);
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
			setState(140);
			match(ID);
			setState(141);
			match(COLON);
			setState(142);
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
		"\u0004\u0001%\u0091\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"\u0001\u0003\u0003\u0003V\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0005\u0005b\b\u0005\n\u0005\f\u0005e\t\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0003\u0005{\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0004\u0006\u0082\b\u0006\u000b\u0006\f\u0006"+
		"\u0083\u0001\u0006\u0003\u0006\u0087\b\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0000\u0000"+
		"\t\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0000\u0007\u0001\u0000\u0012"+
		"\u0013\u0001\u0000\u0014\u0016\u0001\u0000\u0017\u001c\u0001\u0000\u000b"+
		"\r\u0001\u0000\u0010\u0011\u0001\u0000\u000b\f\u0001\u0000\u000e\u000f"+
		"\u009f\u0000\"\u0001\u0000\u0000\u0000\u0002)\u0001\u0000\u0000\u0000"+
		"\u00040\u0001\u0000\u0000\u0000\u0006U\u0001\u0000\u0000\u0000\bW\u0001"+
		"\u0000\u0000\u0000\nz\u0001\u0000\u0000\u0000\f\u0086\u0001\u0000\u0000"+
		"\u0000\u000e\u0088\u0001\u0000\u0000\u0000\u0010\u008c\u0001\u0000\u0000"+
		"\u0000\u0012#\u0005\u0001\u0000\u0000\u0013\u0014\u0005\u0001\u0000\u0000"+
		"\u0014\u0015\u0005 \u0000\u0000\u0015#\u0005!\u0000\u0000\u0016\u0017"+
		"\u0005\u0004\u0000\u0000\u0017\u0018\u0003\b\u0004\u0000\u0018\u0019\u0005"+
		"\u0005\u0000\u0000\u0019\u001a\u0003\u0000\u0000\u0000\u001a\u001b\u0005"+
		"\u0006\u0000\u0000\u001b\u001c\u0003\u0000\u0000\u0000\u001c#\u0001\u0000"+
		"\u0000\u0000\u001d\u001e\u0003\u0002\u0001\u0000\u001e\u001f\u0005\"\u0000"+
		"\u0000\u001f \u0003\u0000\u0000\u0000 #\u0001\u0000\u0000\u0000!#\u0003"+
		"\u0002\u0001\u0000\"\u0012\u0001\u0000\u0000\u0000\"\u0013\u0001\u0000"+
		"\u0000\u0000\"\u0016\u0001\u0000\u0000\u0000\"\u001d\u0001\u0000\u0000"+
		"\u0000\"!\u0001\u0000\u0000\u0000#\u0001\u0001\u0000\u0000\u0000$%\u0003"+
		"\u0004\u0002\u0000%&\u0007\u0000\u0000\u0000&\'\u0003\u0000\u0000\u0000"+
		"\'*\u0001\u0000\u0000\u0000(*\u0003\u0004\u0002\u0000)$\u0001\u0000\u0000"+
		"\u0000)(\u0001\u0000\u0000\u0000*\u0003\u0001\u0000\u0000\u0000+,\u0003"+
		"\u0006\u0003\u0000,-\u0007\u0001\u0000\u0000-.\u0003\u0004\u0002\u0000"+
		".1\u0001\u0000\u0000\u0000/1\u0003\u0006\u0003\u00000+\u0001\u0000\u0000"+
		"\u00000/\u0001\u0000\u0000\u00001\u0005\u0001\u0000\u0000\u000023\u0005"+
		" \u0000\u000034\u0003\u0000\u0000\u000045\u0005!\u0000\u00005V\u0001\u0000"+
		"\u0000\u000067\u0005\u001e\u0000\u000078\u0003\u0000\u0000\u000089\u0005"+
		"\u001f\u0000\u00009V\u0001\u0000\u0000\u0000:;\u0005\u0010\u0000\u0000"+
		";<\u0005 \u0000\u0000<A\u0003\u0000\u0000\u0000=>\u0005#\u0000\u0000>"+
		"@\u0003\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000@C\u0001\u0000\u0000"+
		"\u0000A?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000BD\u0001\u0000"+
		"\u0000\u0000CA\u0001\u0000\u0000\u0000DE\u0005!\u0000\u0000EV\u0001\u0000"+
		"\u0000\u0000FG\u0005\u0010\u0000\u0000GH\u0005 \u0000\u0000HV\u0005!\u0000"+
		"\u0000IV\u0005\u0010\u0000\u0000JV\u0005\u0011\u0000\u0000KL\u0005\u0013"+
		"\u0000\u0000LV\u0005\u000e\u0000\u0000MN\u0005\u0012\u0000\u0000NV\u0005"+
		"\u000e\u0000\u0000OP\u0005\u0013\u0000\u0000PV\u0005\u000f\u0000\u0000"+
		"QR\u0005\u0012\u0000\u0000RV\u0005\u000f\u0000\u0000SV\u0005\u000e\u0000"+
		"\u0000TV\u0005\u000f\u0000\u0000U2\u0001\u0000\u0000\u0000U6\u0001\u0000"+
		"\u0000\u0000U:\u0001\u0000\u0000\u0000UF\u0001\u0000\u0000\u0000UI\u0001"+
		"\u0000\u0000\u0000UJ\u0001\u0000\u0000\u0000UK\u0001\u0000\u0000\u0000"+
		"UM\u0001\u0000\u0000\u0000UO\u0001\u0000\u0000\u0000UQ\u0001\u0000\u0000"+
		"\u0000US\u0001\u0000\u0000\u0000UT\u0001\u0000\u0000\u0000V\u0007\u0001"+
		"\u0000\u0000\u0000WX\u0003\u0000\u0000\u0000XY\u0007\u0002\u0000\u0000"+
		"YZ\u0003\u0000\u0000\u0000Z\t\u0001\u0000\u0000\u0000[\\\u0005\t\u0000"+
		"\u0000\\]\u0005\u0010\u0000\u0000]^\u0005 \u0000\u0000^c\u0003\u0010\b"+
		"\u0000_`\u0005#\u0000\u0000`b\u0003\u0010\b\u0000a_\u0001\u0000\u0000"+
		"\u0000be\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000\u0000cd\u0001\u0000"+
		"\u0000\u0000df\u0001\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000fg\u0005"+
		"!\u0000\u0000gh\u0005$\u0000\u0000hi\u0007\u0003\u0000\u0000ij\u0005\u001d"+
		"\u0000\u0000jk\u0003\u0000\u0000\u0000k{\u0001\u0000\u0000\u0000lm\u0005"+
		"\t\u0000\u0000mn\u0005\u0010\u0000\u0000no\u0005 \u0000\u0000op\u0005"+
		"!\u0000\u0000pq\u0005$\u0000\u0000qr\u0007\u0003\u0000\u0000rs\u0005\u001d"+
		"\u0000\u0000s{\u0003\u0000\u0000\u0000tu\u0005\n\u0000\u0000uv\u0007\u0004"+
		"\u0000\u0000vw\u0005$\u0000\u0000wx\u0007\u0005\u0000\u0000xy\u0005\u001d"+
		"\u0000\u0000y{\u0007\u0006\u0000\u0000z[\u0001\u0000\u0000\u0000zl\u0001"+
		"\u0000\u0000\u0000zt\u0001\u0000\u0000\u0000{\u000b\u0001\u0000\u0000"+
		"\u0000|}\u0003\n\u0005\u0000}~\u0005\"\u0000\u0000~\u007f\u0003\f\u0006"+
		"\u0000\u007f\u0087\u0001\u0000\u0000\u0000\u0080\u0082\u0003\u0000\u0000"+
		"\u0000\u0081\u0080\u0001\u0000\u0000\u0000\u0082\u0083\u0001\u0000\u0000"+
		"\u0000\u0083\u0081\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000"+
		"\u0000\u0084\u0087\u0001\u0000\u0000\u0000\u0085\u0087\u0003\u000e\u0007"+
		"\u0000\u0086|\u0001\u0000\u0000\u0000\u0086\u0081\u0001\u0000\u0000\u0000"+
		"\u0086\u0085\u0001\u0000\u0000\u0000\u0087\r\u0001\u0000\u0000\u0000\u0088"+
		"\u0089\u0005\u001e\u0000\u0000\u0089\u008a\u0003\f\u0006\u0000\u008a\u008b"+
		"\u0005\u001f\u0000\u0000\u008b\u000f\u0001\u0000\u0000\u0000\u008c\u008d"+
		"\u0005\u0010\u0000\u0000\u008d\u008e\u0005$\u0000\u0000\u008e\u008f\u0007"+
		"\u0005\u0000\u0000\u008f\u0011\u0001\u0000\u0000\u0000\t\")0AUcz\u0083"+
		"\u0086";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}