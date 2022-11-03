import { Request, Response } from "express";
import { Mine } from "../models/Mine";
import { CrudController } from "./CrudController";

export class MineController extends CrudController {
    public create(req: Request, res: Response): void {
        Mine.create(req.body)
        .then(mine => res.json(mine))
        .catch(error => {
            console.log(error);
            res.json({ message: 'Insertion impossible' });
        });
    }

    async read(req: Request, res: Response): Promise<void> {
        const mine = await Mine.findOne({
            where: { id: req.params.id },
        });
        res.json(mine);
    }

    async update(req: Request, res: Response): Promise<void> {
        const mine = await Mine.findOne({ where: { id: req.params.id } });
        if (mine) {
            mine.set(req.body);
            mine.save();
            res.json(mine);
        } else {
            res.json({ message: `No mine with id ${req.params.id}` });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        const mine = await Mine.findOne({ where: { id: req.params.id } });
        if (mine) {
            mine.destroy();
            res.send(`Mine with id ${req.params.id} has been deleted`);
        } else {
            res.json({ message: `No mine with id ${req.params.id}` });
        }
    }
}