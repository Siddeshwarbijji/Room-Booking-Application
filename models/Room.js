module.exports = (sequelize, DataTypes) => {
  sequelize.define("Room", {
    // Existing attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // New attribute
    isBooked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
