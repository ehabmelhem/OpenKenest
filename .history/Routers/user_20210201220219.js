const userControler = require("../Controler/user");
const router = require("express").Router();
// router.get("/get-user", userControler.sendUser);
// router.get("/vote", userControler.sendVote);
router.get("/get-takanon", userControler.getTakanon);
router.get("/get-takanon", userControler.getTakanon);
module.exports = router;
