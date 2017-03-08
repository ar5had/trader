module.exports = function (app) {
  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
		} else {
			res.status(401).send();
		}
	}

  app.get('/isUserLoggedIn', isLoggedIn);

  app.get('/getProfileData', isLoggedIn, (req, res) => {
    const {name, address, phoneNo, email} = req.user;
    res.json({name, address, phoneNo, email});
  });
};
