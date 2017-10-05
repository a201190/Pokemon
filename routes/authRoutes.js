const passport = require('passport');
const loginRequire=require('.././middleware/requireLogin');
module.exports = (router) => {
  router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  }));
  router.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/Pokemon');
  });
  router.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
    res.send(req.user);
  });
  router.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
  
};
