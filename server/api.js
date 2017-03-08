module.exports = function (app) {
  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
		} else {
			res.status(401).json({'error': 'Unauthorized Request!'});
		}
	}

  app.get('isUserLoggedIn', isLoggedIn, (req, res) => res.sendStatus(200));

  // remove if else in sending req.user data
  // when you implement the authentication for paths/pages
  app.get('/api/getProfileData', isLoggedIn, (req, res) => {
    if(req.user) {
      const {name, address, phoneNo, email} = req.user;
      res.json({name, address, phoneNo, email});
    } else {
      res.json({name: 'unauthorisedUser'});
    }
  });

  app.post('/api/setProfileData', isLoggedIn, (req, res) => {
    // res.json(req.body);
    // if(req.user) {
    //   const {name, address, phoneNo, email} = req.user;
    //   res.json({name, address, phoneNo, email});
    // } else {
    //   res.json({name: 'unauthorisedUser'});
    // }
  });
};
