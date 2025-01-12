// Generated from Grammar.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ExpContext } from "./GrammarParser.js";
import { MContext } from "./GrammarParser.js";
import { TContext } from "./GrammarParser.js";
import { FContext } from "./GrammarParser.js";
import { BexpContext } from "./GrammarParser.js";
import { DefnContext } from "./GrammarParser.js";
import { ProgContext } from "./GrammarParser.js";
import { BlockContext } from "./GrammarParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class GrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GrammarParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.m`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitM?: (ctx: MContext) => Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT?: (ctx: TContext) => Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.f`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF?: (ctx: FContext) => Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.bexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBexp?: (ctx: BexpContext) => Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.defn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefn?: (ctx: DefnContext) => Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
}

