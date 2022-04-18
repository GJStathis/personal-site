import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    isAdmin: Boolean
})

UserSchema.pre('save', function(next){
    if(this.password) {
        const salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password, salt)    

    }
    return next()
})


export const UserModel = mongoose.models.users || mongoose.model('users', UserSchema)