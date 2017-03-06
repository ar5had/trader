module.exports = function (app) {
  const isLoggedIn = (req, res) => {
    console.log('isuserloggedin');
		res.json({user: 123});
    // if (req.isAuthenticated()) {
    //   console.log('req.isAuthenticated', req.isAuthenticated());
		// 	res.status(200).send();
		// } else {
		// 	res.status(401).send();
		// }
	}

  app.get('/isUserLoggedIn', isLoggedIn);
};
