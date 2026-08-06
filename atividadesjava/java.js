/**Exercícios Arrays
 Faça a leitura de 7 valores reais e armazene em um vetor. Use um laço de repetição para somar todos os valores do array e calcular o total das compras. Se o valor total for maior que R$ 300,00, aplique um
desconto de 10% no total final e exiba a mensagem com o valor
recalculado.
 Crie um array e faça a leitura com as temperaturas registradas em uma semana. Posteriormente, imprima no console a média de temperatura
daquela semana e a temperatura máxima e mínima.
 Em uma lanchonete ou banco, clientes entram no final da fila e são
atendidos a partir do início da fila. Crie um vetor e adicione 5 clientes
na fila, um por vez (push). Posteriormente, crie um laço que repetição
que percorra cada cliente, REMOVA do vetor (shift) e emita a
mensagem “O cliente xxxx foi atendido”. Ao final, confira como o vetor
ficou no console.
 Faça um algoritmo que peça como entrada uma lista de 5 produtos que o usuário deve comprar no mercado. Em seguida, faça uma repetição
que peça ao usuário para digitar o nome do produto e verifique se esse produto está ou não na lista (Emita uma mensagem no console com
essa informação). Caso o usuário digite “sair” o programa deve
encerrar.

Crie um objeto chamado perfilInstagram com as seguintes
propriedades: username, bio, seguidores (um número) e estaAtivo (0
ou 1).
 Exiba no console uma mensagem formatada utilizando template literals:
 O usuário @[username] possui [seguidores] seguidores.
 Em seguida, simule que o usuário ganhou 150 novos seguidores: atualize o valor da propriedade seguidores e exiba o objeto atualizado no console com um novo
log.
 Crie um objeto pet com as propriedades nome, especie, raca e idade.
 Faça uma função ou trecho de código que adicione uma nova propriedade
vacinado (boolean) ao objeto pet após a sua criação.
 Remova a propriedade raca do objeto utilizando o operador delete.
 Exiba o objeto final no console.
 Crie um objeto chamado celular com as propriedades: marca, modelo,
nivelBateria (ex: 85), espacoLivreGB (ex: 32)
 Utilize o for...in para ler os valores e substituir os valores atuais do objeto.
 Utilize outro for...in para imprimir no console os dados atualizados.
INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO TRIÂNGULO MINEIRO 24
Exercícios sobre objetos
 Crie um objeto notasAluno onde cada chave é o
nome de uma disciplina e o valor é a nota obtida no
trimestre (ex: { matematica: 8.5, portugues: 7.0,
historia: 9.0, biologia: 6.5 }).
 Escreva um algoritmo utilizando for...in que percorra todas
as disciplinas, calcule e exiba a média das notas do aluno.
 Se a média final for maior ou igual a 7.0, exiba no console
“Está indo bem"; caso contrário, “Bora estudar!“
 Crie um array chamado playlist contendo 3 objetos.
Cada objeto deve representar uma música e conter
as propriedades: titulo, artista e duracaoSegundos.
 Adicione uma 4ª música ao final da lista utilizando o método
.push().
 Utilizando a estrutura for...of, percorra a playlist e imprima no console apenas as músicas que possuem duração superior a 180 segundos (3 minutos).
INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO TRIÂNGULO MINEIRO 25
Exercícios sobre objetos
 Crie um array de objetos chamado
bibliotecaJogos, onde cada jogo possui titulo,
genero, preco e zerado (boolean). Adicione
pelo menos 4 jogos.
 Escreva um laço de repetição para encontrar e
exibir:
 O título de todos os jogos que o aluno já zerou(zerado === true).
 O valor total gasto na biblioteca (a soma do precode todos os jogos).
INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO TRIÂNGULO MINEIRO 26
Exercícios sobre objetos
 Crie um array de objetos chamado cardapiocontendo produtos da cantina. Cada objeto
deve ter: id, nome, preco e categoria (ex:
"Salgado", "Bebida", "Doce").
 Agora crie um menu interativo que tenha as
seguintes opções:
 Inserir um novo produto
 Listar todos os produtos
 Buscar por preço igual ou inferior a
 Buscar pelo nome
 Fechar programa**/



/**let compras = [];
let total = 0;

// Leitura dos 7 valores
for (let i = 0; i < 7; i++) {
    compras[i] = Number(prompt("Digite o valor da compra " + (i + 1) + ":"));
}

// Soma dos valores
for (let i = 0; i < compras.length; i++) {
    total += compras[i]; // total = total + COMPRAS[i]
}

// Aplica desconto
if (total > 300) {
    total = total * 0.9;
    console.log("Desconto de 10% aplicado!");
}

console.log("Valor total: R$ " + total.toFixed(2));**/

