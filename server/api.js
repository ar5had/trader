import User from '../models/user';
import Item from '../models/item';
import objectAssign from 'object-assign';
import cloudinary from 'cloudinary';
import multer from 'multer';

const upload = multer({ dest: '../uploads/', limits: { fileSize: 512000 } });

module.exports = function (app) {

  cloudinary.config({
    cloud_name: process.env.CAPI_CLOUD_NAME,
    api_key: process.env.CAPI_KEY,
    api_secret: process.env.CAPI_SECRET
  });

  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.json({ 'error': 'UNAUTHORIZED' });
    }
  };

  app.get('/isUserLoggedIn', isLoggedIn, (req, res) => res.json({ 'error': '' }));

  app.get('/api/getProfileData', isLoggedIn, (req, res) => {
    const {name, address, phoneNo, email, dp} = req.user;
    res.json({ name, address, phoneNo, email, dp });
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

  app.post('/api/addMyItem', upload.single('itemPic'), (req, res) => {
    const ownerInfo = { itemOwnerId: req.user._id, itemOwner: req.user.name };
    const data = objectAssign({}, req.body, { itemAdditionDate: new Date().toDateString().slice(4), key: new Date().getTime() }, ownerInfo);
    const newItem = new Item(data);

    cloudinary.uploader.upload(`${req.file.path}`, function (result) {
      newItem.itemPic = result.secure_url;
      newItem.save((err, doc) => {
        if (err) {
          console.error('Error happened while adding new myitem-', err);
          res.sendStatus(500);
        } else {
          const item = objectAssign({}, doc._doc);
          delete item._id;
          delete item.__v;
          delete item.itemOwnerId;
          res.json(item);
        }
      });
    });
  });

  app.get('/api/getMyItemsData', isLoggedIn, (req, res) => {
    Item.find({ itemOwnerId: req.user._id.toString() },
      ['key', 'itemName', 'itemCurrency', 'itemAdditionDate', 'itemPrice', 'itemDescription', 'itemTags'],
      {
        sort: { key: -1 }
      }
    )
      .exec((err, docs) => {
        if (err) {
          console.error('Error happened while loading myItems-', err);
          res.sendStatus(500);
        } else {
          res.json(docs);
        }
      });
  });

  app.delete('/api/deleteMyItem/:key', isLoggedIn, (req, res) => {
    Item.find({ key: req.params.key })
      .remove((err) => {
        if (err) {
          console.error('Error happened while deleting item with key', req.params.key, "-", err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
  });

  app.get('/api/getAllItemsData', (req, res) => {
    Item.find({},
      ['key', 'itemName', 'itemCurrency', 'itemPrice'],
      {
        sort: { key: -1 }
      }
    )
      .exec((err, docs) => {
        if (err) {
          console.error('Error happened while loading allItems-', err);
          res.sendStatus(500);
        } else {
          res.json(docs);
        }
      });
  });

  app.get('/api/getIndividualItemData/:key', (req, res) => {
    Item.findOne({ key: req.params.key },
      ['key', 'itemName', 'itemCurrency', 'itemPrice',
        'itemDescription', 'itemTags', 'itemOwner', 'itemOwnerId']
    )
      .exec((err, doc) => {
        if (err) {
          console.error('Error happened while loading individual Item-', err);
          res.sendStatus(500);
        } else {
          if (doc) {
            const item = objectAssign({}, doc._doc);
            const ownItem = item.itemOwnerId === (req.user && req.user._id.toString());
            delete item._id;
            delete item.itemOwnerId;
            delete item.__v;
            item.ownItem = ownItem;
            res.json(item);
          } else {
            res.sendStatus(400);
          }
        }
      });
  });
};
