const nome = "Marcelo Eltz";
let nome2 = "";
let pessoaDefault = {
  nome: "Marcelo Eltz",
  idade: "33",
  trabalho: "Programador",
};

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];
let pessoas = [
  {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador",
  },
  {
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI Designer",
  },
];

console.log("Valor inicial");
console.log(nome);

nome2 = "Pedro Silva";

console.log("Valor alterado:");
console.log(nome2);

function alterarnome() {
  nome2 = "Maria Silva";
  console.log("Valor alterado:");
  console.log(nome2);
}

function recebeEalteraNome(novoNome) {
  nome2 = novoNome;
  console.log("valor alterado recebendo um nome:");
  console.log(nome2);
}

function imprimirPessoa(pessoa) {
  console.log("Nome:");
  console.log(pessoa.nome);

  console.log("Idade:");
  console.log(pessoa.idade);

  console.log("Trabalho:");
  console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
}

function imprimirPessoas() {
  console.log("--------imprimir Pessoas--------");
  pessoas.forEach((item) => {
    console.log("Nome:");
    console.log(item.nome);

    console.log("Idade:");
    console.log(item.idade);

    console.log("Trabalho:");
    console.log(item.trabalho);
  });
}

imprimirPessoas();

adicionarPessoa({
  nome: "Pedro Silva",
  idade: "28",
  trabalho: "Porteiro",
});

console.log(pessoas);
//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");
//alterarnome();
