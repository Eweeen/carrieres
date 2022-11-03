"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const Mine_1 = require("./routes/mines/Mine");
const Concession_1 = require("./routes/concessions/Concession");
const Authenticate_1 = require("./routes/auth/Authenticate");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => res.send("Hello world !"));
// Auth routes
app.post("/signin", Authenticate_1.router);
app.post("/login", Authenticate_1.router);
// Mines routes
app.get('/mine/show/:id', Mine_1.router);
app.post('/mine/add', Mine_1.router);
app.patch('/mine/update/:id', Mine_1.router);
app.delete('/mine/delete/:id', Mine_1.router);
// Concessions routes
app.get('/concession/show/:id', Concession_1.router);
app.post('/concession/add', Concession_1.router);
app.patch('/concession/update/:id', Concession_1.router);
app.delete('/concession/delete/:id', Concession_1.router);
app.get('/concession/show/mines/:id', Concession_1.router);
app.get('/concession/show/contact/:id', Concession_1.router);
app.get('/concession/all/:id', Concession_1.router);
app.listen(constants_1.PORT, () => {
    console.log(`Server is listening on port ${constants_1.PORT}`);
});
