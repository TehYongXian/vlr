const db = require("../models");
const Cat = db.category;
const { Op } = require("sequelize");

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

exports.catBoard = (req, res) => {
    Cat.create({
        name: req.body.categoryName,
        categoryType: req.body.categoryType
    })
    .then (category => {
        res.status(204).send(`Category ${req.body.categoryName}`);
    })
    .catch(err => {
        res.status(500).send({ message: err.message});
    });
};

exports.getCategories = async (req, res) => {
    const search = req.query.search
    const page = req.query.page ?? 1
    const limit = 5
    const offset = (page - 1) * limit

    const total = await Cat.count({
        where: {
            [Op.or]: {
                name: {
                    [Op.substring]: search
                },
                categoryType: {
                    [Op.substring]: search
                }
            },
        },
      });

    categories = await Cat.findAll({
        where: {
            [Op.or]: {
                name: {
                    [Op.substring]: search
                },
                categoryType: {
                    [Op.substring]: search
                }
            },
        },
        offset,
        limit
    })

    res.send({
        data: categories,
        pagination: {
            total,
            current_page: page,
            per_page: limit,
        }
    })
}

