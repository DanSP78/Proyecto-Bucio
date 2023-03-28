import app from "./app"; //equivale al codigo que esta en app.js
import './database';
import { PUERTO } from "./config";
const port = process.env.PORT || PUERTO;
app.listen(port);
console.log("servidor en puerto", port);