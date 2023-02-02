// Lista de propriedades de CSS
let listaPropriedades = [];

// Prompt para receber as propriedades
let propriedade = "";



// Laço que vai receber propriedades até que a pessoa digite "SAIR"
while (propriedade.toLowerCase() !== "sair") {
  propriedade = prompt("Digite uma propriedade de CSS ou digite 'SAIR' para sair: ");

  // Adicionar propriedade na lista, se a pessoa não digitar "SAIR"
  if (propriedade.toLowerCase() !== "sair") {
    listaPropriedades.push(propriedade);
  }
}

// Ordenar a lista de propriedades
listaPropriedades.sort();

// Imprimir lista ordenada no terminal
console.log("Lista de propriedades ordenadas: ");
for (let i = 0; i < listaPropriedades.length; i++) {
  console.log(listaPropriedades[i]);
}
