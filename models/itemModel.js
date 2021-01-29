module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('item', {
        itemName: {
            type: DataTypes.NAME,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })
    return Item;
