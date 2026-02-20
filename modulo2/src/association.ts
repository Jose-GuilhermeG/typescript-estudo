class Escritor{
    private _ferramenta : Ferramenta | null = null; 

    constructor(
        private _nome : string
    ){}

    public get nome() : string{
        return this._nome
    }

    public set ferramenta( value : Ferramenta ){
        this._ferramenta = value
    }

    public escrever() : void {
        this._ferramenta ? 
        this._ferramenta.escrever():
        console.log("o escritor não tem ferramenta")
    }

}

abstract class Ferramenta{
    constructor(
        private _nome : string
    ){}

    public get nome():string{
        return this._nome
    }

    public abstract escrever() : void;
}

class Caneta extends Ferramenta{
    public escrever(): void {
        console.log(`${this.nome} está escrevendo`)
    }
}

class MaquinaEscrever extends Ferramenta{
    public escrever(): void {
        console.log(`${this.nome} está digitando`)
    }
}

const escritor = new Escritor("luix")
const caneta = new Caneta("caneta bic")
const maquina = new MaquinaEscrever("Maquina bic")

console.log(escritor.nome)
console.log(caneta.nome)
console.log(maquina.nome)

escritor.escrever()

escritor.ferramenta = caneta

escritor.escrever()

escritor.ferramenta = maquina

escritor.escrever()