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
exports.MineController = void 0;
const Mine_1 = require("../models/Mine");
const CrudController_1 = require("./CrudController");
class MineController extends CrudController_1.CrudController {
    create(req, res) {
        Mine_1.Mine.create(req.body)
            .then(mine => res.json(mine))
            .catch(error => {
            console.log(error);
            res.json({ message: 'Insertion impossible' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mine = yield Mine_1.Mine.findOne({
                where: { id: req.params.id },
            });
            res.json(mine);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mine = yield Mine_1.Mine.findOne({ where: { id: req.params.id } });
            if (mine) {
                mine.set(req.body);
                mine.save();
                res.json(mine);
            }
            else {
                res.json({ message: `No mine with id ${req.params.id}` });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mine = yield Mine_1.Mine.findOne({ where: { id: req.params.id } });
            if (mine) {
                mine.destroy();
                res.send(`Mine with id ${req.params.id} has been deleted`);
            }
            else {
                res.json({ message: `No mine with id ${req.params.id}` });
            }
        });
    }
}
exports.MineController = MineController;
