type TipoNome = {
    nome: string;
}
type TipoSobrenome = {
    sobrenome : string;
}
type TipoNomeCompleto = {
    nomeCompleto(): string;
}

class Pessoa implements TipoNome , TipoSobrenome , TipoNomeCompleto{
    constructor(public nome:string , public sobrenome:string){
    }

    public nomeCompleto(): string {
        return this.nome + " " + this.sobrenome
    }
}

const pessoa = new Pessoa('luiz','miranda')

console.log(pessoa.nomeCompleto())