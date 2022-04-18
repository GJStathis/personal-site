"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var path = require("path");
dotenv.config({
    path: path.join(__dirname, '../.env.local')
});
var user_1 = require("./user");
var dbConnect_1 = require("./dbConnect");
var username = process.env.ADMIN_USERNAME;
var password = process.env.ADMIN_PASSWORD;
(0, dbConnect_1.connectToDB)();
var adminUser = new user_1.UserModel({ username: username, password: password, isAdmin: true });
adminUser.save(function (err) {
    if (err) {
        throw "Error: ".concat(err);
    }
    console.log("admin user created!");
});
