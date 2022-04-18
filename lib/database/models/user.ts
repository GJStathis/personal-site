import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    isAdmin: Boolean
})

UserSchema.pre('save', function(next){
    const saltRounds = 10
    bcrypt.hash(this.password, saltRounds, function(err, hash) {
        if(err) {
            console.error(`Error encountered during user save to db ${err}`)
        }
        this.password = hash
        return next(this)
    })
})


export const UserModel = mongoose.models.users || mongoose.model('users', UserSchema)