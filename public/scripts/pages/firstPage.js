function homepage(req, res) {
  return res.render("./firstSubmissionA/index.html");
}

function cart(req, res) {
  return res.render("./firstSubmissionA/carrinho.html");
}

function contact(req, res) {
  return res.render("./firstSubmissionA/contato.html");
}

function details(req, res) {
  return res.render("./firstSubmissionA/detalhesDoProduto.html");
}

function news(req, res) {
  return res.render("./firstSubmissionA/news.html");
}

function product(req, res) {
  return res.render("./firstSubmissionA/produto.html");
}

module.exports = {
  homepage,
  cart,
  contact,
  details,
  news,
  product,
};
