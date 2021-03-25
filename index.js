const nomePetshop = "PETSHOP DH";

let pets = [
    {
        nome: 'Snoopy',
        tipo: 'cachorro',
        idade: 5,
        raça: 'Beagle',
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
        raça: 'Vira-lata',
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
        raça: 'Rosa',
        peso: 2,
        tutor: 'Pucca',
        contato: '(11) 99999-9999',
        vacinado: true,
        servicos: ['banho', 'tosa', 'corte de unha']
    }

];

const listarPets = () => {
    for(let i = 0; i<pets.length; i++){

        console.log(pets[i].nome);
    }

}

listarPets();

//console.log(pets);