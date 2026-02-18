/*tipos basicos */
let name : string = "Guilherme";
let idade : number = 18;
let adulto : boolean = true;
let symbol : symbol = Symbol("qualquer-symbol")

/*arrays*/
let arrayDeNumeros : Array<number> = [1,2,3,4,5,6,7,8,9,10]
/*let arrayDeNumeros : number[] = [1,2,3,4,5,6,7,8,9,10]*/
let arrayDeStrings : Array<string> = ['a' , 'b']
/*let arrayDeStrings : string[] = ['a' , 'b']*/

/*object */
let pessoa : {nome : string , idade : number , eAdulto? : boolean} = {
    nome : "joão",
    idade : 15,
    
}

function soma(x : number , y : number ) : number{
    return x + y;
}

const result : number = soma(1,5);