//singleton
class Database{
    private static database : Database;

    private constructor(
        private host : string,
        private user : string,
        private password: string
    ){}

    public connect() : void {
        console.log(`Conectado com ${this.host} , ${this.user}`)
    }

    public static getDatabase(host : string , user : string , password : string): Database{
        if(Database.database) return Database.database
        return Database.database = new Database(host , user , password)
    }
}

const database1 = Database.getDatabase('localhost' , 'root' , '1234567910')
const database2 = Database.getDatabase('localhost' , 'root' , '1234567910')

database2.connect()

console.log(database1 == database2)