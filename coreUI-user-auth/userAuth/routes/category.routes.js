const { checkDuplicateCategoryName } = require("../middleware");
const controller = require("../contollers/user.contoller");

module.exports - function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
}