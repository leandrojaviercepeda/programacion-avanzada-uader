const express = require("express");
const Handlebars = require("hbs");
const port = process.env.PORT || 3000;

//App instance
const app = express();

//App properties
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

//Handlebars properties
Handlebars.registerPartials(__dirname + '/views/partials');

//Renders
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/about", (req, res) => {
  res.render("/partials/about");
});

app.get("/documentation", (req, res) => {
  res.render("/partials/documentation");
});

app.get("/design_styles", (req, res) => {
  res.render("/partials/design_styles");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/docs", (req, res) => {
  res.render("docs");
});

app.get("/portfolio", (req, res) => {
  res.render("/partials/portfolio");
});



//Listen app
app.listen(port, () => {
  console.log(`Aplication running at port: ${port}`);
});
