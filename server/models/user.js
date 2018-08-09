module.exports = function(sequelize, DataTypes){
    return sequelize.define('Users', {
        UserId:{
            type: DataTypes.INTEGER,
            unique:true,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        UserName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false },
        Password: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        Email: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        Role: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: true },
        ResetToken: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        LastLogin: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        History: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
            createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    })
};