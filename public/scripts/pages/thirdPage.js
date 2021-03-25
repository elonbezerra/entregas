function homepage(req, res) {
  return res.render('./entrega-ii-a/entrega-ii-main.html');
}

function nameAbntConvert(req,res) {
  return res.render('./entrega-ii-a/names-abnt.html');
}

function towerOfHanoiPage(req,res) {
  return res.render('./entrega-ii-a/tower-of-hanoi.html');
}

module.exports = {
  homepage,
  nameAbntConvert,
  towerOfHanoiPage
}