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

  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });
  app.get('/api/projects/', (req, res) =>{
    projects.findAll().then(projects=>{
      res.send(projects);
    })
/*     sequelize.query("SELECT * FROM Projects", { model: project }).then(projects => {
      console.log(projects);
      res.send(projects);
    }) */
  });
};