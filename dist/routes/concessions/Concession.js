"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const ConcessionController_1 = require("../../controllers/ConcessionController");
const Auth = __importStar(require("../../middleware/authenticate"));
const concessionController = new ConcessionController_1.ConcessionController();
exports.router = express_1.default.Router({
    strict: true,
});
exports.router.route('/concession/show/:id').get(concessionController.read);
exports.router.route('/concession/add').post(Auth.authorize(["admin"]), concessionController.create);
exports.router.route('/concession/update/:id').patch(Auth.authorize(["admin"]), concessionController.update);
exports.router.route('/concession/delete/:id').delete(Auth.authorize(["admin"]), concessionController.delete);
exports.router.route('/concession/show/mines/:id').get(concessionController.getAllMines);
exports.router.route('/concession/show/contact/:id').get(concessionController.getAllContacts);
exports.router.route('/concession/all/:id').get(concessionController.getAll);
