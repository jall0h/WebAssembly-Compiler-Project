import { CharStream, CommonTokenStream, Token } from "antlr4";
import GrammarLexer from "./antlr/generated/GrammarLexer";
import GrammarParser, { ProgContext } from "./antlr/generated/GrammarParser";
import { CodeGenerator } from "./codegen";
import fs, { existsSync } from 'fs';
import {exec} from 'child_process'
import { promisify } from "util";
import { ThrowErrorListener } from "./antlr/ErrorListener";
import { type_env } from "./types";
import { error } from "console";
import { Compiler } from "./compiler";




const executeCommand = promisify(exec)
const args = process.argv;
    if (args.length !== 3){
        throw new Error("Incorrect Usage")
    }
const file = args[2];






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


// Get WAT (text format) file and convert to WASM file (binary format)
const generateWasm = async (file: string) => {
  try{
     console.log("Generating WAT");
     const compiler = new Compiler()
     await compiler.compile(file);
     if (!fs.existsSync(`./src/wat/${file}.wat`)){
         throw new Error("WAT file not created")
     }
     const cmd: string = `wat2wasm ./src/wat/${file}.wat -o ./src/wasm/${file}.wasm`;
     console.log("Executing WAT2WASM:", cmd);
     await executeCommand(cmd);
     if (!fs.existsSync(`./src/wasm/${file}.wasm`)){
         throw new Error("WASM file not created")
     }
 }
 catch (error){
   console.log(error)
 }
 }

// Execute Program with new memory import
const run = async (fileName: string) => {
    const memory = new WebAssembly.Memory({ initial: 10, maximum: 65536 }); 
    await execute(fileName, memory)
}

// Runs program 10 times an gets average time
const runTimed = async (fileName: string) => {
  const compiler = new Compiler()
  await compiler.compile(fileName);
  let total = 0;
  for(let i = 0; i < 10; i++){
    const startTime = performance.now()
    await run(fileName)
    const endTime = performance.now()
    total += (endTime - startTime) / 1000
  }
  console.log(`Time ${(total / 10).toExponential(3)}s`)
}

// Runs program
const runMain = async (file: string) => {
  await generateWasm(file)
  console.log("Running File");   
  await run(file);
    
}

runTimed(file)