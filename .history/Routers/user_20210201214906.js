const userControler = require("../Controler/user");
const router = require("express").Router();
// router.get("/get-user", userControler.sendUser);
// router.get("/vote", userControler.sendVote);
router.get("/stam", userControler.stam);
router.get("/stam", userControler.stam);
module.exports = router;
