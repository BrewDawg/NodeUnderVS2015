"use strict";
var homeController = (function () {
    function homeController() {
    }
    homeController.prototype.index = function (req, res) {
        res.render("index", { title: "Express + Vash" });
    };
    return homeController;
}());
module.exports = new homeController();
//# sourceMappingURL=homeController.js.map