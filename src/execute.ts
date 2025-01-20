import { exec } from 'child_process';
import fs from 'fs';

const args = process.argv;
if (args.length !== 3){
    throw new Error("Incorrect Usage")
}
const file = args[2];

const importObject = {
    console: {
      log: (value) => console.log(value),
    },
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