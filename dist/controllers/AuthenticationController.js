"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const jwt_1 = require("../authentication/jwt");
const User_1 = require("../models/User");
const CrudController_1 = require("./CrudController");
const bcrypt_1 = require("bcrypt");
const constants_1 = require("../config/constants");
const http_status_1 = __importDefault(require("http-status"));
class AuthenticationController extends CrudController_1.CrudController {
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            (0, bcrypt_1.hash)(user.password, constants_1.BCRYPT_ROUND)
                .then(hashPass => {
                user.password = hashPass;
                User_1.User.create(user, { fields: ['firstname', 'lastname', 'password', 'mail'] })
                    .then(() => res.json("User create successful"))
                    .catch(error => {
                    console.log(error);
                    res.json({ message: "Cannot create user" });
                });
            })
                .catch((error) => {
                console.log(error);
                res.json({ message: "Cannot create user" });
            });
        });
    }
    ;
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({
                where: { mail: req.body.mail }
            });
            if (user) {
                if (yield (0, bcrypt_1.compare)(req.body.password, user.password)) {
                    const token = (0, jwt_1.generateToken)(user);
                    res.json({ token: token });
                }
                else {
                    res.status(http_status_1.default.UNAUTHORIZED).json({ message: "Email or password incorrect" });
                }
            }
            else {
                res.status(http_status_1.default.UNAUTHORIZED).json({ message: "Email or password incorrect" });
            }
        });
    }
}
exports.AuthenticationController = AuthenticationController;
