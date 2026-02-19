class Pessoa{
    public readonly nome : string;
    public readonly sobrenome : string;
    private readonly idade : number;
    protected readonly cpf : string;

    constructor(
        nome : string,
        sobrenome : string,
        idade : number,
        cpf : string
    ){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.cpf = cpf
    }

    public getIdade() : number {
        return this.idade;
    }

    public getNomeCompleto() : string {
        return `${this.nome} ${this.sobrenome}`;
    }

    public getCpf() : string {
        return this.cpf;
    }
}

class Aluno extends Pessoa {
    public getNomeCompleto(): string {
        const nomeCompleto = super.getNomeCompleto()
        return `aluno - ${nomeCompleto}`
    }
}
class Cliente extends Pessoa {
    public getNomeCompleto(): string {
        const nomeCompleto = super.getNomeCompleto()
        return `client - ${nomeCompleto}`
    }
}

const aluno = new Aluno("José" , "Guilherme" , 18 , "000.000.000-00")
console.log(aluno)
console.log(aluno.getNomeCompleto())

const cliente = new Cliente("João","Fernando",29, "000.000.000-00")
console.log(cliente)
console.log(cliente.getNomeCompleto())

