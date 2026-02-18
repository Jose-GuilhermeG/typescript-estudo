type TemNome = {
    nome : string
}

type TemSobrenome = {
    sobrenome : string
}

type TemIdade = {
    idade : number
}

type User = TemNome & TemSobrenome & TemIdade

const user : User = {
    nome : "joão",
    sobrenome : "Pessoa",
    idade : 18
}

console.log(user)