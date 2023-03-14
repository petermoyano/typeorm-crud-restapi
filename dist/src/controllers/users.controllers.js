"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
function createUser(req, res) {
    console.log(req.body);
    res.send("hello from users!");
}
exports.createUser = createUser;
