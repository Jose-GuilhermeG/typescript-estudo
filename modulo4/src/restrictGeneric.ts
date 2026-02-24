type ObterChaveFn = <O , K extends keyof O >(objeto : O , chave : K) => O[K];

const obterChave : ObterChaveFn = (objeto , chave) => objeto[chave]

const animal = {
    nome : "leão",
    cor : "amarelo",
    idade : 5
}

console.log(obterChave(animal , 'cor'))