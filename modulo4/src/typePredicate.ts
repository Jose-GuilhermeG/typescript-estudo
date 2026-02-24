function isNumber(value : unknown) : value is number {
    return typeof value == 'number';
}

const soma = <T>(...args : T[]) : number | null =>{
    return args.reduce((sum , value)=>{
        if(isNumber(sum) && isNumber(value)) return sum + value
        return sum
    },0)
}