/**
// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
 */

// Como podemos melhorar o esse código usando TS? 

interface Pessoas {
    nome: string,
    idade: number,
    profissao?: string 
}

let pessoa1: Pessoas = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};

let pessoa2: Pessoas = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro",
};

let pessoa3: Pessoas = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: Pessoas = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}