module.exports = function(app) {
    app.post(function (req, res) {
        req.logout();
        res.redirect('/');
      });
};
