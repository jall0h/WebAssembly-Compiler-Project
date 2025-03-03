import { exec } from 'child_process';
import fs from 'fs';
import { measureMemory } from 'vm';

const args = process.argv;
if (args.length !== 3){
    throw new Error("Incorrect Usage")
}
const file = args[2];
const memory = new WebAssembly.Memory({ initial: 2, maximum: 10 });
const importObject = {
    console: {
      log: (value) => console.log(value),
    },
    process: {
      print_string: (offset, length) => {
        const arr = new Uint8Array(memory.buffer, offset, length)
        const string = new TextDecoder("utf8").decode(arr)
        process.stdout.write(string)
      }
    },
    js: {mem: memory},
  };
  
const execute = async ()  => {
    const wasm = fs.readFileSync(`./src/wasm/${file}.wasm`);
    const instance = await WebAssembly.instantiate(wasm, importObject);
    if (instance.instance.exports.main){
        const main = instance.instance.exports.main as CallableFunction
        main()
    }
}

execute()