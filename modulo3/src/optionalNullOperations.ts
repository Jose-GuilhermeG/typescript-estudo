type Documento = {
    titulo : string;
    texto : string;
    data? : Date;
}

const documento : Documento = {
    titulo : "O titulo",
    texto : "O texto"
}

console.log(documento);
console.log(documento.data);
//console.log(documento.data.toString());
console.log(documento.data?.toString());
console.log(documento.data?.toString() ?? 'não ha data')