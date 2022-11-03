require('dotenv').config();

import express from 'express';
import { PORT } from './config/constants';
import { router as mineRouter } from './routes/mines/Mine';
import { router as concessionRouter } from './routes/concessions/Concession';
import { router as authenticateRouter } from './routes/auth/Authenticate';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send("Hello world !"));

// Auth routes
app.post("/signin", authenticateRouter);
app.post("/login", authenticateRouter);

// Mines routes
app.get('/mine/show/:id', mineRouter);
app.post('/mine/add', mineRouter);
app.patch('/mine/update/:id', mineRouter);
app.delete('/mine/delete/:id', mineRouter);

// Concessions routes
app.get('/concession/show/:id', concessionRouter);
app.post('/concession/add', concessionRouter);
app.patch('/concession/update/:id', concessionRouter);
app.delete('/concession/delete/:id', concessionRouter);

app.get('/concession/show/mines/:id', concessionRouter);
app.get('/concession/show/contact/:id', concessionRouter);
app.get('/concession/all/:id', concessionRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});