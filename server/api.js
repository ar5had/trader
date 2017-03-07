module.exports = function (app) {
  const isLoggedIn = (req, res) => {
    if (req.isAuthenticated()) {
      console.log('req.isAuthenticated', req.isAuthenticated());
			res.status(200).send();
		} else {
			res.status(401).send();
		}
	}

  app.get('/isUserLoggedIn', isLoggedIn);
};
