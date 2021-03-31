let fs = require('fs');

let bancoDados = fs.readFileSync('bancoDados.json', 'utf-8');

bancoDados = JSON.parse(bancoDados);

