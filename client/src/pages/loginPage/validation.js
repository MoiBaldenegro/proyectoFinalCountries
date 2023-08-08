export default function validation(input){
    const errors = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPass = new RegExp("[0-9]")

    if(!regexEmail.test(input.email)){
        errors.email = " Enter a valid email "
    };
    if(!regexEmail){
        errors.email = " Mail required "
    }
    if(!regexPass.test(input.password)){
        errors.password = " the password must have at least one number "
    }
    if(input.password.length < 6){
        errors.password = " The password must be at least 6 character "
    };
    return errors;
} ;