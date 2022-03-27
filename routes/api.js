const router = require("express").Router();

const { home } = require("../controllers/home");
const { baucua } = require("../controllers/baucua");
const { taixiu } = require("../controllers/taixiu");

router.get("/", home);
router.get("/baucua", baucua);
router.get("/taixiu", taixiu);

module.exports = router;
