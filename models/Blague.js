const { DataTypes } = require("sequelize");
const connexion = require("./../DB/dbconnect");

const Blague = connexion.define("Blague", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reponse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Blague;
