const moment = require('moment');
const fs = require('fs');
const nomePetshop = "PETSHOP DH";
bancoDados = require('./bancoDados');

let pets = [
    {
        nome: 'Snoopy',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Beagle',
        peso: 3,
        tutor: 'Charlie Brown',
        contato: '(81) 99999-9999',
        vacinado: true,
        servicos: []
    },
    {
        nome: 'Biro-Biro',
        tipo: 'cachorro',
        idade: 10,
        raca: 'Vira-lata',
        peso: 5,
        tutor: 'Jojô',
        contato: '(83) 99999-9999',
        vacinado: false,
        servicos: []
    },
    {
        nome: 'Yani',
        tipo: 'gato',
        idade: 4,
        raca: 'Rosa',
        peso: 2,
        tutor: 'Pucca',
        contato: '(11) 99999-9999',
        vacinado: true,
        servicos: []
    }
];

const vacinarPet = (pet) => {
    if (pet.vacinado == false) {
        pet.vacinado = true;
        console.log(`O pet ${pet.nome} foi vacinado com sucesso!`)
    } else {
        console.log(`Ops! O pet ${pet.nome} já está vacinado!`)
    }
}

const campanhaVacina = () => {
    var soma = 0;
    for (let pet of pets) {
        if (pet.vacinado == false) {
            pet.vacinado == true;
            soma++;
        }
    }
    console.log(`${soma} pet(s) foi(ram) vacinado(s) nesta campanha!`)
}

const adicionarPet = (pet) => {
    pets.push(pet);
}

const listarPets = () => {
    for (var pet of pets) {
        var situacao = (pet.vacinado)? 'Vacinado': 'Não vacinado!'  
        console.log(`${pets.indexOf(pet)}. ${pet.nome}, raça: ${pet.raca}, serviços: ${JSON.stringify(pet.servicos)}, ${situacao}`);
    }
}

const prestarServico = (pet, servico, data) => {
    pet.servicos.push({
        servico: servico,
        data: data
    });
}

const atenderCliente = (pet,servico) =>{
    console.log(`Olá ${pet.nome}!`)
    servico(pet);
    console.log(`Prontinho, ${pet.nome}! Até a próxima!`)
    let servicosRealizados = pet.servicos;
    let ultimoServico = servicosRealizados[servicosRealizados.length-1];
    let ultimaData = ultimoServico.data;
    console.log(`Serviço prestado em: ${ultimaData}`);
}

const darBanhoPet = (pet) => {
    prestarServico(pet, 'banho', moment().format('L'));
    console.log(`${pet.nome} está de banho tomado!`);
}

const tosarPet = (pet) => {
    prestarServico(pet, 'tosa', moment().format('L'));
    console.log(`${pet.nome} está com o cabelinho na régua!`);
}

const apararUnhasPet = (pet) => {
    prestarServico(pet, 'corte de unhas', moment().format('L'));
    console.log(`${pet.nome} está de unhas aparadas!`);
}

atenderCliente(pets[1],tosarPet);



adicionarPet({
    nome: 'Jk',
    tipo: 'cachorro',
    idade: 5,
    raca: 'Vira-lata',
    peso: 3,
    tutor: 'Doug',
    contato: '(81) 98145-7456',
    vacinado: false,
    servicos: []
});
vacinarPet(pets[0]);
vacinarPet(pets[1]);
campanhaVacina();
listarPets();
darBanhoPet(pets[2]);
darBanhoPet(pets[3]);
listarPets();
/*tosarPet(pets[2]);
apararUnhasPet(pets[3]);
listarPets();
prestarServico(pets[0], 'banho', moment().format('L'));
listarPets();*/
//console.log(JSON.stringify(pets[1]));
//console.log(pets[1]);

