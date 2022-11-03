import express from "express";
import { MineController } from "../../controllers/MineController";
import * as Auth from "../../middleware/authenticate";

const mineController = new MineController();

export const router = express.Router({
    strict: true,
});

router.route('/mine/show/:id').get(mineController.read);
router.route('/mine/add').post(Auth.authorize(["admin"]), mineController.create);
router.route('/mine/update/:id').patch(Auth.authorize(["admin"]), mineController.update);
router.route('/mine/delete/:id').delete(Auth.authorize(["admin"]), mineController.delete);