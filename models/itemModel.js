module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('item', {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })
    return Item;
}