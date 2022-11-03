import express from "express";
import { ConcessionController } from "../../controllers/ConcessionController";
import * as Auth from "../../middleware/authenticate";

const concessionController = new ConcessionController();

export const router = express.Router({
    strict: true,
});

router.route('/concession/show/:id').get(concessionController.read);
router.route('/concession/add').post(Auth.authorize(["admin"]), concessionController.create);
router.route('/concession/update/:id').patch(Auth.authorize(["admin"]), concessionController.update);
router.route('/concession/delete/:id').delete(Auth.authorize(["admin"]), concessionController.delete);

router.route('/concession/show/mines/:id').get(concessionController.getAllMines);
router.route('/concession/show/contact/:id').get(concessionController.getAllContacts);
router.route('/concession/all/:id').get(concessionController.getAll);