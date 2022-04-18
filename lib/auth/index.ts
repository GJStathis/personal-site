import bcrypt from "bcrypt";

function checkIfPasswordsMatch(inputPassword, savedPassword): boolean{
    const result = bcrypt.compareSync(inputPassword, savedPassword)
    if(result) {
        return true
    }

    return false
}

export { checkIfPasswordsMatch }