//interface PessoaProtocolo {
//    nome : string;
//    sobrenome : String;
//}

interface PessoaProtocolo<T = string , U = number> {
    nome : T;
    sobrenome : T;
    idade : U
}

type PessoaProtocolo2<T = string , U = number> = {
    nome : T;
    sobrenome : T;
    idade : U
}

const aluno1 : PessoaProtocolo<string , number> = {
    nome : "Gustavo",
    sobrenome : "Guanabara",
    idade : 30
}

const aluno2 : PessoaProtocolo<number , string> = {
    nome : 123,
    sobrenome :456,
    idade : '30'
}

const aluno3 : PessoaProtocolo = {
    nome : "Gustavo",
    sobrenome : "Guanabara",
    idade : 30
}