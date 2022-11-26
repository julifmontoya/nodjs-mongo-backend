const { Router } = require("express");
const Hotel = require("../controllers/hotel");
const router = Router();

router.post("/hotels/", Hotel.create)
router.get("/hotels/", Hotel.findAll);
router.get("/hotels/:id", Hotel.findOne);
router.put("/hotels/:id", Hotel.findOneUpate);
router.delete("/hotels/:id", Hotel.delete);

module.exports = router;