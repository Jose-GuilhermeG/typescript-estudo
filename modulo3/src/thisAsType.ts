class Calculadora{
    constructor(
        public numero : number 
    ){}

    public add( n : number) : this{
        this.numero += n
        return this
    }

    public sub(n : number) : this {
        this.numero -= n;
        return this
    }

    public div(n : number) : this {
        this.numero /= n;
        return this;
    }

    public mul(n : number) : this {
        this.numero *= n;
        return this;
    }
}

class SubCalculador extends Calculadora{
    public pow(n : number) : this {
        this.numero **= n;
        return this;
    }
}

const calculador = new SubCalculador(10);
calculador.add(10).mul(5).div(10).sub(5).pow(2);
console.log(calculador.numero)