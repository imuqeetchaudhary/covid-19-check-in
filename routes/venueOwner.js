var express = require('express');
var router = express.Router();
const venueOwner = require("../controlers/venueOwner")
const validation = require("../middlewares/validation")
const venueOwnerSchema = require("../validations/venueOwner")
const authentication = require("../middlewares/authenticateToken")

router.post("/register", validation(venueOwnerSchema), venueOwner.register)
router.post("/login", validation(venueOwnerSchema), venueOwner.login)
router.patch("/update", authentication, validation(venueOwnerSchema), venueOwner.update)
router.get("/profile", authentication, venueOwner.show)

module.exports = router;