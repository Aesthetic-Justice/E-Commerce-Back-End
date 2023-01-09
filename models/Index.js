const Category = require(`./Category`);
const Product = require(`./Product`);
const ProductTag = require(`./ProductTag`);
const Tag = require(`./Tag`);

Category.hasMany(Product, { foreignKey: `category_id`, onDelete: `CASCADE` });

Product.belongsTo(Category, { foreignKey: `category_id` });

Tag.belongsToMany(Product, { through: ProductTag });

Product.belongsToMany(Tag, { through: ProductTag });

module.exports = { Category, Product, ProductTag, Tag };
