import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/", async(req, res) => {
    const buf = await fs.readFile("./templates/index.html");
    res.type("html");
    res.send(buf);
});



app.get("/opening-hours", async(req, res) => {
    const buf = await fs.readFile("./templates/openingHours.html");
    res.type("html");
    res.send(buf);
});

app.get("/about", async(req, res) => {
    const buf = await fs.readFile("./templates/about.html");
    res.type("html");
    res.send(buf);
});

app.get("/ticket-info", async(req, res) => {
    const buf = await fs.readFile("./templates/ticket-info.html");
    res.type("html");
    res.send(buf);
});

app.get("/newsletter", async(req, res) => {
    const buf = await fs.readFile("./templates/newsletter.html");
    res.type("html");
    res.send(buf);
});

app.get("/gift-card", async(req, res) => {
    const buf = await fs.readFile("./templates/giftCard.html");
    res.type("html");
    res.send(buf);
});

app.use("/static", express.static("./static"));

app.listen(5080);

app.get("/", async(req, res) => {
    await renderTemplate(res, "index.html", "/");
});

app.get("/about", async(req, res) => {
    await renderTemplate(res, "about.html", "/about");
});

app.get("/contact", async(req, res) => {
    await renderTemplate(res, "contact.html", "/contact");
});

app.use("/static", express.static("./static"));