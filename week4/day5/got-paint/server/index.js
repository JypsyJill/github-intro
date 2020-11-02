const express = require("express"),
    app = express(),
    ctrl = require("./controller.js"),
    port = 3036;

    app.use(express.json());



//    app.get("/api/watercolor", ctrl.findTime);
    app.get("/api/watercolor", ctrl.getData)
    app.get("/api/watercolor/:tutorialTime", ctrl.timeForProjects);
    app.post("/api/watercolor/name", ctrl.addProjectName);
    app.put("/api/watercolor", ctrl.editArt);
    app.delete("/api/watercolor/:id", ctrl.endProject);

    app.listen(port, () => console.log(`server listening on port ${port}`));