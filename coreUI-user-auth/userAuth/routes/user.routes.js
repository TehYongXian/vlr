const { authJwt } = require("../middleware");
const { checkDuplicateCategoryName } = require("../middleware");
const controller = require("../contollers/user.contoller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get(
        "/api/test/user",
        [authJwt.verifyToken],
        controller.userBoard
    );

    app.get(
        "/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );
    
    app.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

    app.post(
        "/api/auth/categoryCreate",
        [
            checkDuplicateCategoryName.checkRegisterCategory
        ],
        controller.catBoard
    );

    app.get(
        "/api/auth/categories",
        controller.getCategories
    )

    app.delete(
        "/api/auth/categories/:id",
        controller.deleteCategory
    )
};