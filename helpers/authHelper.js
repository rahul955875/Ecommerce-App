import bcrypt from 'bcrypt'

export const hashPassword = async(password)=>{
    try {
        const saltRoundes = 10
        const hashedPassword =await bcrypt.hash(password,saltRoundes)
        return hashedPassword;

    } catch (error) {
        console.log(error)
    }
}
export const comparePassword = (password, hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}