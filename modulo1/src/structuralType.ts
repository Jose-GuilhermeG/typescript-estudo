type User = {
    username : string,
    password : string
}

type VerifyUserFn = (user : User , sentValue : User) => boolean

const verifyUser : VerifyUserFn = (user , sentValue) => {
    return (
        user.username == sentValue.username && user.password == sentValue.password
    )
}

const dbUser = {
    username  : "Guilherme",
    password : "123"
}

const dbUser2 = {
    username : "joão",
    password : "1234"
}

console.log(verifyUser(dbUser , {...dbUser}))
console.log(verifyUser(dbUser , dbUser2))