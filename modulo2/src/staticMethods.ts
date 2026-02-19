class Pessoa{
    public static readonly idadePadrao : number = 0

    constructor(
        public nome : string,
        public sobrenome : string,
        public idade : number,
        public cpf : string
    ){}

    methodNormal() : void{
        console.log(Pessoa.idadePadrao)
    }

    public static digaOi() : void{
        console.log("Oi")
    }
}

const pessoa1 = new Pessoa("João","pessoa",18,"000.000.000-00")
pessoa1.cpf = "111.111.111-11"
console.log(pessoa1)
pessoa1.methodNormal()
Pessoa.digaOi()