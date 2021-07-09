module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        name: {
            type: Sequelize.STRING
        },
        categoryType: {
            type: Sequelize.STRING
        }
    });

    return Category;
};