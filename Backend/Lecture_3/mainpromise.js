import fs from "fs/promises";

let a = await fs.writeFile("ankur.txt", "Ankur is amazing"); // --> can use await without async as we are inside module
let b = await fs.readFile("ankur.txt");
let c = await fs.appendFile("ankur.txt", "also very nice boy");

console.log(b.toString(), a);
