module.exports = function (sequelize) {

    var elasticsearch = require('elasticsearch');
    var client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace'
    });
    var Elasticsearch = require('winston-elasticsearch');

var esTransportOpts = {
  level: 'info',
  client:client
};
const winston = require("winston");


const level = process.env.LOG_LEVEL || 'debug';
const logger = winston.createLogger({
  
    transports:  [
        new winston.transports.Console({
            level: level,
            timestamp: function () {
                return (new Date()).toISOString();
            }
        }),
        new Elasticsearch(esTransportOpts)


    ]
  }); 
  return logger;
};
