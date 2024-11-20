import cesar from './cesar.js';


import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chave = 3; 

rl.question('Digite "1" para criptografar ou "2" para descriptografar: ', (escolha) => {
  rl.question('Digite a mensagem: ', (mensagem) => {
    if (escolha === '1') {
      const msgCifrada = cesar.criptografia(mensagem, chave, cesar.cifrarLetras);
      console.log('Mensagem Cifrada:', msgCifrada);
    } else if (escolha === '2') {
      const msgDecifrada = cesar.criptografia(mensagem, chave, cesar.decifrarLetras);
      console.log('Mensagem Decifrada:', msgDecifrada);
    } else {
      console.log('Escolha inválida!');
    }

    rl.close();
  });
});
