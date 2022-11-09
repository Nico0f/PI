const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATEONLY
    },
    rating_int: {
      type: DataTypes.INTEGER
    },
    rating_float: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    img: {
      type: DataTypes.STRING
    },
    FormCreated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false
    });
};
