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
				if(!(_la===18 || _la===19)) {
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
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7340032) !== 0))) {
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
			this.state = 85;
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
				while (_la===35) {
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
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 74;
				this.match(GrammarParser.GLOBAL_ID);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 75;
				this.match(GrammarParser.SUB);
				this.state = 76;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 77;
				this.match(GrammarParser.ADD);
				this.state = 78;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 79;
				this.match(GrammarParser.SUB);
				this.state = 80;
				this.match(GrammarParser.DECIMAL_NUMBER);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 81;
				this.match(GrammarParser.ADD);
				this.state = 82;
				this.match(GrammarParser.DECIMAL_NUMBER);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 83;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 84;
				this.match(GrammarParser.DECIMAL_NUMBER);
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
			this.state = 87;
			this.exp();
			this.state = 88;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 528482304) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 89;
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
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 91;
				this.match(GrammarParser.DEF);
				this.state = 92;
				this.match(GrammarParser.ID);
				this.state = 93;
				this.match(GrammarParser.L_PAREN);
				this.state = 94;
				this.arg();
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===35) {
					{
					{
					this.state = 95;
					this.match(GrammarParser.COMMA);
					this.state = 96;
					this.arg();
					}
					}
					this.state = 101;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 102;
				this.match(GrammarParser.R_PAREN);
				this.state = 103;
				this.match(GrammarParser.COLON);
				this.state = 104;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14336) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 105;
				this.match(GrammarParser.EQUAL);
				this.state = 106;
				this.exp();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 108;
				this.match(GrammarParser.DEF);
				this.state = 109;
				this.match(GrammarParser.ID);
				this.state = 110;
				this.match(GrammarParser.L_PAREN);
				this.state = 111;
				this.match(GrammarParser.R_PAREN);
				this.state = 112;
				this.match(GrammarParser.COLON);
				this.state = 113;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14336) !== 0))) {
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
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 116;
				this.match(GrammarParser.VAL);
				this.state = 117;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===17)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 118;
				this.match(GrammarParser.COLON);
				this.state = 119;
				_la = this._input.LA(1);
				if(!(_la===11 || _la===12)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 120;
				this.match(GrammarParser.EQUAL);
				this.state = 121;
				_la = this._input.LA(1);
				if(!(_la===14 || _la===15)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
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
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 124;
				this.defn();
				this.state = 125;
				this.match(GrammarParser.SEMI_COLON);
				this.state = 126;
				this.prog();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 128;
					this.exp();
					}
					}
					this.state = 131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 2684870665) !== 0));
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 133;
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
			this.state = 136;
			this.match(GrammarParser.L_CURLY_PAREN);
			this.state = 137;
			this.prog();
			this.state = 138;
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
			this.state = 140;
			this.match(GrammarParser.ID);
			this.state = 141;
			this.match(GrammarParser.COLON);
			this.state = 142;
			_la = this._input.LA(1);
			if(!(_la===11 || _la===12)) {
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

	public static readonly _serializedATN: number[] = [4,1,37,145,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,
	0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,35,8,0,1,1,1,
	1,1,1,1,1,1,1,3,1,42,8,1,1,2,1,2,1,2,1,2,1,2,3,2,49,8,2,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,64,8,3,10,3,12,3,67,9,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,86,8,3,
	1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,98,8,5,10,5,12,5,101,9,5,1,
	5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
	5,1,5,3,5,123,8,5,1,6,1,6,1,6,1,6,1,6,4,6,130,8,6,11,6,12,6,131,1,6,3,6,
	135,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,
	0,7,1,0,18,19,1,0,20,22,1,0,23,28,1,0,11,13,1,0,16,17,1,0,11,12,1,0,14,
	15,159,0,34,1,0,0,0,2,41,1,0,0,0,4,48,1,0,0,0,6,85,1,0,0,0,8,87,1,0,0,0,
	10,122,1,0,0,0,12,134,1,0,0,0,14,136,1,0,0,0,16,140,1,0,0,0,18,35,5,1,0,
	0,19,20,5,1,0,0,20,21,5,32,0,0,21,35,5,33,0,0,22,23,5,4,0,0,23,24,3,8,4,
	0,24,25,5,5,0,0,25,26,3,0,0,0,26,27,5,6,0,0,27,28,3,0,0,0,28,35,1,0,0,0,
	29,30,3,2,1,0,30,31,5,34,0,0,31,32,3,0,0,0,32,35,1,0,0,0,33,35,3,2,1,0,
	34,18,1,0,0,0,34,19,1,0,0,0,34,22,1,0,0,0,34,29,1,0,0,0,34,33,1,0,0,0,35,
	1,1,0,0,0,36,37,3,4,2,0,37,38,7,0,0,0,38,39,3,0,0,0,39,42,1,0,0,0,40,42,
	3,4,2,0,41,36,1,0,0,0,41,40,1,0,0,0,42,3,1,0,0,0,43,44,3,6,3,0,44,45,7,
	1,0,0,45,46,3,4,2,0,46,49,1,0,0,0,47,49,3,6,3,0,48,43,1,0,0,0,48,47,1,0,
	0,0,49,5,1,0,0,0,50,51,5,32,0,0,51,52,3,0,0,0,52,53,5,33,0,0,53,86,1,0,
	0,0,54,55,5,30,0,0,55,56,3,0,0,0,56,57,5,31,0,0,57,86,1,0,0,0,58,59,5,16,
	0,0,59,60,5,32,0,0,60,65,3,0,0,0,61,62,5,35,0,0,62,64,3,0,0,0,63,61,1,0,
	0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,65,1,0,0,
	0,68,69,5,33,0,0,69,86,1,0,0,0,70,71,5,16,0,0,71,72,5,32,0,0,72,86,5,33,
	0,0,73,86,5,16,0,0,74,86,5,17,0,0,75,76,5,19,0,0,76,86,5,14,0,0,77,78,5,
	18,0,0,78,86,5,14,0,0,79,80,5,19,0,0,80,86,5,15,0,0,81,82,5,18,0,0,82,86,
	5,15,0,0,83,86,5,14,0,0,84,86,5,15,0,0,85,50,1,0,0,0,85,54,1,0,0,0,85,58,
	1,0,0,0,85,70,1,0,0,0,85,73,1,0,0,0,85,74,1,0,0,0,85,75,1,0,0,0,85,77,1,
	0,0,0,85,79,1,0,0,0,85,81,1,0,0,0,85,83,1,0,0,0,85,84,1,0,0,0,86,7,1,0,
	0,0,87,88,3,0,0,0,88,89,7,2,0,0,89,90,3,0,0,0,90,9,1,0,0,0,91,92,5,9,0,
	0,92,93,5,16,0,0,93,94,5,32,0,0,94,99,3,16,8,0,95,96,5,35,0,0,96,98,3,16,
	8,0,97,95,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,102,1,
	0,0,0,101,99,1,0,0,0,102,103,5,33,0,0,103,104,5,36,0,0,104,105,7,3,0,0,
	105,106,5,29,0,0,106,107,3,0,0,0,107,123,1,0,0,0,108,109,5,9,0,0,109,110,
	5,16,0,0,110,111,5,32,0,0,111,112,5,33,0,0,112,113,5,36,0,0,113,114,7,3,
	0,0,114,115,5,29,0,0,115,123,3,0,0,0,116,117,5,10,0,0,117,118,7,4,0,0,118,
	119,5,36,0,0,119,120,7,5,0,0,120,121,5,29,0,0,121,123,7,6,0,0,122,91,1,
	0,0,0,122,108,1,0,0,0,122,116,1,0,0,0,123,11,1,0,0,0,124,125,3,10,5,0,125,
	126,5,34,0,0,126,127,3,12,6,0,127,135,1,0,0,0,128,130,3,0,0,0,129,128,1,
	0,0,0,130,131,1,0,0,0,131,129,1,0,0,0,131,132,1,0,0,0,132,135,1,0,0,0,133,
	135,3,14,7,0,134,124,1,0,0,0,134,129,1,0,0,0,134,133,1,0,0,0,135,13,1,0,
	0,0,136,137,5,30,0,0,137,138,3,12,6,0,138,139,5,31,0,0,139,15,1,0,0,0,140,
	141,5,16,0,0,141,142,5,36,0,0,142,143,7,5,0,0,143,17,1,0,0,0,9,34,41,48,
	65,85,99,122,131,134];

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
	public NUMBER(): TerminalNode {
		return this.getToken(GrammarParser.NUMBER, 0);
	}
	public DECIMAL_NUMBER(): TerminalNode {
		return this.getToken(GrammarParser.DECIMAL_NUMBER, 0);
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
