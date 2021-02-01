const userControler = require("../Controler/user");
const router = require("express").Router();
// router.get("/get-user", userControler.sendUser);
// router.get("/vote", userControler.sendVote);
router.get("/get-takan", userControler.getTakanon);
module.exports = router;
