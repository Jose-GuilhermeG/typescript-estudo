//record
const objeto1 : Record <string , string> = {
    nome : 'objeto',
    code : '2'
}

console.log(objeto1)

type PessoaProtocol = {
    nome? : string,
    sobrenome? : string,
    idade? : number,
}

//require
type PessoaRequired = Required<PessoaProtocol>

const objeto2 : PessoaRequired = {
    nome : "objeto",
    sobrenome : "2",
    idade : 0
}

//partial
type PessoaPartial = Partial<PessoaRequired>
const objeto3 : PessoaPartial = {}

// readonly 
type PessoaReadonly = Readonly<PessoaRequired>

// pick
type PessoaPick = Pick<PessoaRequired , 'nome' | 'sobrenome'>

// Extract e Exclude
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

type TipoExclude = Exclude<ABC , CDE>;
type TipoExtract = Extract<ABC , CDE>
