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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionController = void 0;
const Concession_1 = require("../models/Concession");
const Contact_1 = require("../models/Contact");
const Mine_1 = require("../models/Mine");
const CrudController_1 = require("./CrudController");
class ConcessionController extends CrudController_1.CrudController {
    create(req, res) {
        Concession_1.Concession.create(req.body)
            .then(concession => res.json(concession))
            .catch(error => {
            console.log(error);
            res.json({ message: 'Insertion impossible' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const concession = yield Concession_1.Concession.findOne({
                where: { id: req.params.id },
            });
            res.json(concession);
        });
    }
    getAllMines(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const concession = yield Concession_1.Concession.findOne({
                where: { id: req.params.id },
                include: Mine_1.Mine
            });
            if (concession) {
                res.json(concession.Mines);
            }
            else {
                res.json({ message: `No concession with id ${req.params.id}` });
            }
        });
    }
    getAllContacts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const concession = yield Concession_1.Concession.findOne({
                where: { id: req.params.id },
                include: Contact_1.Contact
            });
            if (concession) {
                res.json(concession.Contacts);
            }
            else {
                res.json({ message: `No concession with id ${req.params.id}` });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const concession = yield Concession_1.Concession.findOne({
                where: { id: req.params.id },
                include: [Mine_1.Mine, Contact_1.Contact]
            });
            if (concession) {
                res.json(concession);
            }
            else {
                res.json({ message: `No concession with id ${req.params.id}` });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const concession = yield Concession_1.Concession.findOne({ where: { id: req.params.id } });
            if (concession) {
                concession.set(req.body);
                concession.save();
                res.json(concession);
            }
            else {
                res.json({ message: `No concession with id ${req.params.id}` });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const concession = yield Concession_1.Concession.findOne({ where: { id: req.params.id } });
            if (concession) {
                concession.destroy();
                res.send(`Concession with id ${req.params.id} has been deleted`);
            }
            else {
                res.json({ message: `No concession with id ${req.params.id}` });
            }
        });
    }
}
exports.ConcessionController = ConcessionController;
