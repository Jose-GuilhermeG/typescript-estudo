type CoresRGB = typeof coresOBJ
type ChavesCoresRGB = keyof CoresRGB

const coresOBJ = {
    verde : "green",
    vermelho : "red",
    azul : "blue",
    roxo : "purple"
}

const traduzirCor = (cor : ChavesCoresRGB , cores : typeof coresOBJ) : string =>{
    return cores[cor]
}

console.log(traduzirCor("verde" , coresOBJ))
console.log(traduzirCor("azul" , coresOBJ))
console.log(traduzirCor("roxo" , coresOBJ))
console.log(traduzirCor("vermelho" , coresOBJ))