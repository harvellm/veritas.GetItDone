module.exports = function(sequelize, DataTypes){
    return sequelize.define('Projects', {
        ProjectId:{
            type: DataTypes.INTEGER,
            unique:true,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        ClientName: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        ClientPriority: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        ProjectName: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        ProjectLead: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        ProjectStatus: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        ProjectHealth: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true }, 
        ProjectStartDate: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },  
        ProjectCompletionDate: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },           
        ReleaseDate: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        BillingMonth: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        EstimatedDevelopment: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        EstimatedDatabase: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        EstimatedVDP: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        EstimatedBAPM: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        EstimatedQA: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        RemainingDevelopment: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        RemainingDatabase: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        RemainingVDP: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        RemainingBAPM: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        RemainingQA: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true },
        ReadyToStart: {
            type: DataTypes.BOOLEAN,
            unique: false,
            allowNull: true
        },
        createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
               
    })
};