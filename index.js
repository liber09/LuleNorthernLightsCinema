import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/*", async(req, res) => {
    const buf = await fs.readFile("index.html");
    res.type("html");
    res.send(buf);
});

app.get("/pages/*", async(req, res) => {
    const buf = await fs.readFile("index.html");
    res.type("html");
    res.send(buf);
});

app.use("/static", express.static("./static"));

/* app.get("/static/*", async(req, res) => {
    const path = req.path;
    try {
        const buf = await fs.readFile("./" + path);
        const fields = path.split(".");
        res.type(fields.pop());
        res.send(buf);
    } catch (err) {
        res.status(404).end();
    }
}); */

/* app.use("/*", async(req, res) => {
    const buf = await fs.readFile("./static/main.css");
    res.type("css");
    res.send(buf);
}); */

app.listen(3080);