/**let temp = [];
let total = 0 
let res = 0

for (let i = 0; i < 7; i++) {
    temp[i] = Number(prompt("Digite o valor da temperatura nesse dia da semana  " + (i + 1) + ":"));
}
for (let i = 0; i < temp.length; i++) {
    total += temp[i]; 
}
res = total / 7
console.log("A média de temperaturas dessa semana é igual a " + res.toFixed(2)) **/

/** 

// ===== FILA DE ATENDIMENTO =====

// Criamos um array vazio que vai representar a fila
let fila = [];

// push() adiciona o cliente no FINAL do array (final da fila)
fila.push("João");
fila.push("Maria");
fila.push("Carlos");
fila.push("Ana");
fila.push("Pedro");

// Mostra a fila completa antes de iniciar o atendimento
console.log("Fila inicial:", fila);

// Laço de repetição enquanto houver clientes na fila
// fila.length > 0 garante que o loop só continua se existir alguém
while (fila.length > 0) {
    // shift() REMOVE o primeiro elemento do array (início da fila)
    // e retorna esse elemento removido, guardando na variável clienteAtendido
    let clienteAtendido = fila.shift();

    // Template literal para mostrar a mensagem de atendimento
    console.log(`O cliente ${clienteAtendido} foi atendido`);
}

// Depois do loop, a fila deve estar vazia
console.log("Fila final:", fila); // Esperado: []**/

