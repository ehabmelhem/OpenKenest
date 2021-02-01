const express = require("express");
const bodyparser = require("body-parser");
const usersRouter = require("./Routers/user");
const app = express();

app.use(addAuth);
app.use("/users", usersRouter);

const port = process.env.PORT || 3002;
function addAuth(req, res, next) {
  res.cookie("role", user.role, { maxAge: 90000000000, httpOnly: true });
  next();
}

app.listen(port, function () {
  console.log("localhsot", port);
});
