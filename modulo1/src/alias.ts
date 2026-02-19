//types
type Idade = number;
type Salario = number;
type Cor = 'Verde' | 'Azul' | 'Vermelho' | 'Amarelo';

type Pessoa = {
    nome : string,
    idade : Idade,
    salario : Salario , 
    corPreferida? : Cor
}

const Test : Pessoa = {
    nome : "Guilherme",
    idade : 18,
    salario : 9_000,
    corPreferida : 'Verde',
}

function SetCorPreferida(pessoa : Pessoa , cor : Cor) : Pessoa{
    return {...pessoa , corPreferida : cor}
}

