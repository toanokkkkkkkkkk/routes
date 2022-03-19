const router = require("express").Router();

const { home } = require("../controllers/home");
const { baucua } = require("../controllers/baucua");

router.get("/", home);
router.get("/baucua", baucua);

module.exports = router;
