function decorator(classPrototype : any, nomeMetodo : string , descriptor : PropertyDescriptor) : void{
    console.log(classPrototype)
    console.log(nomeMetodo)
    console.log(descriptor)
}


export class Pessoa{
    public nome : string ;
    public sobrenome : string;
    public idade : number;

    constructor(nome : string , sobrenome : string , idade : number){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    @decorator
    public metodo(msg : string) : string {
        return `${this.nome} ${this.sobrenome} : ${msg} `
    }

    public get nomeComleto() : string {
        return this.nome + ' ' + this.sobrenome;
    }

    public set nomeCompleto(valor : string){
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if(!primeiroNome) return;
        this.nome = primeiroNome
        this.sobrenome = palavras.join('')
    }
}