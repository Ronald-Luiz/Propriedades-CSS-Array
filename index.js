import readlineSync from "readline-sync";

const propriedade = [];
let inserir = "";

while (inserir != "sair") {
  propriedade.push(inserir);
  inserir = readlineSync
    .question("insira uma propriedade CSS:")
    .toLocaleLowerCase();
}

console.log((propriedade.sort().join("\n")));