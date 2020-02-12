import "reflect-metadata";
import express from 'express';
import {createConnection} from "typeorm";
import bodyParser from "body-parser";
import {Request, Response} from "express";

// Constants
const PORT = process.env.NODE_PORT || 8080;
const HOST = '0.0.0.0';

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // create express app
    const server: express.Application = express();

    server.use(bodyParser.json());

    server.get('/', (req: Request, res: Response) => {
        res.send('Hello World!');
    });

    server.listen(PORT, () => {
        console.info(`Running on http://${HOST}:${PORT}`);
    });

}).catch(
    error => console.error("TypeORM connection error: ", error)
);
