const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const { ROLES } = require("../models");
const db = require("../models");
const Category = db.category;

const checkDuplicateCategoryName = {
  checkRegisterCategory: (req, res, next) => {
    console.log("A:", req.body);
    console.log("checkRegisterCategory middleware");

    Category.findOne({
      where: {
        Name: req.body.categoryName
      }
    }).then(category => {
      if (category) {
        console.log("category exists")
        res.status(400).send({
          message: "Faildes! Product/Shop name is already is use! Pick another one!"
        });
        return;
      }

      console.log("category not exists");
      next();
    })
  }
};

module.exports = checkDuplicateCategoryName;