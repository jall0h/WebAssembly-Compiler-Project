// Generated from Grammar.g4 by ANTLR 4.13.2

import {ParseTree, ParseTreeVisitor} from 'antlr4';


import { ArgContext, ExpContext } from "./GrammarParser.js";
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
	// visit(tree: ParseTree, ts: Map<String,String>): Result;

	visit_node(tree: ParseTree, ts: Map<String,String>): Result {
		if (tree instanceof ExpContext){
			return this.visitExp(tree,ts)
		}
		if (tree instanceof MContext){
			return this.visitM(tree,ts)
		}
		if (tree instanceof TContext){
			return this.visitT(tree,ts)
		}
		if (tree instanceof FContext){
			return this.visitF(tree,ts)
		}
		if (tree instanceof BexpContext){
			return this.visitBexp(tree,ts)
		}
		if (tree instanceof DefnContext){
			return this.visitDefn(tree,ts)
		}
		if (tree instanceof ProgContext){
			return this.visitProg(tree,ts)
		}
		if (tree instanceof BlockContext){
			return this.visitBlock(tree,ts)
		}
		if (tree instanceof ArgContext){
			return this.visitArg(tree,ts)
		}
	}
	/**
	 * Visit a parse tree produced by `GrammarParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?(ctx: ExpContext, ts?: Map<String,String>):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.m`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitM?(ctx: MContext, ts?: Map<String,String>):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT?(ctx: TContext, ts?: Map<String,String>):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.f`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF?(ctx: FContext, ts?: Map<String,String>):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.bexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBexp?(ctx: BexpContext, ts?: Map<String,String>):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.defn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefn?(ctx: DefnContext, ts?: Map<String,String>):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?(ctx: ProgContext, ts?: Map<String,String>):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?(ctx: BlockContext, ts?: Map<String,String>):Result;

	visitArg?(ctx: ArgContext, ts?: Map<String,String>):Result;


}

