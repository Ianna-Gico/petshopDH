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
        servicos: ['banho', 'tosa']
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
        servicos: ['banho', 'tosa']
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
        servicos: ['banho', 'tosa', 'corte de unha']
    }

];

const listarPets = () => {
    for(let pet of pets){

        //console.log(pets[i].nome + " " + pets[i].raca);
        console.log(`O nome do pet é ${pet.nome + " e sua raça é " + pet.raca}`);
    }

}

listarPets();

//console.log(pets);