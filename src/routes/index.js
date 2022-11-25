const { Router } = require("express");
const Article = require("../controllers/hotel");
const router = Router();

router.post("/hotels/", Article.create)
router.get("/hotels/", Article.findAll);
router.get("/hotels/:id", Article.findOne);
router.put("/hotels/:id", Article.findOneUpate);
router.delete("/hotels/:id", Article.delete);

module.exports = router;