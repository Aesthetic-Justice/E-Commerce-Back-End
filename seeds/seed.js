const sequelize = require(`../config/connection`);
const { Category, Product, ProductTag, Tag } = require(`../models`);

const categorySeed = require(`./Category.json`);
const tagSeed = require(`./Tag.json`);
const productSeed = require(`./Product.json`);
const productTagSeed = require(`./ProductTag.json`); 

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const categories = await Category.bulkCreate(categorySeed, {
        individualHooks: true,
        returning: true
    });

    const tags = await Tag.bulkCreate(tagSeed, {
        individualHooks: true,
        returning: true
    });

    const products = await Product.bulkCreate(productSeed, {
        individualHooks: true,
        returning: true
    });

    const productTags = await ProductTag.bulkCreate(productTagSeed,{
        individualHooks: true,
        returning: true
    });

    process.exit(0);
}

seedDatabase();