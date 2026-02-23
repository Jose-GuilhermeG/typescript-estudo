type Adder = {
    (x : number) : number;
    (x : number , y : number) : number;
    (...numbers : Array<number>) : number;
}

const adder : Adder = (x , y? , ...numbers ) => {
    let result : number = x;    
    
    if(typeof y == "number") result += y;

    if(numbers.length > 0) numbers.forEach(element=>result+= element)

    return result
}


console.log(adder(1));
console.log(adder(1 , 10));
console.log(adder(1 , 10 , 10 , 10));