// Generated from Grammar.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ExpContext } from "./GrammarParser.js";
import { MContext } from "./GrammarParser.js";
import { TContext } from "./GrammarParser.js";
import { FContext } from "./GrammarParser.js";
import { BexpContext } from "./GrammarParser.js";
import { DefnContext } from "./GrammarParser.js";
import { ProgContext } from "./GrammarParser.js";
import { BlockContext } from "./GrammarParser.js";
import { ArgContext } from "./GrammarParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GrammarParser`.
 */
export default class GrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `GrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;
	/**
	 * Enter a parse tree produced by `GrammarParser.m`.
	 * @param ctx the parse tree
	 */
	enterM?: (ctx: MContext) => void;
	/**
	 * Exit a parse tree produced by `GrammarParser.m`.
	 * @param ctx the parse tree
	 */
	exitM?: (ctx: MContext) => void;
	/**
	 * Enter a parse tree produced by `GrammarParser.t`.
	 * @param ctx the parse tree
	 */
	enterT?: (ctx: TContext) => void;
	/**
	 * Exit a parse tree produced by `GrammarParser.t`.
	 * @param ctx the parse tree
	 */
	exitT?: (ctx: TContext) => void;
	/**
	 * Enter a parse tree produced by `GrammarParser.f`.
	 * @param ctx the parse tree
	 */
	enterF?: (ctx: FContext) => void;
	/**
	 * Exit a parse tree produced by `GrammarParser.f`.
	 * @param ctx the parse tree
	 */
	exitF?: (ctx: FContext) => void;
	/**
	 * Enter a parse tree produced by `GrammarParser.bexp`.
	 * @param ctx the parse tree
	 */
	enterBexp?: (ctx: BexpContext) => void;
	/**
	 * Exit a parse tree produced by `GrammarParser.bexp`.
	 * @param ctx the parse tree
	 */
	exitBexp?: (ctx: BexpContext) => void;
	/**
	 * Enter a parse tree produced by `GrammarParser.defn`.
	 * @param ctx the parse tree
	 */
	enterDefn?: (ctx: DefnContext) => void;
	/**
	 * Exit a parse tree produced by `GrammarParser.defn`.
	 * @param ctx the parse tree
	 */
	exitDefn?: (ctx: DefnContext) => void;
	/**
	 * Enter a parse tree produced by `GrammarParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `GrammarParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `GrammarParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `GrammarParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `GrammarParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `GrammarParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;
}

