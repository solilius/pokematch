import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as pokemonsRouter } from './routes/pokemons';
import envs from "./utils/envs";
import { startServer } from './utils/start-server';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/pokemons", pokemonsRouter);

app.listen(envs.port, startServer);