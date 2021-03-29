const moment = require('moment');
let fs = require('fs');
const nomePetshop = "PETSHOP DH";
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDados, null, 2);

    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

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
    for (let pet of bancoDados.pets) {
        if (pet.vacinado == false) {
            pet.vacinado == true;
            soma++;
        }
    }
    console.log(`${soma} pet(s) foi(ram) vacinado(s) nesta campanha!`)
}

/*const adicionarPet = (pet) => {
    bancoDados.pets.push(pet);
}*/

adicionarPet = novoPet =>{
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`)
}

const listarPets = () => {
    for (var pet of bancoDados.pets) {
        var situacao = (pet.vacinado)? 'Vacinado': 'Não vacinado!'  
        console.log(`${bancoDados.pets.indexOf(pet)}. ${pet.nome}, raça: ${pet.raca}, serviços: ${JSON.stringify(pet.servicos)}, ${situacao}`);
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

/*atenderCliente(bancoDados.pets[1],tosarPet);
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

adicionarPet({
    nome: 'Sansão',
    tipo: 'cachorro',
    idade: 5,
    raca: 'Vira-lata',
    peso: 3,
    tutor: 'Doug',
    contato: '(81) 98145-7456',
    vacinado: false,
    servicos: []
});

adicionarPet({
    nome: 'Tom',
    tipo: 'Gato',
    idade: 5,
    raca: 'Cinza',
    peso: 3,
    tutor: 'Chica',
    contato: '(81) 94444-4444',
    vacinado: true,
    servicos: []
});

vacinarPet(bancoDados.pets[0]);
vacinarPet(bancoDados.pets[1]);
campanhaVacina();
listarPets();
darBanhoPet(bancoDados.pets[2]);
darBanhoPet(bancoDados.pets[3]);
listarPets();
tosarPet(bancoDados.pets[2]);
apararUnhasPet(bancoDados.pets[3]);
listarPets();
prestarServico(bancoDados.pets[0], 'banho', moment().format('L'));
listarPets();
//console.log(JSON.stringify(bancoDados.pets[1]));
//console.log(bancoDados.pets[1]);*/

//bancoDados.pets = bancoDados.pet.pop();

console.log(bancoDados.pets)