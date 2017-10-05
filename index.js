const  express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
 const passport=require('passport');
const  cookieSession=require('cookie-session');
const  cookieParser = require('cookie-parser');
const  bodyParser=require('body-parser');
const flash = require('connect-flash');
const cors=require('cors');
const app=express();
const router=express.Router();
const proxy = require('express-http-proxy');
 require('./models/Users');
 require('./services/passport');
const  options = {
  db: {native_parser: true},
  server: {poolSize: 5},
  replset: {rs_name: 'myReplicaSetName'},
  user: keys.mongoUserName,
  pass: keys.mongoUserPassword,
};
 mongoose.connect(keys.mongooseURI, options);
 app.use(bodyParser.json());
 app.use(
     cookieSession({
     maxAge: 30*24*60*60*1000,
     keys: [keys.cookieKey],
   })
 );
 app.use(passport.initialize());
 app.use(passport.session());
 app.use(flash()); 
 app.set('view engine', 'ejs');
app.use(cookieParser());
require('./routes/authRoutes')(app);
 const PORT=process.env.PORT || 5000;
app.listen(PORT);
