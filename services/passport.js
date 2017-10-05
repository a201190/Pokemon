const passport=require('passport')
const FacebookStrategy  = require('passport-facebook');
const mongoose=require('mongoose');
const keys=require('../config/keys');
const User=mongoose.model('pokemon');
passport.serializeUser((user, done)=>{
  done(null, user.id);
});
passport.deserializeUser((id, done)=>{
  User.findById(id)
  .then(user=>{
    done(null, user);
  });
});
passport.use(new FacebookStrategy({
            clientID:keys.facebookClientID,
            clientSecret:keys.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
            proxy: true,
            cookie: true,
            xfbml: true,
            version: 'v2.10',
            enableProof: true
          
        },
        (accessToken, refreshToken, profile, done) => {
          User.findOne({facebookId:profile.id})
          .then((existingUser)=>{
            if(existingUser){profile
              done(null,existingUser);
            }else {
              new User({facebookId: profile.id}).save()
              .then(user=>done(null,user));
            }
          })
        }
    )
);
