import { CharStream, CommonTokenStream, Token } from "antlr4";
import GrammarLexer from "./antlr/generated/GrammarLexer";
import GrammarParser from "./antlr/generated/GrammarParser";
import { Compiler } from "./codegen";
import fs, { existsSync } from 'fs';
import {exec} from 'child_process'
import { promisify } from "util";
import { ThrowErrorListener } from "./antlr/ErrorListener";
import { type_env } from "./types";
import { error } from "console";

const executeCommand = promisify(exec)
const args = process.argv;
    if (args.length !== 3){
        throw new Error("Incorrect Usage")
    }
const file = args[2];



const generateWATFile = async (file: string) => {
    const fileContent:string  = fs.readFileSync(`./src/examples/${file}.fun`, 'utf-8')
    const input = new CharStream(fileContent)
    const lexer = new GrammarLexer (input)
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ThrowErrorListener<number>());
    const tokens = new CommonTokenStream(lexer)
    const parser = new GrammarParser(tokens)
    parser.removeErrorListeners();
    parser.addErrorListener(new ThrowErrorListener<Token>());
    const tree = parser.prog()
    const listener = new Compiler()
    const initialEnvironment: type_env = new Map()
    //Pre-existing functions
    initialEnvironment.set("skip",["Void"])
    initialEnvironment.set("print_string", ["Void", "String"])
    initialEnvironment.set("print_int", ["Void", "Int"])
    initialEnvironment.set("print_float", ["Void", "Double"])
    initialEnvironment.set("print_char", ["Void", "Int"])
    initialEnvironment.set("read", ["Int"])
    initialEnvironment.set("length",["Int", "String"])
    initialEnvironment.set("set_val_i32", ["Void", "Int[]", "Int", "Int"])
    initialEnvironment.set("set_val_f32", ["Void", "Double[]", "Int", "Double"])
    const code = listener.compile(tree,initialEnvironment)
    await fs.writeFile(`./src/wat/${file}.wat`,code, (error) => {if (error){ console.log(error)}})
}


/**  
 * Outputs given number to terminal
 * 
 * @param num - The number to ouput
 */
const outputNumber = (num: number) => {
  process.stdout.write(String(num))
}

/**  
 * Outputs character if valid charcode otherwise outputs a the number
 * 
 * @param charCode - The ASCII Value of a Character
 */
const outputChar = (charCode: number) => {
  if (charCode <= 255) { 
    process.stdout.write(String.fromCharCode(charCode)); 
  } 
  else {outputNumber(charCode)}
}






/**  
 * Imports functions and executes program
 * 
 * @param fileName - The file name of the program
 */
const execute = async (fileName: string, memory)  => {
  // Input and Output functions to import to WebAssembly Environment// WebAssembly Memory
    const importObject = {
      process: {
        //Outputs strings to console
        print_string: (offset, length) => {
          const arr = new Uint8Array(memory.buffer, offset, length)
          const string = new TextDecoder("utf8").decode(arr)
          process.stdout.write(string)
        },
        //Outputs integers to console
        print_int: (num) => {outputNumber(num)},
        //Outputs integers to consoles
        print_float: (num) => {outputNumber(num)},
        print_char: (charCode) => {outputChar(charCode)}
      },
    };
    const wasm = fs.readFileSync(`./src/wasm/${fileName}.wasm`);
    const function_imports = fs.readFileSync(`./src/wasm/functions.wasm`) // File that contains function imports
    await WebAssembly.instantiate(function_imports, {...importObject, js: {mem: memory}}).then( async (wasmModule) =>  {
      const exported_functions = wasmModule.instance.exports
      await WebAssembly.instantiate(wasm,{...importObject, functions: exported_functions, js: {mem: memory}}).then( async (module) => {
        const instance = module.instance.exports
        if (instance.main){
            const main = instance.main as CallableFunction
            main()
          }
        
      })
    });
}


const run = async (fileName: string) => {
    const memory = new WebAssembly.Memory({ initial: 10, maximum: 65536 }); 
    await execute(fileName, memory)
}

const runTimed = async (fileName: string) => {
    const startTime = performance.now()
    await run(fileName)
    const endTime = performance.now()
    console.log(`Time ${((endTime - startTime) / 1000).toExponential(3)}s`)
}

const runMain = async (file: string) => {
    try{
    console.log("Generating WAT");
    await generateWATFile(file);
    if (!fs.existsSync(`./src/wat/${file}.wat`)){
        throw new Error("WAT file not created")
    }
    const cmd: string = `wat2wasm ./src/wat/${file}.wat -o ./src/wasm/${file}.wasm`;
    console.log("Executing WAT2WASM:", cmd);
    await executeCommand(cmd);
    if (!fs.existsSync(`./src/wasm/${file}.wasm`)){
        throw new Error("WASM file not created")
    }
    console.log("Running File");   
    await run(file);
    }
    catch (error){
        console.log(error)
    }
}

runMain(file)