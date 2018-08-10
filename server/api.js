// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

/* const jwt = require('express-jwt');
const jwks = require('jwks-rsa'); */

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */
var bcrypt = require('bcrypt');
const saltRounds = 10;

const Sequelize = require('sequelize');
module.exports = function(app, config) {
  // Authentication middleware
/*   const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  }); */

/*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */
const sequelize = new Sequelize('VeriProjectTracker', config.SQL_UID, config.SQL_PWD, {
  dialect: 'mssql'
});
 const logger = require('./logger')(sequelize);

const projects = sequelize.import('./models/project');
const users = sequelize.import('./models/user')
  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });
  app.get('/api/projects/', (req, res) =>{
    projects.findAll().then(projects=>{
      res.send(projects);
    })
    .catch(err=>{
      res.status(500).send(err);
    });

  });
  app.post('/api/projects', (req, res)=>{
    projects
    .build(req)
    .save()
    .then(anotherTask => {
      // you can now access the currently saved task with the variable anotherTask... nice!
    })
    .catch(err => {
      // Ooops, do some error-handling
    })
  });
  app.post('/api/users', (req, res)=>{
     
     bcrypt.hash(req.body.Password, saltRounds, function(err, hash) {
       if(!err){
        req.body.Password = hash;
        let newUser = users.build(req.body);
        newUser.save()
        .then(anotherTask => {
          res.send(anotherTask);
        })
        .catch(err => {
          res.status(500).send(err)
        })
      }
    });
  
  });
  app.post('/api/users/validate', (req, res)=> {
    let attempt = req.body;
    users.findOne({ where: {UserName: attempt.UserName} }).then(user => {
      if(user === null){
        res.status(401).send('Username not found.');
      } else {
        bcrypt.compare(attempt.Password, user.Password, function(err, res) {
          res.status(200).send({isAdmin:user.role===1});
      });
      }
    });
    app.post('/api/logs',(req, res)=>{
      /**
       * {level: 'DEBUG', message: 'Your log message goes here'}
       */
      let logEntry = req.body;
      logger.info(logEntry);

    });
  });
};