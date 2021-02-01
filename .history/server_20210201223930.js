const express = require("express");
const bodyparser = require("body-parser");
const usersRouter = require("./Routers/user");
const app = express();
app.use(express.static("ibraheemKittani_ehabMelhem/"))

app.use("/users", usersRouter);

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("localhsot", port);
});
