module.exports = function (sequelize) {


const winston = require("winston");
const WinstonTransportSequelize = require('winston-transport-sequelize');
const options = {
  sequelize: sequelize, // sequelize instance [required]
  tableName: 'applog', // default name
  meta: { project: 'GetItDone' }, // meta object defaults
  modelOptions: { timestamps: true }, // merge model options
}
const level = process.env.LOG_LEVEL || 'debug';
const logger = winston.createLogger({
  
    transports:  [
        new winston.transports.Console({
            level: level,
            timestamp: function () {
                return (new Date()).toISOString();
            }
        }),
        new WinstonTransportSequelize(options)

    ]
  }); 
  return logger;
};
