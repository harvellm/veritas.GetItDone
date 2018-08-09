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
     let newUser = users.build(req.body);
    newUser.save()
    .then(anotherTask => {
      let r = 1;
      res.send(anotherTask);
      // you can now access the currently saved task with the variable anotherTask... nice!
    })
    .catch(err => {
      let r= 1;
      res.status(500).send(err)
      // Ooops, do some error-handling
    })
  });
};