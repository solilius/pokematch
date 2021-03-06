import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import envs from "./utils/envs";
import { router as trainersRouter } from './routes/trainers';
import { router as pokemonsRouter } from './routes/pokemons';
import { startServer } from './utils/start-server';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/trainers", trainersRouter);
app.use("/pokemons", pokemonsRouter);

app.listen(envs.port, startServer);