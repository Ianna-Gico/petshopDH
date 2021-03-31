//Desestruturação
let pessoa = {
    nome: 'Ianna',
    idade: 40,
    profissao: 'Dev',
    contato: '8199999-9999',
    habilidades: ['node.js', 'mysql', 'javascript']
}

let {nome, contato} = pessoa;

console.log(`${nome} - ${contato}`);