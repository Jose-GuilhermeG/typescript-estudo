function InverterNome(param1 : string , param2 : string){
    return function <T extends new (...args : any[])=>any >( target : T) : T  {
    return class extends target {
        public cor : string;

        constructor(...args : any[]){
            super(...args)
            this.nome = this.invert(args[0]) + ' ' + param1
            this.cor = this.invert(args[1]) + ' ' + param2
        }

        protected invert(value : any){
            return value.split("").reverse().join("")
        }
    }
}
}

function AdicionaId(){
    return function<T extends new (...args : any[]) => any>(target : T) : T {
        return class extends target{
            public id : number;

            constructor(...args : any[]){
                super(...args)
                this.id = 1
            }
        }
    }
}

@InverterNome("teste","sla")
@AdicionaId()
export class Animal{
    constructor(
        public nome : string,
        public cor : string
    ){}
}

console.log(new Animal("bode" , "branco"))