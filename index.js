import express from 'express';
import { Low, JSONFile } from 'lowdb';

// Prepare Mock Database
const adapter = new JSONFile("./data.json");
const db = new Low(adapter);
await db.read();
db.data = db.data || { logs: [] };

// Prepare Express application
const app = express();

const loggingMiddleware = (req, res, next) => {
    // [2021-09-06T20:11:22Z] /secret accessed
    const datetime = new Date().toISOString();

    db.data.logs.push(`[${datetime}] ${req.method} ${req.url} accessed`);
    db.write();

    const delayMS = Math.round(Math.random() * 4000) + 1000;
    setTimeout(next, delayMS);
}
app.use(loggingMiddleware);

app.get("/foo", (req, res) => res.send("Foo"));
app.get("/bar", (req, res) => res.send("Bar"));
app.post("/foo", (req, res) => res.send("Foo POST"));
app.post("/bar", (req, res) => res.send("Bar POST"));

const port = 8000;
app.listen(port, () => {
    console.log("App listening on http://localhost:"+port);
})