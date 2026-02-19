//types
type EventFunc = (event : Event) => void
type ValidateUsername = (username : string | null) => string
type ValidateEmail = (email : string | null) => string
type ValidatePassword = (password : string | null , confirm_password : string | null) => string

type Username = {
    username : string
}
type Email = {
    email : string
}
type Password = {
    password : string
}

type HasErr = {
    hasErr : boolean,
    field_id? :  string,
    massage? : string
}

type RegisterData = Username & Email & Password ;

const form = document.getElementById("form") as HTMLFormElement
let hasErr : HasErr = {
    hasErr : false
}

const validateUsername : ValidateUsername = (value)=>{
    if(!value || value.length == 0 ){
        hasErr.hasErr = true
        hasErr.field_id = "username"
        return ""
    }

    return value

}

const validateEmail : ValidateEmail = (value)=>{
    if(!value || value.length == 0 || !value.includes("@")){
        hasErr = {
            hasErr : true,
            field_id : "email"
        }
        return ""
    }

    return value
}

const validatePassword : ValidatePassword = (password , confirm_password) => {
    if(!password || !confirm_password){
        hasErr = {
            hasErr : true,
            field_id : "password",
        }
        return ""
    }
    
    if (password != confirm_password){
        hasErr = {
            hasErr : true,
            field_id : "password",
        }
        return ""
    }

    return password
}

const FormSubmit : EventFunc = (e)=>{
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data : RegisterData = {
        username : validateUsername(form.username.value),
        email : validateEmail(form.email.value),
        password : validatePassword(form.password.value , form.password2.value)
    }
    console.log(data)
    console.log(hasErr)

}

form.onsubmit = FormSubmit