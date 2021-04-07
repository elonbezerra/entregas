const page = require("./pages/pages");
const firstPage = require("./pages/firstPage");
// const secondPage = require('./pages/secondPage');
const thirdPage = require("./pages/thirdPage")

const express = require("express");
// const path = require("path");
const nunjucks = require("nunjucks");

const app = express();

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.static("src"));

app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  autoescape: true,
  noCache: true,
});

app
  .get("/", page.landingPage)

  // FIRST PAGE
  .get("/firstSubmission", firstPage.homepage)
  .get("/firstSubmission/produto", firstPage.product)
  .get("/firstSubmission/news", firstPage.news)
  .get("/firstSubmission/contato", firstPage.contact)
  .get("/firstSubmission/cart", firstPage.cart)
  .get("/firstSubmission/details", firstPage.details)

// SECOND SUBMISSION
// .get('/secondSubmission', )

// THIRD SUBMISSION
.get('/thirdSubmission', thirdPage.homepage)
.get('/thirdSubmission/nameAbntConvert', thirdPage.nameAbntConvert)
.get('/thirdSubmission/towerOfHanoiPage', thirdPage.towerOfHanoiPage)

module.exports = app;
