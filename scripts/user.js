"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    isAdmin: Boolean
});
UserSchema.pre('save', function (next) {
    if (this.password) {
        var salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }
    return next();
});
exports.UserModel = mongoose.models.users || mongoose.model('users', UserSchema);
