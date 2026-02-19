class Pessoa{
    private nome : string;
    private sobrenome : string;
    private _idade : number;
    private _cpf : string;

    constructor(
        nome : string,
        sobrenome : string,
        idade : number,
        cpf : string
    ){
        this.nome = nome
        this.sobrenome = sobrenome
        this._idade = idade
        this._cpf = this.formatCpf(cpf)
    }
    
    public get idade() : number {
        return this._idade;
    }

    public get getNomeCompleto() : string {
        return `${this.nome} ${this.sobrenome}`;
    }
    
    public get cpf() : string {
        return this._cpf
    }
    
    public set cpf(value : string){
        this._cpf = this.formatCpf(value)
    }

    private formatCpf(cpf : string) : string{
        return cpf.replace(/\D/g , '')
    }
}

const pessoa1 = new Pessoa("João","pessoa",18,"000.000.000-00")
console.log(pessoa1)
pessoa1.cpf = "111.111.111-11"
console.log(pessoa1)
console.log(pessoa1.cpf)