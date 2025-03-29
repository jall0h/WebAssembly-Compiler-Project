// Generated from Grammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import GrammarListener from "./GrammarListener.js";
import GrammarVisitor from "./GrammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class GrammarParser extends Parser {
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
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_exp = 0;
	public static readonly RULE_m = 1;
	public static readonly RULE_t = 2;
	public static readonly RULE_f = 3;
	public static readonly RULE_bexp = 4;
	public static readonly RULE_a = 5;
	public static readonly RULE_ta = 6;
	public static readonly RULE_defn = 7;
	public static readonly RULE_array_index = 8;
	public static readonly RULE_prog = 9;
	public static readonly RULE_block = 10;
	public static readonly RULE_arg = 11;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"exp", "m", "t", "f", "bexp", "a", "ta", "defn", "array_index", "prog", 
		"block", "arg",
	];
	public get grammarFileName(): string { return "Grammar.g4"; }
	public get literalNames(): (string | null)[] { return GrammarParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return GrammarParser.symbolicNames; }
	public get ruleNames(): string[] { return GrammarParser.ruleNames; }
	public get serializedATN(): number[] { return GrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, GrammarParser._ATN, GrammarParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public exp(): ExpContext {
		let localctx: ExpContext = new ExpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, GrammarParser.RULE_exp);
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 24;
				this.match(GrammarParser.T_SKIP);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 25;
				this.match(GrammarParser.T_SKIP);
				this.state = 26;
				this.match(GrammarParser.L_PAREN);
				this.state = 27;
				this.match(GrammarParser.R_PAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 28;
				this.match(GrammarParser.IF);
				this.state = 29;
				this.bexp();
				this.state = 30;
				this.match(GrammarParser.THEN);
				this.state = 31;
				this.exp();
				this.state = 32;
				this.match(GrammarParser.ELSE);
				this.state = 33;
				this.exp();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 35;
				this.m();
				this.state = 36;
				this.match(GrammarParser.SEMI_COLON);
				this.state = 37;
				this.exp();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 39;
				this.m();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public m(): MContext {
		let localctx: MContext = new MContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, GrammarParser.RULE_m);
		let _la: number;
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 42;
				this.t();
				this.state = 43;
				_la = this._input.LA(1);
				if(!(_la===20 || _la===21)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 44;
				this.exp();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 46;
				this.t();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public t(): TContext {
		let localctx: TContext = new TContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, GrammarParser.RULE_t);
		let _la: number;
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 49;
				this.f();
				this.state = 50;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360128) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 51;
				this.t();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 53;
				this.f();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public f(): FContext {
		let localctx: FContext = new FContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, GrammarParser.RULE_f);
		let _la: number;
		try {
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 56;
				this.match(GrammarParser.L_PAREN);
				this.state = 57;
				this.exp();
				this.state = 58;
				this.match(GrammarParser.R_PAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 60;
				this.match(GrammarParser.L_CURLY_PAREN);
				this.state = 61;
				this.exp();
				this.state = 62;
				this.match(GrammarParser.R_CURLY_PAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 64;
				this.match(GrammarParser.ID);
				this.state = 65;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 66;
				this.exp();
				this.state = 67;
				this.match(GrammarParser.R_SQUARE_PAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 69;
				this.match(GrammarParser.ID);
				this.state = 70;
				this.match(GrammarParser.L_PAREN);
				this.state = 71;
				this.exp();
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===41) {
					{
					{
					this.state = 72;
					this.match(GrammarParser.COMMA);
					this.state = 73;
					this.exp();
					}
					}
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 79;
				this.match(GrammarParser.R_PAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 81;
				this.match(GrammarParser.ID);
				this.state = 82;
				this.match(GrammarParser.L_PAREN);
				this.state = 83;
				this.match(GrammarParser.R_PAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 84;
				this.match(GrammarParser.ID);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 85;
				this.match(GrammarParser.GLOBAL_ID);
				this.state = 86;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 87;
				this.exp();
				this.state = 88;
				this.match(GrammarParser.R_SQUARE_PAREN);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 90;
				this.match(GrammarParser.GLOBAL_ID);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 91;
				this.match(GrammarParser.SUB);
				this.state = 92;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 93;
				this.match(GrammarParser.ADD);
				this.state = 94;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 95;
				this.match(GrammarParser.SUB);
				this.state = 96;
				this.match(GrammarParser.DECIMAL_NUMBER);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 97;
				this.match(GrammarParser.ADD);
				this.state = 98;
				this.match(GrammarParser.DECIMAL_NUMBER);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 99;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 100;
				this.match(GrammarParser.DECIMAL_NUMBER);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 101;
				this.match(GrammarParser.STRING);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bexp(): BexpContext {
		let localctx: BexpContext = new BexpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, GrammarParser.RULE_bexp);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 104;
				this.a();
				this.state = 105;
				this.match(GrammarParser.OR_OP);
				this.state = 106;
				this.bexp();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 108;
				this.a();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public a(): AContext {
		let localctx: AContext = new AContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, GrammarParser.RULE_a);
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 111;
				this.ta();
				this.state = 112;
				this.match(GrammarParser.AND_OP);
				this.state = 113;
				this.a();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 115;
				this.ta();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ta(): TaContext {
		let localctx: TaContext = new TaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, GrammarParser.RULE_ta);
		let _la: number;
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 118;
				this.match(GrammarParser.L_PAREN);
				this.state = 119;
				this.bexp();
				this.state = 120;
				this.match(GrammarParser.R_PAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 122;
				this.exp();
				this.state = 123;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2113929216) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 124;
				this.exp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defn(): DefnContext {
		let localctx: DefnContext = new DefnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, GrammarParser.RULE_defn);
		let _la: number;
		try {
			this.state = 185;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 128;
				this.match(GrammarParser.DEF);
				this.state = 129;
				this.match(GrammarParser.ID);
				this.state = 130;
				this.match(GrammarParser.L_PAREN);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===17) {
					{
					{
					this.state = 131;
					this.arg();
					this.state = 136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===41) {
						{
						{
						this.state = 132;
						this.match(GrammarParser.COMMA);
						this.state = 133;
						this.arg();
						}
						}
						this.state = 138;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 144;
				this.match(GrammarParser.R_PAREN);
				this.state = 145;
				this.match(GrammarParser.COLON);
				this.state = 153;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 146;
					this.match(GrammarParser.INT);
					}
					break;
				case 2:
					{
					this.state = 147;
					this.match(GrammarParser.DOUBLE);
					}
					break;
				case 3:
					{
					this.state = 148;
					this.match(GrammarParser.STRING_TYPE);
					}
					break;
				case 4:
					{
					{
					this.state = 149;
					_la = this._input.LA(1);
					if(!(_la===11 || _la===12)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 150;
					this.match(GrammarParser.L_SQUARE_PAREN);
					this.state = 151;
					this.match(GrammarParser.R_SQUARE_PAREN);
					}
					}
					break;
				case 5:
					{
					this.state = 152;
					this.match(GrammarParser.VOID);
					}
					break;
				}
				this.state = 155;
				this.match(GrammarParser.EQUAL);
				this.state = 156;
				this.exp();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 157;
				this.match(GrammarParser.VAL);
				{
				this.state = 158;
				this.match(GrammarParser.GLOBAL_ID);
				}
				this.state = 159;
				this.match(GrammarParser.COLON);
				this.state = 160;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14336) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 161;
				this.match(GrammarParser.EQUAL);
				this.state = 169;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 162;
					this.match(GrammarParser.NUMBER);
					}
					break;
				case 2:
					{
					this.state = 163;
					this.match(GrammarParser.DECIMAL_NUMBER);
					}
					break;
				case 3:
					{
					this.state = 164;
					this.match(GrammarParser.SUB);
					this.state = 165;
					this.match(GrammarParser.DECIMAL_NUMBER);
					}
					break;
				case 4:
					{
					this.state = 166;
					this.match(GrammarParser.SUB);
					this.state = 167;
					this.match(GrammarParser.NUMBER);
					}
					break;
				case 5:
					{
					this.state = 168;
					this.match(GrammarParser.STRING);
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 171;
				this.match(GrammarParser.VAL);
				{
				this.state = 172;
				this.match(GrammarParser.GLOBAL_ID);
				}
				this.state = 173;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 174;
				this.match(GrammarParser.NUMBER);
				this.state = 175;
				this.match(GrammarParser.R_SQUARE_PAREN);
				this.state = 176;
				this.match(GrammarParser.COLON);
				this.state = 177;
				_la = this._input.LA(1);
				if(!(_la===11 || _la===12)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 178;
				this.match(GrammarParser.GLOBAL_ID);
				}
				this.state = 179;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 180;
				this.exp();
				this.state = 181;
				this.match(GrammarParser.R_SQUARE_PAREN);
				this.state = 182;
				this.match(GrammarParser.EQUAL);
				this.state = 183;
				this.exp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public array_index(): Array_indexContext {
		let localctx: Array_indexContext = new Array_indexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, GrammarParser.RULE_array_index);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 187;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 425984) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, GrammarParser.RULE_prog);
		let _la: number;
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 189;
				this.defn();
				this.state = 190;
				this.match(GrammarParser.SEMI_COLON);
				this.state = 191;
				this.prog();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 193;
					this.exp();
					}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4161554) !== 0) || _la===34 || _la===38);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 198;
				this.block();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, GrammarParser.RULE_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 201;
			this.match(GrammarParser.L_CURLY_PAREN);
			this.state = 202;
			this.prog();
			this.state = 203;
			this.match(GrammarParser.R_CURLY_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let localctx: ArgContext = new ArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, GrammarParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			this.match(GrammarParser.ID);
			this.state = 206;
			this.match(GrammarParser.COLON);
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 207;
				this.match(GrammarParser.INT);
				}
				break;
			case 2:
				{
				this.state = 208;
				this.match(GrammarParser.DOUBLE);
				}
				break;
			case 3:
				{
				this.state = 209;
				this.match(GrammarParser.STRING_TYPE);
				}
				break;
			case 4:
				{
				{
				this.state = 210;
				_la = this._input.LA(1);
				if(!(_la===11 || _la===12)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 211;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 212;
				this.match(GrammarParser.R_SQUARE_PAREN);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,43,216,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
	0,1,0,1,0,3,0,41,8,0,1,1,1,1,1,1,1,1,1,1,3,1,48,8,1,1,2,1,2,1,2,1,2,1,2,
	3,2,55,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,5,3,75,8,3,10,3,12,3,78,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,103,8,3,
	1,4,1,4,1,4,1,4,1,4,3,4,110,8,4,1,5,1,5,1,5,1,5,1,5,3,5,117,8,5,1,6,1,6,
	1,6,1,6,1,6,1,6,1,6,1,6,3,6,127,8,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,135,8,7,
	10,7,12,7,138,9,7,5,7,140,8,7,10,7,12,7,143,9,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,1,7,3,7,154,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,3,7,170,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,3,7,186,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,4,9,195,8,9,11,9,12,9,196,1,
	9,3,9,200,8,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
	11,3,11,214,8,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,6,1,0,20,
	21,1,0,22,24,1,0,25,30,1,0,11,12,1,0,11,13,2,0,15,15,17,18,246,0,40,1,0,
	0,0,2,47,1,0,0,0,4,54,1,0,0,0,6,102,1,0,0,0,8,109,1,0,0,0,10,116,1,0,0,
	0,12,126,1,0,0,0,14,185,1,0,0,0,16,187,1,0,0,0,18,199,1,0,0,0,20,201,1,
	0,0,0,22,205,1,0,0,0,24,41,5,1,0,0,25,26,5,1,0,0,26,27,5,38,0,0,27,41,5,
	39,0,0,28,29,5,4,0,0,29,30,3,8,4,0,30,31,5,5,0,0,31,32,3,0,0,0,32,33,5,
	6,0,0,33,34,3,0,0,0,34,41,1,0,0,0,35,36,3,2,1,0,36,37,5,40,0,0,37,38,3,
	0,0,0,38,41,1,0,0,0,39,41,3,2,1,0,40,24,1,0,0,0,40,25,1,0,0,0,40,28,1,0,
	0,0,40,35,1,0,0,0,40,39,1,0,0,0,41,1,1,0,0,0,42,43,3,4,2,0,43,44,7,0,0,
	0,44,45,3,0,0,0,45,48,1,0,0,0,46,48,3,4,2,0,47,42,1,0,0,0,47,46,1,0,0,0,
	48,3,1,0,0,0,49,50,3,6,3,0,50,51,7,1,0,0,51,52,3,4,2,0,52,55,1,0,0,0,53,
	55,3,6,3,0,54,49,1,0,0,0,54,53,1,0,0,0,55,5,1,0,0,0,56,57,5,38,0,0,57,58,
	3,0,0,0,58,59,5,39,0,0,59,103,1,0,0,0,60,61,5,34,0,0,61,62,3,0,0,0,62,63,
	5,35,0,0,63,103,1,0,0,0,64,65,5,17,0,0,65,66,5,36,0,0,66,67,3,0,0,0,67,
	68,5,37,0,0,68,103,1,0,0,0,69,70,5,17,0,0,70,71,5,38,0,0,71,76,3,0,0,0,
	72,73,5,41,0,0,73,75,3,0,0,0,74,72,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,
	76,77,1,0,0,0,77,79,1,0,0,0,78,76,1,0,0,0,79,80,5,39,0,0,80,103,1,0,0,0,
	81,82,5,17,0,0,82,83,5,38,0,0,83,103,5,39,0,0,84,103,5,17,0,0,85,86,5,18,
	0,0,86,87,5,36,0,0,87,88,3,0,0,0,88,89,5,37,0,0,89,103,1,0,0,0,90,103,5,
	18,0,0,91,92,5,21,0,0,92,103,5,15,0,0,93,94,5,20,0,0,94,103,5,15,0,0,95,
	96,5,21,0,0,96,103,5,16,0,0,97,98,5,20,0,0,98,103,5,16,0,0,99,103,5,15,
	0,0,100,103,5,16,0,0,101,103,5,19,0,0,102,56,1,0,0,0,102,60,1,0,0,0,102,
	64,1,0,0,0,102,69,1,0,0,0,102,81,1,0,0,0,102,84,1,0,0,0,102,85,1,0,0,0,
	102,90,1,0,0,0,102,91,1,0,0,0,102,93,1,0,0,0,102,95,1,0,0,0,102,97,1,0,
	0,0,102,99,1,0,0,0,102,100,1,0,0,0,102,101,1,0,0,0,103,7,1,0,0,0,104,105,
	3,10,5,0,105,106,5,33,0,0,106,107,3,8,4,0,107,110,1,0,0,0,108,110,3,10,
	5,0,109,104,1,0,0,0,109,108,1,0,0,0,110,9,1,0,0,0,111,112,3,12,6,0,112,
	113,5,32,0,0,113,114,3,10,5,0,114,117,1,0,0,0,115,117,3,12,6,0,116,111,
	1,0,0,0,116,115,1,0,0,0,117,11,1,0,0,0,118,119,5,38,0,0,119,120,3,8,4,0,
	120,121,5,39,0,0,121,127,1,0,0,0,122,123,3,0,0,0,123,124,7,2,0,0,124,125,
	3,0,0,0,125,127,1,0,0,0,126,118,1,0,0,0,126,122,1,0,0,0,127,13,1,0,0,0,
	128,129,5,9,0,0,129,130,5,17,0,0,130,141,5,38,0,0,131,136,3,22,11,0,132,
	133,5,41,0,0,133,135,3,22,11,0,134,132,1,0,0,0,135,138,1,0,0,0,136,134,
	1,0,0,0,136,137,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,139,131,1,0,0,0,
	140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,141,
	1,0,0,0,144,145,5,39,0,0,145,153,5,42,0,0,146,154,5,11,0,0,147,154,5,12,
	0,0,148,154,5,13,0,0,149,150,7,3,0,0,150,151,5,36,0,0,151,154,5,37,0,0,
	152,154,5,14,0,0,153,146,1,0,0,0,153,147,1,0,0,0,153,148,1,0,0,0,153,149,
	1,0,0,0,153,152,1,0,0,0,154,155,1,0,0,0,155,156,5,31,0,0,156,186,3,0,0,
	0,157,158,5,10,0,0,158,159,5,18,0,0,159,160,5,42,0,0,160,161,7,4,0,0,161,
	169,5,31,0,0,162,170,5,15,0,0,163,170,5,16,0,0,164,165,5,21,0,0,165,170,
	5,16,0,0,166,167,5,21,0,0,167,170,5,15,0,0,168,170,5,19,0,0,169,162,1,0,
	0,0,169,163,1,0,0,0,169,164,1,0,0,0,169,166,1,0,0,0,169,168,1,0,0,0,170,
	186,1,0,0,0,171,172,5,10,0,0,172,173,5,18,0,0,173,174,5,36,0,0,174,175,
	5,15,0,0,175,176,5,37,0,0,176,177,5,42,0,0,177,186,7,3,0,0,178,179,5,18,
	0,0,179,180,5,36,0,0,180,181,3,0,0,0,181,182,5,37,0,0,182,183,5,31,0,0,
	183,184,3,0,0,0,184,186,1,0,0,0,185,128,1,0,0,0,185,157,1,0,0,0,185,171,
	1,0,0,0,185,178,1,0,0,0,186,15,1,0,0,0,187,188,7,5,0,0,188,17,1,0,0,0,189,
	190,3,14,7,0,190,191,5,40,0,0,191,192,3,18,9,0,192,200,1,0,0,0,193,195,
	3,0,0,0,194,193,1,0,0,0,195,196,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,
	197,200,1,0,0,0,198,200,3,20,10,0,199,189,1,0,0,0,199,194,1,0,0,0,199,198,
	1,0,0,0,200,19,1,0,0,0,201,202,5,34,0,0,202,203,3,18,9,0,203,204,5,35,0,
	0,204,21,1,0,0,0,205,206,5,17,0,0,206,213,5,42,0,0,207,214,5,11,0,0,208,
	214,5,12,0,0,209,214,5,13,0,0,210,211,7,3,0,0,211,212,5,36,0,0,212,214,
	5,37,0,0,213,207,1,0,0,0,213,208,1,0,0,0,213,209,1,0,0,0,213,210,1,0,0,
	0,214,23,1,0,0,0,16,40,47,54,76,102,109,116,126,136,141,153,169,185,196,
	199,213];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GrammarParser.__ATN) {
			GrammarParser.__ATN = new ATNDeserializer().deserialize(GrammarParser._serializedATN);
		}

		return GrammarParser.__ATN;
	}


	static DecisionsToDFA = GrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ExpContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public T_SKIP(): TerminalNode {
		return this.getToken(GrammarParser.T_SKIP, 0);
	}
	public L_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_PAREN, 0);
	}
	public R_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_PAREN, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(GrammarParser.IF, 0);
	}
	public bexp(): BexpContext {
		return this.getTypedRuleContext(BexpContext, 0) as BexpContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(GrammarParser.THEN, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(GrammarParser.ELSE, 0);
	}
	public m(): MContext {
		return this.getTypedRuleContext(MContext, 0) as MContext;
	}
	public SEMI_COLON(): TerminalNode {
		return this.getToken(GrammarParser.SEMI_COLON, 0);
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_exp;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterExp) {
	 		listener.enterExp(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitExp) {
	 		listener.exitExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitExp) {
			return visitor.visitExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public t(): TContext {
		return this.getTypedRuleContext(TContext, 0) as TContext;
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(GrammarParser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(GrammarParser.SUB, 0);
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_m;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterM) {
	 		listener.enterM(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitM) {
	 		listener.exitM(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitM) {
			return visitor.visitM(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public f(): FContext {
		return this.getTypedRuleContext(FContext, 0) as FContext;
	}
	public t(): TContext {
		return this.getTypedRuleContext(TContext, 0) as TContext;
	}
	public MULT(): TerminalNode {
		return this.getToken(GrammarParser.MULT, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(GrammarParser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(GrammarParser.MOD, 0);
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_t;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterT) {
	 		listener.enterT(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitT) {
	 		listener.exitT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitT) {
			return visitor.visitT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_PAREN, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public R_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_PAREN, 0);
	}
	public L_CURLY_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_CURLY_PAREN, 0);
	}
	public R_CURLY_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_CURLY_PAREN, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(GrammarParser.ID, 0);
	}
	public L_SQUARE_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_SQUARE_PAREN, 0);
	}
	public R_SQUARE_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_SQUARE_PAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GrammarParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(GrammarParser.COMMA, i);
	}
	public GLOBAL_ID(): TerminalNode {
		return this.getToken(GrammarParser.GLOBAL_ID, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(GrammarParser.SUB, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(GrammarParser.NUMBER, 0);
	}
	public ADD(): TerminalNode {
		return this.getToken(GrammarParser.ADD, 0);
	}
	public DECIMAL_NUMBER(): TerminalNode {
		return this.getToken(GrammarParser.DECIMAL_NUMBER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(GrammarParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_f;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterF) {
	 		listener.enterF(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitF) {
	 		listener.exitF(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitF) {
			return visitor.visitF(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BexpContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public a(): AContext {
		return this.getTypedRuleContext(AContext, 0) as AContext;
	}
	public OR_OP(): TerminalNode {
		return this.getToken(GrammarParser.OR_OP, 0);
	}
	public bexp(): BexpContext {
		return this.getTypedRuleContext(BexpContext, 0) as BexpContext;
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_bexp;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterBexp) {
	 		listener.enterBexp(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitBexp) {
	 		listener.exitBexp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitBexp) {
			return visitor.visitBexp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ta(): TaContext {
		return this.getTypedRuleContext(TaContext, 0) as TaContext;
	}
	public AND_OP(): TerminalNode {
		return this.getToken(GrammarParser.AND_OP, 0);
	}
	public a(): AContext {
		return this.getTypedRuleContext(AContext, 0) as AContext;
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_a;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterA) {
	 		listener.enterA(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitA) {
	 		listener.exitA(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitA) {
			return visitor.visitA(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_PAREN, 0);
	}
	public bexp(): BexpContext {
		return this.getTypedRuleContext(BexpContext, 0) as BexpContext;
	}
	public R_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_PAREN, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public EQUAL_TO(): TerminalNode {
		return this.getToken(GrammarParser.EQUAL_TO, 0);
	}
	public NOT_EQUAL_TO(): TerminalNode {
		return this.getToken(GrammarParser.NOT_EQUAL_TO, 0);
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(GrammarParser.LESS_THAN, 0);
	}
	public MORE_THAN(): TerminalNode {
		return this.getToken(GrammarParser.MORE_THAN, 0);
	}
	public LESS_THAN_EQUAL(): TerminalNode {
		return this.getToken(GrammarParser.LESS_THAN_EQUAL, 0);
	}
	public MORE_THAN_EQUAL(): TerminalNode {
		return this.getToken(GrammarParser.MORE_THAN_EQUAL, 0);
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_ta;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterTa) {
	 		listener.enterTa(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitTa) {
	 		listener.exitTa(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitTa) {
			return visitor.visitTa(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefnContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(GrammarParser.DEF, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(GrammarParser.ID, 0);
	}
	public L_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_PAREN, 0);
	}
	public R_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_PAREN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(GrammarParser.COLON, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(GrammarParser.EQUAL, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public INT(): TerminalNode {
		return this.getToken(GrammarParser.INT, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(GrammarParser.DOUBLE, 0);
	}
	public STRING_TYPE(): TerminalNode {
		return this.getToken(GrammarParser.STRING_TYPE, 0);
	}
	public VOID(): TerminalNode {
		return this.getToken(GrammarParser.VOID, 0);
	}
	public arg_list(): ArgContext[] {
		return this.getTypedRuleContexts(ArgContext) as ArgContext[];
	}
	public arg(i: number): ArgContext {
		return this.getTypedRuleContext(ArgContext, i) as ArgContext;
	}
	public L_SQUARE_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_SQUARE_PAREN, 0);
	}
	public R_SQUARE_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_SQUARE_PAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GrammarParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(GrammarParser.COMMA, i);
	}
	public VAL(): TerminalNode {
		return this.getToken(GrammarParser.VAL, 0);
	}
	public GLOBAL_ID(): TerminalNode {
		return this.getToken(GrammarParser.GLOBAL_ID, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(GrammarParser.NUMBER, 0);
	}
	public DECIMAL_NUMBER(): TerminalNode {
		return this.getToken(GrammarParser.DECIMAL_NUMBER, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(GrammarParser.SUB, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(GrammarParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_defn;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterDefn) {
	 		listener.enterDefn(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitDefn) {
	 		listener.exitDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitDefn) {
			return visitor.visitDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_indexContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(GrammarParser.NUMBER, 0);
	}
	public GLOBAL_ID(): TerminalNode {
		return this.getToken(GrammarParser.GLOBAL_ID, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(GrammarParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_array_index;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterArray_index) {
	 		listener.enterArray_index(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitArray_index) {
	 		listener.exitArray_index(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitArray_index) {
			return visitor.visitArray_index(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public defn(): DefnContext {
		return this.getTypedRuleContext(DefnContext, 0) as DefnContext;
	}
	public SEMI_COLON(): TerminalNode {
		return this.getToken(GrammarParser.SEMI_COLON, 0);
	}
	public prog(): ProgContext {
		return this.getTypedRuleContext(ProgContext, 0) as ProgContext;
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_prog;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_CURLY_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_CURLY_PAREN, 0);
	}
	public prog(): ProgContext {
		return this.getTypedRuleContext(ProgContext, 0) as ProgContext;
	}
	public R_CURLY_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_CURLY_PAREN, 0);
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_block;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	constructor(parser?: GrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(GrammarParser.ID, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(GrammarParser.COLON, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(GrammarParser.INT, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(GrammarParser.DOUBLE, 0);
	}
	public STRING_TYPE(): TerminalNode {
		return this.getToken(GrammarParser.STRING_TYPE, 0);
	}
	public L_SQUARE_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_SQUARE_PAREN, 0);
	}
	public R_SQUARE_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_SQUARE_PAREN, 0);
	}
    public get ruleIndex(): number {
    	return GrammarParser.RULE_arg;
	}
	public enterRule(listener: GrammarListener): void {
	    if(listener.enterArg) {
	 		listener.enterArg(this);
		}
	}
	public exitRule(listener: GrammarListener): void {
	    if(listener.exitArg) {
	 		listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
