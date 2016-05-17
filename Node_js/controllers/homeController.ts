class homeController {

    index(req, res) {
        res.render("index", { title: "Express + Vash" });
    }

}

export = new homeController();