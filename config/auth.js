'use strict';

const APP_URL = 
  process.env.NODE_ENV === "production" ? process.env.APP_URL : process.env.DEV_APP_URL;

module.exports = {
  'facebookAuth': {
    'clientID': process.env.FACEBOOK_KEY,
    'clientSecret': process.env.FACEBOOK_SECRET,
    'callbackURL': APP_URL + 'auth/facebook/callback'
  },
  'twitterAuth': {
    'clientID': process.env.TWITTER_KEY,
    'clientSecret': process.env.TWITTER_SECRET,
    'callbackURL': APP_URL + 'auth/twitter/callback'
  },
  'googleAuth': {
    'clientID': process.env.GOOGLE_KEY,
    'clientSecret': process.env.GOOGLE_SECRET,
    'callbackURL': APP_URL + 'auth/google/callback'
  }
};
