import express from "express";
import { engine } from "express-handlebars";


const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", (req, res) => {
  res.render("index");
});
// /LuleNorthernLightsCinema/pages/wholeProgramPage.html

const MENU = [
    {
        label: 'Öppetider & Kontakt',
        link: '/openingHours',
    },
    {
        label: 'Om våran biograf',
        link: '/about',
    },
    {
        label: 'Biljettinfo',
        link: '/ticket-info',
    },
    {
        label: 'Nyheter',
        link: '/newsletter',
    },
    {
        label: 'Köp Presentkort',
        link: '/giftCard',
    }
];

function mainMenu() {

}

// HEADER NAV 
app.get("/openingHours", (req, res) => {
    res.render("openingHours");
});
app.get("/about", (req, res) =>{
    res.render("about");
});

app.get("/ticket-info", (req, res) => {
    res.render('ticket-info');
});

app.get("/giftCard", (req, res) => {
    res.render('giftCard');
});

// app.get('/:name', (res, req) => {
//     console.log(req.params.name);
//     const temp = req.params;
//     console.log(temp);
//     res.render(temp);
// });

app.get("/wholeProgramPage", (req, res) => {
    res.render("WholeProgramPage");
});
 
app.get("/bistro-menu", (req, res) => {
    res.render('bistro-menu');
});

app.get("/giftCard", (req, res) => {
    res.render('giftCard');
});

app.get("/booking", (req, res) => {
    res.render('booking');
});

app.get("/matine", (req, res) => {
    res.render('matine');
});

app.get("/newsLetter", (req, res) => {
    res.render('newsLetter');
});

app.get("/ticket-info", (req, res) => {
    res.render('ticket-info');
});

app.get("/premiereFriday", (req, res) => {
    res.render('premiereFriday');
});

app.get("/upcoming", (req, res) => {
    res.render('upcoming');
});





app.use("/static", express.static("./static"));
app.use("/js", express.static("./js"));
app.use("/src", express.static("./src"));

//const PORT = process.env.PORT || 3080;
app.listen(4000);
