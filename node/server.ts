import express from 'express';
import {createConnection} from "typeorm";
import bodyParser from "body-parser";

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // create express app
    const server: express.Application = express();

    server.use(bodyParser.json());

    // run app
    server.listen(PORT);

    server.get('/', (req, res) => {
        res.send('Hello World!');
    });

    server.listen(PORT, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });

}).catch(
    error => console.log("TypeORM connection error: ", error)
);
