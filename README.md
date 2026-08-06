Atividades sobre java 

Esse repositório separa exemplos de linguagem java exemplos gerado pelo próprio aluno e com legendas em ia para melhor compreenção


let compras = [];
let total = 0;

// Leitura de 7 valores
for (let i = 0; i < 7; i++) {
    let valor = parseFloat(prompt(`Digite o valor da compra ${i + 1}:`));
    compras.push(valor);
}

// Soma dos valores
for (let i = 0; i < compras.length; i++) {
    total += compras[i];
}

console.log(`Total das compras: R$ ${total.toFixed(2)}`);

if (total > 300) {
    total = total * 0.90;
    console.log(`Desconto de 10% aplicado.`);
    console.log(`Total com desconto: R$ ${total.toFixed(2)}`);
}
2) Média, temperatura máxima e mínima da semana
let temperaturas = [];
let soma = 0;

// Leitura das 7 temperaturas
for (let i = 0; i < 7; i++) {
    let temp = parseFloat(prompt(`Digite a temperatura do dia ${i + 1}:`));
    temperaturas.push(temp);
}

let maior = temperaturas[0];
let menor = temperaturas[0];

// Cálculos
for (let i = 0; i < temperaturas.length; i++) {
    soma += temperaturas[i];

    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

let media = soma / temperaturas.length;

console.log(`Média: ${media.toFixed(2)}°C`);
console.log(`Maior temperatura: ${maior}°C`);
console.log(`Menor temperatura: ${menor}°C`);
3) Fila de clientes (push e shift)
let fila = [];

// Adicionando clientes
for (let i = 0; i < 5; i++) {
    let cliente = prompt(`Digite o nome do cliente ${i + 1}:`);
    fila.push(cliente);
}

console.log("Fila inicial:");
console.log(fila);

// Atendimento
while (fila.length > 0) {
    let atendido = fila.shift();
    console.log(`O cliente ${atendido} foi atendido.`);
}

console.log("Fila após os atendimentos:");
console.log(fila);
4) Lista de compras do mercado
let lista = [];

// Cadastro dos produtos
for (let i = 0; i < 5; i++) {
    let produto = prompt(`Digite o produto ${i + 1}:`);
    lista.push(produto.toLowerCase());
}

// Consulta dos produtos
while (true) {
    let busca = prompt("Digite um produto para procurar ou 'sair' para encerrar:");

    if (busca.toLowerCase() === "sair") {
        console.log("Programa encerrado.");
        break;
    }

    if (lista.includes(busca.toLowerCase())) {
        console.log(`O produto "${busca}" está na lista.`);
    } else {
        console.log(`O produto "${busca}" NÃO está na lista.`);
    }
}let compras = [];
let total = 0;

// Leitura de 7 valores
for (let i = 0; i < 7; i++) {
    let valor = parseFloat(prompt(`Digite o valor da compra ${i + 1}:`));
    compras.push(valor);
}

// Soma dos valores
for (let i = 0; i < compras.length; i++) {
    total += compras[i];
}

console.log(`Total das compras: R$ ${total.toFixed(2)}`);

if (total > 300) {
    total = total * 0.90;
    console.log(`Desconto de 10% aplicado.`);
    console.log(`Total com desconto: R$ ${total.toFixed(2)}`);
}
2) Média, temperatura máxima e mínima da semana
let temperaturas = [];
let soma = 0;

// Leitura das 7 temperaturas
for (let i = 0; i < 7; i++) {
    let temp = parseFloat(prompt(`Digite a temperatura do dia ${i + 1}:`));
    temperaturas.push(temp);
}

let maior = temperaturas[0];
let menor = temperaturas[0];

// Cálculos
for (let i = 0; i < temperaturas.length; i++) {
    soma += temperaturas[i];

    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

let media = soma / temperaturas.length;

console.log(`Média: ${media.toFixed(2)}°C`);
console.log(`Maior temperatura: ${maior}°C`);
console.log(`Menor temperatura: ${menor}°C`);
3) Fila de clientes (push e shift)
let fila = [];

// Adicionando clientes
for (let i = 0; i < 5; i++) {
    let cliente = prompt(`Digite o nome do cliente ${i + 1}:`);
    fila.push(cliente);
}

console.log("Fila inicial:");
console.log(fila);

// Atendimento
while (fila.length > 0) {
    let atendido = fila.shift();
    console.log(`O cliente ${atendido} foi atendido.`);
}

console.log("Fila após os atendimentos:");
console.log(fila);
4) Lista de compras do mercado
let lista = [];

// Cadastro dos produtos
for (let i = 0; i < 5; i++) {
    let produto = prompt(`Digite o produto ${i + 1}:`);
    lista.push(produto.toLowerCase());
}

// Consulta dos produtos
while (true) {
    let busca = prompt("Digite um produto para procurar ou 'sair' para encerrar:");

    if (busca.toLowerCase() === "sair") {
        console.log("Programa encerrado.");
        break;
    }

    if (lista.includes(busca.toLowerCase())) {
        console.log(`O produto "${busca}" está na lista.`);
    } else {
        console.log(`O produto "${busca}" NÃO está na lista.`);
    }
}
