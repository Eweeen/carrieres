import { Request, Response } from "express";
import { Concession } from "../models/Concession";
import { Contact } from "../models/Contact";
import { Mine } from "../models/Mine";
import { CrudController } from "./CrudController";

export class ConcessionController extends CrudController {
    public create(req: Request, res: Response): void {
        Concession.create(req.body)
        .then(concession => res.json(concession))
        .catch(error => {
            console.log(error);
            res.json({ message: 'Insertion impossible' });
        });
    }

    async read(req: Request, res: Response): Promise<void> {
        const concession = await Concession.findOne({
            where: { id: req.params.id },
        });
        res.json(concession);
    }

    async getAllMines(req: Request, res: Response): Promise<void> {
        const concession = await Concession.findOne({
            where: { id: req.params.id },
            include: Mine
        });

        if (concession) {
            res.json(concession.Mines);
        } else {
            res.json({ message: `No concession with id ${req.params.id}` });
        }
    }

    async getAllContacts(req: Request, res: Response): Promise<void> {
        const concession = await Concession.findOne({
            where: { id: req.params.id },
            include: Contact
        });

        if (concession) {
            res.json(concession.Contacts);
        } else {
            res.json({ message: `No concession with id ${req.params.id}` });
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        const concession = await Concession.findOne({
            where: { id: req.params.id },
            include: [Mine, Contact]
        });

        if (concession) {
            res.json(concession);
        } else {
            res.json({ message: `No concession with id ${req.params.id}` });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        const concession = await Concession.findOne({ where: { id: req.params.id } });
        if (concession) {
            concession.set(req.body);
            concession.save();
            res.json(concession);
        } else {
            res.json({ message: `No concession with id ${req.params.id}` });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        const concession = await Concession.findOne({ where: { id: req.params.id } });
        if (concession) {
            concession.destroy();
            res.send(`Concession with id ${req.params.id} has been deleted`);
        } else {
            res.json({ message: `No concession with id ${req.params.id}` });
        }
    }
}