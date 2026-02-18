const objectA : {readonly chaveA : string , chaveB : string , [key : string] : string} = {
    chaveA : 'teste',
    chaveB : 'não sei',
    
}

objectA.chaveC = 'sei la'
console.log(objectA)