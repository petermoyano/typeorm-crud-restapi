"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const router = (0, express_1.Router)();
router.get("/hello", (req, res) => res.send("hello world"));
router.post("/users", users_controllers_1.createUser);
exports.default = router;
