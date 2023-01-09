const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class ProductTag extends Model { }

ProductTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                key: `id`,
                model: `product`
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                key: `id`,
                model: `tag`
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: `productTag`
    }
);

module.exports = ProductTag;