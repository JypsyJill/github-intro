const express = require("express"),
  app = express(),
  ctrl = require("./controller.js"),
  port = 4040;

app.use(express.json());

app.get("/api/pokemon", ctrl.getPokemon);
app.get("/api/pokemon/:id", ctrl.getOnePokemon);
app.post("/api/pokemon/:id", ctrl.addToTeam);
app.put("/api/pokemon/:id", ctrl.editNickname);
app.delete("/api/pokemon/:id", ctrl.removeFromTeam);

app.listen(port, () => console.log(`server listening on port ${port}`));
