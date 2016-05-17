/// <reference path="../typings/main.d.ts" />


import * as express from "express";

class homeController {

    index(req: express.Request, res: express.Response) {
        res.render("index", { title: "Express + Vash" });
    }

}

export = new homeController();