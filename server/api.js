module.exports = function (app) {
  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
		} else {
			res.sendStatus(401);
		}
	}

  app.get('/isUserLoggedIn', isLoggedIn, (req, res) => res.sendStatus(200));

  app.get('/getProfileData', isLoggedIn, (req, res) => {
    if(req.user) {
      const {name, address, phoneNo, email} = req.user;
      res.json({name, address, phoneNo, email});
    } else {
      res.json({name: 'unauthorisedUser'});
    }
  });
};