/**
 
 

// ===== LISTA DE COMPRAS =====

// Array com os 5 produtos que o usuário deve comprar
// (poderia ser preenchido via prompt também, mas aqui fixamos para o exemplo)
let listaCompras = [];

// Loop para capturar os 5 produtos digitados pelo usuário
for (let i = 0; i < 5; i++) {
    // prompt() abre uma caixa de diálogo pedindo o nome do produto
    let produto = prompt(`Digite o produto ${i + 1} da sua lista de compras:`);
    listaCompras.push(produto); // adiciona o produto digitado no array
}

console.log("Lista de compras criada:", listaCompras);

// Loop infinito controlado por condição de saída ("sair")
while (true) {
    // Pede ao usuário o nome do produto a verificar
    let entrada = prompt("Digite o nome do produto para verificar (ou 'sair' para encerrar):");

    // Verifica se o usuário quer encerrar o programa
    // toLowerCase() evita problema de "Sair", "SAIR", "sair" etc.
    if (entrada.toLowerCase() === "sair") {
        console.log("Programa encerrado.");
        break; // sai do loop
    }

    // includes() verifica se o item existe dentro do array
    if (listaCompras.includes(entrada)) {
        console.log(`O produto "${entrada}" ESTÁ na lista de compras.`);
    } else {
        console.log(`O produto "${entrada}" NÃO está na lista de compras.`);
    }
}

// ===== PERFIL INSTAGRAM =====

// Criação do objeto com suas propriedades
let perfilInstagram = {
    username: "joaosilva",
    bio: "Apaixonado por tecnologia 🚀",
    seguidores: 1200,
    estaAtivo: 1 // 1 = ativo, 0 = inativo
};

// Template literal usando ${} para inserir valores das propriedades
console.log(`O usuário @${perfilInstagram.username} possui ${perfilInstagram.seguidores} seguidores.`);

// Simulando o ganho de 150 novos seguidores
// Atualiza a propriedade somando o valor atual + 150
perfilInstagram.seguidores = perfilInstagram.seguidores + 150;
// (poderia também ser escrito como: perfilInstagram.seguidores += 150;)

// Exibe o objeto inteiro atualizado
console.log("Perfil atualizado:", perfilInstagram);

// ===== OBJETO PET =====

// Criação do objeto com propriedades iniciais
let pet = {
    nome: "Rex",
    especie: "Cachorro",
    raca: "Labrador",
    idade: 3
};

console.log("Pet recém-criado:", pet);

// Adicionando uma nova propriedade dinamicamente
// Em JS, basta atribuir um valor a uma propriedade que ainda não existe
pet.vacinado = true;

console.log("Pet após adicionar 'vacinado':", pet);

// Removendo a propriedade 'raca' usando o operador delete
delete pet.raca;

// Exibindo o objeto final
console.log("Pet final (sem 'raca'):", pet);

Pontos-chave para revisão:

Objetos em JS são dinâmicos: propriedades podem ser adicionadas depois da criação
delete objeto.propriedade remove permanentemente a propriedade do objeto
5️⃣ Objeto celular (for...in para ler e atualizar)
// ===== OBJETO CELULAR =====

// Criação do objeto inicial
let celular = {
    marca: "Samsung",
    modelo: "Galaxy S21",
    nivelBateria: 85,
    espacoLivreGB: 32
};

console.log("Celular antes da atualização:", celular);

// PRIMEIRO for...in: percorre cada propriedade (chave) do objeto
// e pede ao usuário um novo valor, substituindo o valor atual
for (let chave in celular) {
    // prompt() pede o novo valor mostrando o valor atual como referência
    let novoValor = prompt(`Digite o novo valor para "${chave}" (valor atual: ${celular[chave]}):`);

    // Substitui o valor antigo pelo novo valor digitado
    // Usamos notação de colchetes [] pois "chave" é uma variável, não um nome fixo
    celular[chave] = novoValor;
}

console.log("Celular após atualização:", celular);

// SEGUNDO for...in: percorre novamente para IMPRIMIR os dados atualizados
for (let chave in celular) {
    console.log(`${chave}: ${celular[chave]}`);
}

Pontos-chave para revisão:

for (let chave in objeto) percorre todas as chaves (nomes das propriedades)
objeto[chave] (notação de colchetes) é usado quando o nome da propriedade está em uma variável
Diferente de for...of, que percorre valores de arrays/iteráveis
6️⃣ Objeto notasAluno (média com for...in)
// ===== NOTAS DO ALUNO =====

// Objeto onde cada chave é uma disciplina e o valor é a nota
let notasAluno = {
    matematica: 8.5,
    portugues: 7.0,
    historia: 9.0,
    biologia: 6.5
};

let somaNotas = 0;   // acumulador da soma das notas
let quantidade = 0;  // contador de quantas disciplinas existem

// for...in percorre cada disciplina (chave) do objeto
for (let disciplina in notasAluno) {
    console.log(`${disciplina}: ${notasAluno[disciplina]}`);

    somaNotas += notasAluno[disciplina]; // soma a nota atual
    quantidade++; // incrementa o contador de disciplinas
}

// Calcula a média dividindo a soma total pela quantidade de disciplinas
let media = somaNotas / quantidade;

console.log(`Média final: ${media.toFixed(2)}`); // toFixed(2) formata com 2 casas decimais

// Verifica a condição da média para exibir a mensagem correspondente
if (media >= 7.0) {
    console.log("Está indo bem");
} else {
    console.log("Bora estudar!");
}

Pontos-chave para revisão:

Acumuladores (somaNotas, quantidade) são variáveis que somam valores durante o loop
toFixed(2) arredonda/formata número com 2 casas decimais (retorna string)
Estrutura clássica de média: soma total ÷ quantidade de itens
7️⃣ Playlist (array de objetos + push + for...of)
// ===== PLAYLIST DE MÚSICAS =====

// Array contendo 3 objetos (músicas)
let playlist = [
    { titulo: "Música A", artista: "Artista 1", duracaoSegundos: 200 },
    { titulo: "Música B", artista: "Artista 2", duracaoSegundos: 150 },
    { titulo: "Música C", artista: "Artista 3", duracaoSegundos: 190 }
];

// Adicionando a 4ª música com push()
playlist.push({ titulo: "Música D", artista: "Artista 4", duracaoSegundos: 210 });

console.log("Playlist completa:", playlist);

console.log("\nMúsicas com duração superior a 180 segundos:");

// for...of percorre os VALORES do array (cada objeto música)
for (let musica of playlist) {
    // Verifica se a duração da música atual é maior que 180 segundos
    if (musica.duracaoSegundos > 180) {
        console.log(`${musica.titulo} - ${musica.artista} (${musica.duracaoSegundos}s)`);
    }
}

Pontos-chave para revisão:

for...of é ideal para percorrer arrays, retornando cada elemento diretamente (não o índice)
push({...}) adiciona um objeto literal diretamente ao array
Filtragem manual com if dentro do loop (poderia também usar .filter())
8️⃣ Biblioteca de Jogos (zerados + soma total)
// ===== BIBLIOTECA DE JOGOS =====

let bibliotecaJogos = [
    { titulo: "The Witcher 3",  genero: "RPG",      preco: 79.90, zerado: true  },
    { titulo: "Hollow Knight",  genero: "Plataforma", preco: 39.90, zerado: false },
    { titulo: "God of War",     genero: "Ação",     preco: 99.90, zerado: true  },
    { titulo: "Stardew Valley", genero: "Simulação", preco: 29.90, zerado: false }
];

let valorTotal = 0; // acumulador do valor gasto

console.log("Jogos já zerados:");

// for clássico percorrendo o array por índice
for (let i = 0; i < bibliotecaJogos.length; i++) {
    let jogo = bibliotecaJogos[i]; // pega o objeto jogo na posição i

    // Verifica se o jogo já foi zerado
    if (jogo.zerado === true) {
        console.log(`- ${jogo.titulo}`);
    }

    // Soma o preço do jogo atual ao valor total (independente de zerado ou não)
    valorTotal += jogo.preco;
}

// toFixed(2) formata o valor final como moeda com 2 casas decimais
console.log(`\nValor total gasto na biblioteca: R$ ${valorTotal.toFixed(2)}`);

Pontos-chave para revisão:

for clássico permite acesso ao índice i, útil quando se precisa da posição
Comparar booleanos: jogo.zerado === true (ou apenas if (jogo.zerado))
Soma acumulada dentro do mesmo loop que filtra os zerados (uma única passada — eficiente)
9️⃣ Cardápio da Cantina (Menu Interativo)
// ===== CARDÁPIO DA CANTINA - MENU INTERATIVO =====

// Array de objetos representando o cardápio inicial
let cardapio = [
    { id: 1, nome: "Coxinha",     preco: 6.50,  categoria: "Salgado" },
    { id: 2, nome: "Refrigerante", preco: 5.00, categoria: "Bebida" },
    { id: 3, nome: "Brigadeiro",  preco: 3.50,  categoria: "Doce" },
    { id: 4, nome: "Pão de Queijo", preco: 4.00, categoria: "Salgado" }
];

// Variável de controle para o loop do menu
let continuar = true;

// Loop principal do menu - repete até o usuário escolher "Fechar programa"
while (continuar) {
    // Monta o menu de opções usando template literal com \n para quebra de linha
    let opcao = prompt(
        `===== MENU CANTINA =====\n` +
        `1 - Inserir novo produto\n` +
        `2 - Listar todos os produtos\n` +
        `3 - Buscar por preço igual ou inferior a\n` +
        `4 - Buscar pelo nome\n` +
        `5 - Fechar programa\n` +
        `Digite o número da opção desejada:`
    );

    // switch para tratar cada opção do menu
    switch (opcao) {

        case "1": {
            // ----- INSERIR NOVO PRODUTO -----
            let nome = prompt("Nome do produto:");
            let preco = parseFloat(prompt("Preço do produto:")); // converte texto para número decimal
            let categoria = prompt("Categoria do produto (Salgado, Bebida, Doce):");

            // Gera um novo ID baseado no tamanho atual do array + 1
            let novoProduto = {
                id: cardapio.length + 1,
                nome: nome,
                preco: preco,
                categoria: categoria
            };

            cardapio.push(novoProduto); // adiciona o novo produto ao array
            console.log("Produto adicionado com sucesso!", novoProduto);
            break;
        }

        case "2": {
            // ----- LISTAR TODOS OS PRODUTOS -----
            console.log("===== CARDÁPIO COMPLETO =====");
            for (let produto of cardapio) {
                console.log(
                    `ID: ${produto.id} | Nome: ${produto.nome} | ` +
                    `Preço: R$ ${produto.preco.toFixed(2)} | Categoria: ${produto.categoria}`
                );
            }
            break;
        }

        case "3": {
            // ----- BUSCAR POR PREÇO IGUAL OU INFERIOR A X -----
            let precoLimite = parseFloat(prompt("Digite o preço máximo para busca:"));

            // filter() retorna um NOVO array apenas com os itens que atendem à condição
            let resultado = cardapio.filter(produto => produto.preco <= precoLimite);

            console.log(`Produtos com preço até R$ ${precoLimite.toFixed(2)}:`);
            if (resultado.length === 0) {
                console.log("Nenhum produto encontrado.");
            } else {
                for (let produto of resultado) {
                    console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
                }
            }
            break;
        }

        case "4": {
            // ----- BUSCAR PELO NOME -----
            let nomeBusca = prompt("Digite o nome do produto para buscar:");

            // find() retorna o PRIMEIRO elemento que satisfaz a condição (ou undefined)
            // toLowerCase() em ambos os lados evita problema de maiúsculas/minúsculas
            let produtoEncontrado = cardapio.find(
                produto => produto.nome.toLowerCase() === nomeBusca.toLowerCase()
            );

            if (produtoEncontrado) {
                console.log("Produto encontrado:", produtoEncontrado);
            } else {
                console.log("Produto não encontrado no cardápio.");
            }
            break;
        }

        case "5": {
            // ----- FECHAR PROGRAMA -----
            console.log("Encerrando o programa. Até logo!");
            continuar = false; // altera a variável de controle, encerrando o while
            break;
        }

        default: {
            // Caso o usuário digite uma opção inválida
            console.log("Opção inválida! Tente novamente.");
        }
    }
}**/
