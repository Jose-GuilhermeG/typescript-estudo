const arrayNumeros : Array<number> = [1,2,3,4,5,6,7,8]

console.log(arrayNumeros)

async function retornaPromise() : Promise<{data : Array<String>}>{
    return new Promise((resolve , reject)=>{
         setTimeout(()=>{
            resolve({data : ["hello" , "world"]})
        },800)
    })
}

retornaPromise().then(data=>console.log(data))