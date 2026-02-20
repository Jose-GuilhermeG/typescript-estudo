abstract class Personagem{
    protected abstract emoji : string

    constructor(
        protected nome : string,
        protected ataque : number,
        protected vida : number
    ){}

    public atacar(personagem : Personagem) : void{
        this.bordao()
        personagem.perderVida(this.ataque)
    }
    
    public perderVida(dano : number) : void{
        this.vida -= dano
        console.log(`${this.nome} agora tem ${this.vida} de vida `)
    }

    public abstract bordao() : void;
}

class Guerreira extends Personagem{
    protected emoji: string = "G"

    public bordao(): void {
        console.log("Gerreira ao ataque")
    }
}
class Monstro extends Personagem{
    protected emoji: string = "M"
    
    public bordao(): void {
        console.log("Monstro ao ataque")
    }
}

const guerreira = new Guerreira("Guerreira" , 100 , 1_000)
const monstro = new Monstro("Monstro" , 87 , 1_000)
//const personagem = new Personagem()

guerreira.atacar(monstro)
guerreira.atacar(monstro)
guerreira.atacar(monstro)