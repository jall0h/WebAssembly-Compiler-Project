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
	public static readonly ARRAY = 15;
	public static readonly NUMBER = 16;
	public static readonly DECIMAL_NUMBER = 17;
	public static readonly ID = 18;
	public static readonly GLOBAL_ID = 19;
	public static readonly STRING = 20;
	public static readonly ADD = 21;
	public static readonly SUB = 22;
	public static readonly MULT = 23;
	public static readonly DIV = 24;
	public static readonly MOD = 25;
	public static readonly MORE_THAN = 26;
	public static readonly LESS_THAN = 27;
	public static readonly MORE_THAN_EQUAL = 28;
	public static readonly LESS_THAN_EQUAL = 29;
	public static readonly EQUAL_TO = 30;
	public static readonly NOT_EQUAL_TO = 31;
	public static readonly EQUAL = 32;
	public static readonly L_CURLY_PAREN = 33;
	public static readonly R_CURLY_PAREN = 34;
	public static readonly L_SQUARE_PAREN = 35;
	public static readonly R_SQUARE_PAREN = 36;
	public static readonly L_PAREN = 37;
	public static readonly R_PAREN = 38;
	public static readonly SEMI_COLON = 39;
	public static readonly COMMA = 40;
	public static readonly COLON = 41;
	public static readonly WHITESPACE = 42;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_exp = 0;
	public static readonly RULE_m = 1;
	public static readonly RULE_t = 2;
	public static readonly RULE_f = 3;
	public static readonly RULE_bexp = 4;
	public static readonly RULE_defn = 5;
	public static readonly RULE_prog = 6;
	public static readonly RULE_block = 7;
	public static readonly RULE_arg = 8;
	public static readonly literalNames: (string | null)[] = [ null, "'skip'", 
                                                            "'true'", "'false'", 
                                                            "'if'", "'then'", 
                                                            "'else'", "'while'", 
                                                            "'do'", "'def'", 
                                                            "'val'", "'Int'", 
                                                            "'Double'", 
                                                            "'String'", 
                                                            "'Void'", "'array'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'>'", "'<'", 
                                                            "'>='", "'<='", 
                                                            "'=='", "'!='", 
                                                            "'='", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "'('", 
                                                            "')'", "';'", 
                                                            "','", "':'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "T_SKIP", 
                                                             "TRUE", "FALSE", 
                                                             "IF", "THEN", 
                                                             "ELSE", "WHILE", 
                                                             "DO", "DEF", 
                                                             "VAL", "INT", 
                                                             "DOUBLE", "STRING_TYPE", 
                                                             "VOID", "ARRAY", 
                                                             "NUMBER", "DECIMAL_NUMBER", 
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
                                                             "EQUAL", "L_CURLY_PAREN", 
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
		"exp", "m", "t", "f", "bexp", "defn", "prog", "block", "arg",
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
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 18;
				this.match(GrammarParser.T_SKIP);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 19;
				this.match(GrammarParser.T_SKIP);
				this.state = 20;
				this.match(GrammarParser.L_PAREN);
				this.state = 21;
				this.match(GrammarParser.R_PAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 22;
				this.match(GrammarParser.IF);
				this.state = 23;
				this.bexp();
				this.state = 24;
				this.match(GrammarParser.THEN);
				this.state = 25;
				this.exp();
				this.state = 26;
				this.match(GrammarParser.ELSE);
				this.state = 27;
				this.exp();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 29;
				this.m();
				this.state = 30;
				this.match(GrammarParser.SEMI_COLON);
				this.state = 31;
				this.exp();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 33;
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
			this.state = 41;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 36;
				this.t();
				this.state = 37;
				_la = this._input.LA(1);
				if(!(_la===21 || _la===22)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 38;
				this.exp();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 40;
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
			this.state = 48;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 43;
				this.f();
				this.state = 44;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 58720256) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 45;
				this.t();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 47;
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
			this.state = 94;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 50;
				this.match(GrammarParser.L_PAREN);
				this.state = 51;
				this.exp();
				this.state = 52;
				this.match(GrammarParser.R_PAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 54;
				this.match(GrammarParser.L_CURLY_PAREN);
				this.state = 55;
				this.exp();
				this.state = 56;
				this.match(GrammarParser.R_CURLY_PAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 58;
				this.match(GrammarParser.ID);
				this.state = 59;
				this.match(GrammarParser.L_PAREN);
				this.state = 60;
				this.exp();
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===40) {
					{
					{
					this.state = 61;
					this.match(GrammarParser.COMMA);
					this.state = 62;
					this.exp();
					}
					}
					this.state = 67;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 68;
				this.match(GrammarParser.R_PAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 70;
				this.match(GrammarParser.ID);
				this.state = 71;
				this.match(GrammarParser.L_PAREN);
				this.state = 72;
				this.match(GrammarParser.R_PAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 73;
				this.match(GrammarParser.ID);
				this.state = 74;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 75;
				this.match(GrammarParser.NUMBER);
				this.state = 76;
				this.match(GrammarParser.R_SQUARE_PAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 77;
				this.match(GrammarParser.ID);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 78;
				this.match(GrammarParser.GLOBAL_ID);
				this.state = 79;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 80;
				this.match(GrammarParser.NUMBER);
				this.state = 81;
				this.match(GrammarParser.R_SQUARE_PAREN);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 82;
				this.match(GrammarParser.GLOBAL_ID);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 83;
				this.match(GrammarParser.SUB);
				this.state = 84;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 85;
				this.match(GrammarParser.ADD);
				this.state = 86;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 87;
				this.match(GrammarParser.SUB);
				this.state = 88;
				this.match(GrammarParser.DECIMAL_NUMBER);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 89;
				this.match(GrammarParser.ADD);
				this.state = 90;
				this.match(GrammarParser.DECIMAL_NUMBER);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 91;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 92;
				this.match(GrammarParser.DECIMAL_NUMBER);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 93;
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 96;
			this.exp();
			this.state = 97;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4227858432) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 98;
			this.exp();
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
		this.enterRule(localctx, 10, GrammarParser.RULE_defn);
		let _la: number;
		try {
			this.state = 162;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 100;
				this.match(GrammarParser.DEF);
				this.state = 101;
				this.match(GrammarParser.ID);
				this.state = 102;
				this.match(GrammarParser.L_PAREN);
				this.state = 103;
				this.arg();
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===40) {
					{
					{
					this.state = 104;
					this.match(GrammarParser.COMMA);
					this.state = 105;
					this.arg();
					}
					}
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 111;
				this.match(GrammarParser.R_PAREN);
				this.state = 112;
				this.match(GrammarParser.COLON);
				this.state = 113;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 30720) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 114;
				this.match(GrammarParser.EQUAL);
				this.state = 115;
				this.exp();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 117;
				this.match(GrammarParser.DEF);
				this.state = 118;
				this.match(GrammarParser.ID);
				this.state = 119;
				this.match(GrammarParser.L_PAREN);
				this.state = 120;
				this.match(GrammarParser.R_PAREN);
				this.state = 121;
				this.match(GrammarParser.COLON);
				this.state = 122;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 30720) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 123;
				this.match(GrammarParser.EQUAL);
				this.state = 124;
				this.exp();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 125;
				this.match(GrammarParser.VAL);
				this.state = 126;
				_la = this._input.LA(1);
				if(!(_la===18 || _la===19)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 127;
				this.match(GrammarParser.COLON);
				this.state = 128;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14336) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 129;
				this.match(GrammarParser.EQUAL);
				this.state = 137;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 130;
					this.match(GrammarParser.NUMBER);
					}
					break;
				case 2:
					{
					this.state = 131;
					this.match(GrammarParser.DECIMAL_NUMBER);
					}
					break;
				case 3:
					{
					this.state = 132;
					this.match(GrammarParser.SUB);
					this.state = 133;
					this.match(GrammarParser.DECIMAL_NUMBER);
					}
					break;
				case 4:
					{
					this.state = 134;
					this.match(GrammarParser.SUB);
					this.state = 135;
					this.match(GrammarParser.NUMBER);
					}
					break;
				case 5:
					{
					this.state = 136;
					this.match(GrammarParser.STRING);
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 139;
				this.match(GrammarParser.VAL);
				this.state = 140;
				_la = this._input.LA(1);
				if(!(_la===18 || _la===19)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 141;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 142;
				this.match(GrammarParser.NUMBER);
				this.state = 143;
				this.match(GrammarParser.R_SQUARE_PAREN);
				this.state = 144;
				this.match(GrammarParser.COLON);
				this.state = 145;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 146;
				_la = this._input.LA(1);
				if(!(_la===11 || _la===12)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 147;
				this.match(GrammarParser.R_SQUARE_PAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 148;
				_la = this._input.LA(1);
				if(!(_la===18 || _la===19)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 149;
				this.match(GrammarParser.L_SQUARE_PAREN);
				this.state = 150;
				this.match(GrammarParser.NUMBER);
				this.state = 151;
				this.match(GrammarParser.R_SQUARE_PAREN);
				this.state = 152;
				this.match(GrammarParser.EQUAL);
				this.state = 160;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 153;
					this.match(GrammarParser.NUMBER);
					}
					break;
				case 2:
					{
					this.state = 154;
					this.match(GrammarParser.DECIMAL_NUMBER);
					}
					break;
				case 3:
					{
					this.state = 155;
					this.match(GrammarParser.SUB);
					this.state = 156;
					this.match(GrammarParser.DECIMAL_NUMBER);
					}
					break;
				case 4:
					{
					this.state = 157;
					this.match(GrammarParser.SUB);
					this.state = 158;
					this.match(GrammarParser.NUMBER);
					}
					break;
				case 5:
					{
					this.state = 159;
					this.match(GrammarParser.STRING);
					}
					break;
				}
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
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, GrammarParser.RULE_prog);
		let _la: number;
		try {
			this.state = 174;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 164;
				this.defn();
				this.state = 165;
				this.match(GrammarParser.SEMI_COLON);
				this.state = 166;
				this.prog();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 168;
					this.exp();
					}
					}
					this.state = 171;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8323090) !== 0) || _la===33 || _la===37);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 173;
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
		this.enterRule(localctx, 14, GrammarParser.RULE_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			this.match(GrammarParser.L_CURLY_PAREN);
			this.state = 177;
			this.prog();
			this.state = 178;
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
		this.enterRule(localctx, 16, GrammarParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
			this.match(GrammarParser.ID);
			this.state = 181;
			this.match(GrammarParser.COLON);
			this.state = 182;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14336) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,42,185,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,
	0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,35,8,0,1,1,1,
	1,1,1,1,1,1,1,3,1,42,8,1,1,2,1,2,1,2,1,2,1,2,3,2,49,8,2,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,64,8,3,10,3,12,3,67,9,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,3,3,95,8,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
	1,5,5,5,107,8,5,10,5,12,5,110,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
	5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,138,
	8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,5,1,5,1,5,3,5,161,8,5,3,5,163,8,5,1,6,1,6,1,6,1,6,1,6,4,6,170,8,6,
	11,6,12,6,171,1,6,3,6,175,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,0,0,9,
	0,2,4,6,8,10,12,14,16,0,7,1,0,21,22,1,0,23,25,1,0,26,31,1,0,11,14,1,0,18,
	19,1,0,11,13,1,0,11,12,212,0,34,1,0,0,0,2,41,1,0,0,0,4,48,1,0,0,0,6,94,
	1,0,0,0,8,96,1,0,0,0,10,162,1,0,0,0,12,174,1,0,0,0,14,176,1,0,0,0,16,180,
	1,0,0,0,18,35,5,1,0,0,19,20,5,1,0,0,20,21,5,37,0,0,21,35,5,38,0,0,22,23,
	5,4,0,0,23,24,3,8,4,0,24,25,5,5,0,0,25,26,3,0,0,0,26,27,5,6,0,0,27,28,3,
	0,0,0,28,35,1,0,0,0,29,30,3,2,1,0,30,31,5,39,0,0,31,32,3,0,0,0,32,35,1,
	0,0,0,33,35,3,2,1,0,34,18,1,0,0,0,34,19,1,0,0,0,34,22,1,0,0,0,34,29,1,0,
	0,0,34,33,1,0,0,0,35,1,1,0,0,0,36,37,3,4,2,0,37,38,7,0,0,0,38,39,3,0,0,
	0,39,42,1,0,0,0,40,42,3,4,2,0,41,36,1,0,0,0,41,40,1,0,0,0,42,3,1,0,0,0,
	43,44,3,6,3,0,44,45,7,1,0,0,45,46,3,4,2,0,46,49,1,0,0,0,47,49,3,6,3,0,48,
	43,1,0,0,0,48,47,1,0,0,0,49,5,1,0,0,0,50,51,5,37,0,0,51,52,3,0,0,0,52,53,
	5,38,0,0,53,95,1,0,0,0,54,55,5,33,0,0,55,56,3,0,0,0,56,57,5,34,0,0,57,95,
	1,0,0,0,58,59,5,18,0,0,59,60,5,37,0,0,60,65,3,0,0,0,61,62,5,40,0,0,62,64,
	3,0,0,0,63,61,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,
	0,0,0,67,65,1,0,0,0,68,69,5,38,0,0,69,95,1,0,0,0,70,71,5,18,0,0,71,72,5,
	37,0,0,72,95,5,38,0,0,73,74,5,18,0,0,74,75,5,35,0,0,75,76,5,16,0,0,76,95,
	5,36,0,0,77,95,5,18,0,0,78,79,5,19,0,0,79,80,5,35,0,0,80,81,5,16,0,0,81,
	95,5,36,0,0,82,95,5,19,0,0,83,84,5,22,0,0,84,95,5,16,0,0,85,86,5,21,0,0,
	86,95,5,16,0,0,87,88,5,22,0,0,88,95,5,17,0,0,89,90,5,21,0,0,90,95,5,17,
	0,0,91,95,5,16,0,0,92,95,5,17,0,0,93,95,5,20,0,0,94,50,1,0,0,0,94,54,1,
	0,0,0,94,58,1,0,0,0,94,70,1,0,0,0,94,73,1,0,0,0,94,77,1,0,0,0,94,78,1,0,
	0,0,94,82,1,0,0,0,94,83,1,0,0,0,94,85,1,0,0,0,94,87,1,0,0,0,94,89,1,0,0,
	0,94,91,1,0,0,0,94,92,1,0,0,0,94,93,1,0,0,0,95,7,1,0,0,0,96,97,3,0,0,0,
	97,98,7,2,0,0,98,99,3,0,0,0,99,9,1,0,0,0,100,101,5,9,0,0,101,102,5,18,0,
	0,102,103,5,37,0,0,103,108,3,16,8,0,104,105,5,40,0,0,105,107,3,16,8,0,106,
	104,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,
	0,0,110,108,1,0,0,0,111,112,5,38,0,0,112,113,5,41,0,0,113,114,7,3,0,0,114,
	115,5,32,0,0,115,116,3,0,0,0,116,163,1,0,0,0,117,118,5,9,0,0,118,119,5,
	18,0,0,119,120,5,37,0,0,120,121,5,38,0,0,121,122,5,41,0,0,122,123,7,3,0,
	0,123,124,5,32,0,0,124,163,3,0,0,0,125,126,5,10,0,0,126,127,7,4,0,0,127,
	128,5,41,0,0,128,129,7,5,0,0,129,137,5,32,0,0,130,138,5,16,0,0,131,138,
	5,17,0,0,132,133,5,22,0,0,133,138,5,17,0,0,134,135,5,22,0,0,135,138,5,16,
	0,0,136,138,5,20,0,0,137,130,1,0,0,0,137,131,1,0,0,0,137,132,1,0,0,0,137,
	134,1,0,0,0,137,136,1,0,0,0,138,163,1,0,0,0,139,140,5,10,0,0,140,141,7,
	4,0,0,141,142,5,35,0,0,142,143,5,16,0,0,143,144,5,36,0,0,144,145,5,41,0,
	0,145,146,5,35,0,0,146,147,7,6,0,0,147,163,5,36,0,0,148,149,7,4,0,0,149,
	150,5,35,0,0,150,151,5,16,0,0,151,152,5,36,0,0,152,160,5,32,0,0,153,161,
	5,16,0,0,154,161,5,17,0,0,155,156,5,22,0,0,156,161,5,17,0,0,157,158,5,22,
	0,0,158,161,5,16,0,0,159,161,5,20,0,0,160,153,1,0,0,0,160,154,1,0,0,0,160,
	155,1,0,0,0,160,157,1,0,0,0,160,159,1,0,0,0,161,163,1,0,0,0,162,100,1,0,
	0,0,162,117,1,0,0,0,162,125,1,0,0,0,162,139,1,0,0,0,162,148,1,0,0,0,163,
	11,1,0,0,0,164,165,3,10,5,0,165,166,5,39,0,0,166,167,3,12,6,0,167,175,1,
	0,0,0,168,170,3,0,0,0,169,168,1,0,0,0,170,171,1,0,0,0,171,169,1,0,0,0,171,
	172,1,0,0,0,172,175,1,0,0,0,173,175,3,14,7,0,174,164,1,0,0,0,174,169,1,
	0,0,0,174,173,1,0,0,0,175,13,1,0,0,0,176,177,5,33,0,0,177,178,3,12,6,0,
	178,179,5,34,0,0,179,15,1,0,0,0,180,181,5,18,0,0,181,182,5,41,0,0,182,183,
	7,5,0,0,183,17,1,0,0,0,11,34,41,48,65,94,108,137,160,162,171,174];

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
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GrammarParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(GrammarParser.COMMA, i);
	}
	public L_SQUARE_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.L_SQUARE_PAREN, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(GrammarParser.NUMBER, 0);
	}
	public R_SQUARE_PAREN(): TerminalNode {
		return this.getToken(GrammarParser.R_SQUARE_PAREN, 0);
	}
	public GLOBAL_ID(): TerminalNode {
		return this.getToken(GrammarParser.GLOBAL_ID, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(GrammarParser.SUB, 0);
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
	public arg_list(): ArgContext[] {
		return this.getTypedRuleContexts(ArgContext) as ArgContext[];
	}
	public arg(i: number): ArgContext {
		return this.getTypedRuleContext(ArgContext, i) as ArgContext;
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
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
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
	public NUMBER_list(): TerminalNode[] {
	    	return this.getTokens(GrammarParser.NUMBER);
	}
	public NUMBER(i: number): TerminalNode {
		return this.getToken(GrammarParser.NUMBER, i);
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
	public L_SQUARE_PAREN_list(): TerminalNode[] {
	    	return this.getTokens(GrammarParser.L_SQUARE_PAREN);
	}
	public L_SQUARE_PAREN(i: number): TerminalNode {
		return this.getToken(GrammarParser.L_SQUARE_PAREN, i);
	}
	public R_SQUARE_PAREN_list(): TerminalNode[] {
	    	return this.getTokens(GrammarParser.R_SQUARE_PAREN);
	}
	public R_SQUARE_PAREN(i: number): TerminalNode {
		return this.getToken(GrammarParser.R_SQUARE_PAREN, i);
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
