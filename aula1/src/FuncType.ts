//primeira versão
//function mapStrings(array : Array<string> , callBackFn: CallableFunction ) : string[]{
//    const result : Array<string> = [];
//    for(let element of array) result.push(callBackFn(element))
//    return result
//}
//
//const teste_array : string[] = [
//    "teste1",
//    "pedra",
//    "maça",
//    "uva",
//    "banana",
//]
//
//console.log(teste_array.map(element=>element + "_passou_pelo_map"))
//console.log(mapStrings(teste_array,(element : string)=>element + "_passou_pelo_map"))

//segunda versão
type callBackFn = (element : string) => string

function mapStrings(array : Array<string> , callBackFn: callBackFn ) : string[]{
    const result : Array<string> = [];
    for(let element of array) result.push(callBackFn(element))
    return result
}

const teste_array : string[] = [
    "teste1",
    "pedra",
    "maça",
    "uva",
    "banana",
]

console.log(teste_array.map(element=>(element + "_passou_pelo_map").toUpperCase()))
console.log(mapStrings(teste_array,(element)=>(element + "_passou_pelo_map").toUpperCase()))