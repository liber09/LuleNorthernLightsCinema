import express from "express";
import fs from "fs/promises";
import { engine } from "express-handlebars";
import { marked } from "marked";
import { loadMovie, loadMovies } from "./src/movies.js";

const app = express();

app.get("/", async(req, res) => {
    const buf = await fs.readFile("./html/index.html");
    res.type("html");
    res.send(buf);
});

app.get("/opening-hours", async(req, res) => {
    const buf = await fs.readFile("./html/openingHours.html");
    res.type("html");
    res.send(buf);
});

app.get("/about", async(req, res) => {
    const buf = await fs.readFile("./html/about.html");
    res.type("html");
    res.send(buf);
});

app.get("/ticket-info", async(req, res) => {
    const buf = await fs.readFile("./html/ticket-info.html");
    res.type("html");
    res.send(buf);
});

app.get("/newsletter", async(req, res) => {
    const buf = await fs.readFile("./html/newsletter.html");
    res.type("html");
    res.send(buf);
});

app.get("/gift-card", async(req, res) => {
    const buf = await fs.readFile("./html/giftCard.html");
    res.type("html");
    res.send(buf);
});

app.get("/test", async(req, res) => {
    const buf = await fs.readFile("./html/movieSite.html");
    res.type("html");
    res.send(buf);
});

/* app.get("/", (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render("main", { layout: "index" });
}); */

/* app.get("/", async(req, res) => {
    await renderTemplate(res, "index.html", "/");
});

app.get("/about", async(req, res) => {
    await renderTemplate(res, "about.html", "/about");
});

app.get("/contact", async(req, res) => {
    await renderTemplate(res, "contact.html", "/contact");
}); */

app.engine(
    "handlebars",
    engine({
        helpers: {
            markdown: (md) => marked(md),
        },
    })
);

app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/movies", async(req, res) => {
    const movies = await loadMovies();
    res.render("home", { movies });
});

app.get("/movies/:movieId", async(req, res) => {
    const movie = await loadMovie(req.params.movieId);
    if (movie) {
        res.render("movie", { movie });
    } else {
        res.status(404).render("404");
    }
});

app.use("/static", express.static("./static"));

app.listen(5080);