// atalho de construção de class
class Colaborador{
    constructor(
        public readonly nome : string , // public permite o acesso dos atributos/methods em qualquer escopo / lugar
        public readonly sobrenome : string
    ){}

    public getNome() : string{
        return `${this.nome} - ${this.sobrenome}`
    }

}

//forma completa
class Empresa{
    public readonly nome : string; // public permite o acesso dos atributos/methods em qualquer escopo / lugar
    private readonly colaboradores : Array<Colaborador> = [] ; // private permite o acesso dos atributos/methods somente dentro da classe onde foram declarados
    protected readonly cnpj : string // 

    constructor(nome : string , cnpj : string ){
        this.nome = nome
        this.cnpj = cnpj
    }

    public toString() : string {
        return this.nome
    }

    public adicionaColaborador(...colaborador : Array<Colaborador>) : void {
        this.colaboradores.push(...colaborador)
    }

    public mostrarColaboradores():void{
        this.colaboradores.forEach(element=>console.log(element.getNome()))
    }

}

const empresa1 = new Empresa("Udemy" , "11.111.111/0001-11")
const colaborador1 = new Colaborador("João" , "Fernando")
const colaborador2 = new Colaborador("Maria" , "Fernanda")
const colaborador3 = new Colaborador("Pedro" , "Pereira")
empresa1.adicionaColaborador(colaborador1 , colaborador2 , colaborador3)

console.log(empresa1)
empresa1.mostrarColaboradores()
console.log(colaborador1)