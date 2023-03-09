async function index(req, res, next) {
  res.render('index', {
    title: 'Super Folio',
    page: req.url,
  });
}

module.exports = { index };
