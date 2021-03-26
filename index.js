const moment = require('moment');

const nomePetshop = "PETSHOP DH";

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
    if (pet.vacinado == false){
        pet.vacinado = true;
        console.log(`O pet ${pet.nome} foi vacinado com sucesso!`)
    }else{
        console.log(`Ops! O pet ${pet.nome} já está vacinado!`)
    }
}

const campanhaVacina = () => {
    var soma = 0;
    for(let pet of pets){
        if(pet.vacinado == false){
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
    for(var pet of pets){
        console.log(`O nome do pet é ${pet.nome} e sua raça é ${pet.raca} (${JSON.stringify(pet.servicos)})`);
    }
}

const prestarServico = (pet, servico, data) => {
    pet.servicos.push({
        servico: servico,
        data: data
    });
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
tosarPet(pets[2]);
apararUnhasPet(pets[3]);
listarPets();

prestarServico(pets[0], 'banho', moment().format('L'));
listarPets();