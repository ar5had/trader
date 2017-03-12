import User from '../models/user';
import Item from '../models/item';
import objectAssign from 'object-assign';

module.exports = function (app) {
  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.json({ 'error': 'UNAUTHORIZED' });
    }
  };

  app.get('/isUserLoggedIn', isLoggedIn, (req, res) => res.json({ 'error': '' }));

  // remove if else in sending req.user data
  // when you implement the authentication for paths/pages
  app.get('/api/getProfileData', isLoggedIn, (req, res) => {
    if (req.user) {
      const {name, address, phoneNo, email, dp} = req.user;
      res.json({ name, address, phoneNo, email, dp });
    } else {
      res.json({ name: 'Unauthorised User' });
    }
  });

  app.post('/api/setProfileData', isLoggedIn, (req, res) => {
    const {landmark, city, state, pinCode, country, localAddress} = req.body;
    const address = { landmark, city, state, pinCode, country, localAddress };
    const phoneNo = req.body.phoneNo;
    const email = req.body.email;
    const newProfileData = req.query.edit === 'location' ? { address } : { phoneNo, email };
    User.findByIdAndUpdate(req.user.id, newProfileData, { new: true })
      .exec((err, doc) => {
        if (err) {
          res.status(500).json({ error: "Error happened while updating user info!" });
        } else {
          const {address, phoneNo, email} = doc;
          res.json({ address, phoneNo, email });
        }
      });
  });

  app.post('/api/addItem', (req, res) => {
    const item = objectAssign({}, req.body, {itemAdditionDate: new Date()});
    Item.create(item, (err, doc) => {
      res.json(doc);
    });
  });
};
