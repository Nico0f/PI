const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Genre', {
    genre_name: {
      type: DataTypes.STRING,
    },
    games: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    }
  }, {
    timestamps: false
    });
};