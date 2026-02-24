class Pessoa<T , U>{
    constructor(
        public nome : T,
        public idade : U
    ){}
}

const Pessoa1 = new Pessoa('Luiz',30)
const Pessoa2 = new Pessoa(['pedro'],true)
const Pessoa3 = new Pessoa<string , number>('João',20)

interface IStack<T>{
    add(item : T) : void;
    remove() : T | undefined;
    showLast() : T | undefined
}

class Stack<T> implements IStack<T>{
    private readonly stack : Array<T> = []

    constructor(
        ...items : Array<T>
    ){
        this.stack.push(...items)
    }

    public add(item: T): void {
        this.stack.push(item)
    }

    public remove(): T | undefined {
        return this.stack.pop()
    }

    showLast(): T | undefined {
        return this.stack[this.stack.length -1]
    }
}


const pessoaStack = new Stack<Pessoa<string , number>>(Pessoa1 , Pessoa3)

