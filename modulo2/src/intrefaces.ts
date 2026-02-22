interface TipoNome {
    nome: string;
}
interface TipoSobrenome {
    sobrenome : string;
}
interface TipoNomeCompleto {
    nomeCompleto(): string;
}

interface IPessoa extends TipoNome , TipoSobrenome , TipoSobrenome {}

class Pessoa implements IPessoa{
    constructor(public nome:string , public sobrenome:string){
    }

    public nomeCompleto(): string {
        return this.nome + " " + this.sobrenome
    }
}

const pessoa = new Pessoa('luiz','miranda')

console.log(pessoa.nomeCompleto())