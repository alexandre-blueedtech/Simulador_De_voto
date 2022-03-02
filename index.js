var prompt = require("prompt-sync")();
console.clear();

let candidatos = {};
let votos = {candidato1: 0, candidato2: 0, candidato3: 0, votoNulo: 0, votoEmBranco: 0}
let usuario;
let anoNascimento;
let votar = 'sim';

function votacao(autorizacao,voto){

    while(recebeVoto >= 1 && recebeVoto <= 5){
        console.log(`${usuario} seu voto não será contabilizado, pois, não existe essa opção de voto!!`);
        console.log();
        console.log(`Candidato n°1 = ${candidatos.candidato1} `);
        console.log(`Candidato n°2 = ${candidatos.candidato1}`);
        console.log(`Candidato n°3 = ${candidatos.candidato1}`);
        console.log(`Opção n°4 = Voto nulo`);
        console.log(`Opção n°5 = Voto em branco`);
        recebeVoto = prompt(' ');

    }
    if(recebeVoto == 1){
        votos.candidato1++
    }
    if(recebeVoto == 2){
        votos.candidato2++
    }
    if(recebeVoto == 3){
        votos.candidato3++
    }
    if(recebeVoto == 4){
        votos.votoNulo++
    }
    if(recebeVoto == 5){
       votos.votoEmBranco++
    }
}


function autorizaVoto(resultadoAno){

    let idade =  2022 - anoNascimento;

    if(idade >= 18){
        console.log(`Você tem ${idade} anos, por isso deve votar, é obrigatorio! `);

    }
    if(idade >= 16 && anoNascimento <= 17){
        console.log(`Você tem ${idade} anos, seu voto é opcional! `);
        let pergunta = prompt('Você deseja votar? ');
        while(pergunta == 'sim'){
            if(pergunta == 'nao'){
                console.log(`você decidiu não votar, até logo!!`);
                break;
            }
        }
    }
    if(idade < 16){
        while(true){
            console.log(`Você tem ${idade} anos, não tem autorização para votar!!`);
            break;
        }
    }
}

function exibirResultado(){
    console.log();
    console.log(`Abaixo confira como ficou o resultado da votação!!`);
    console.log();
    console.table(votos);
    console.log();

    if(votos.candidato1 > votos.candidato2 && votos.candidato1 > votos.candidato3){
        console.log(`Com ${votos.candidato1} de votos, ${candidatos.candidato1} foi o vencedor desta votação. `);
    }
    if(votos.candidato2 > votos.candidato1 && votos.candidato2 > votos.candidato3){
        console.log(`Com ${votos.candidato2} de votos, ${candidatos.candidato2} foi o vencedor desta votação.`);
    }
    if(votos.candidato3 > votos.candidato1 && votos.candidato1 > votos.candidato2){
        console.log(`Com ${votos.candidato3} de votos, ${candidatos.candidato3} foi o vencedor desta votação.`);
    }
}

console.log(`Bem-vindos ao simulador/contabilizador de votação da sueD, abaixo realize seu cadastro para saber se é legivel para realizar os votos. Boa votação!!`);
console.log();
candidatos.candidato1 = prompt('Digite o nome do candidato numero 1: ');
console.clear();
candidatos.candidato2 = prompt('Digite o nome do candidato numero 2: ');
console.clear();
candidatos.candidato3 = prompt('Digite o nome do candidato numero 3: ');
console.clear();

console.log('Agora que já definos quem será os candidatos, faça seu registro para começar a votação. Lembrando que existem requisitos para poder votar. ');
console.log();
usuario = prompt('Qual seu nome? ');
console.log();
console.log(`Olá ${usuario}, agora iremos passar pelo verificador de idade, a partir dos 16 anos você já pode votar. `);
console.log();
anoNascimento = prompt('Em qual ano você nasceu? ');
console.log();
autorizaVoto(anoNascimento);
console.log();
console.table(candidatos);
console.log();

while(votar == 'sim'){

console.log(`${usuario} qual será sua opção de voto? `);
console.log();
console.log(`Opção 1 = ${candidatos.candidato1} `);
console.log(`Opção 2 = ${candidatos.candidato2}`);
console.log(`Opção 3 = ${candidatos.candidato3}`);
console.log(`Opção 4 = Voto nulo`);
console.log(`Opção 5 = Voto em branco`);

let recebeVoto = prompt('Qual sua opção de voto? ');

votar = prompt('Deseja continuar votando? ');
}
