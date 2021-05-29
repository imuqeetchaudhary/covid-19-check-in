var express = require('express');
var router = express.Router(); 
const user = require("../controlers/user")
const validation = require("../middlewares/validation")
const userSchema = require("../validations/user")
const authentication = require("../middlewares/authenticateToken")

router.get("/profile", authentication, user.show)
router.post("/register", validation(userSchema), user.register)
router.post("/login", validation(userSchema), user.login)
router.patch("/update", authentication, validation(userSchema), user.update)

// function parseVenueCode(code) {
//     code = code.toUpperCase();
//     let result = 0;
//     let scale = 1;
//     for (let i = 0; i < code.length; i++) {
//         let charCode = code.charCodeAt(i);
//         if (charCode > 64) {
//             charCode -= 65;
//         } else {
//             charCode -= 22;
//         }
//         result += charCode * scale;
//         scale *= 36;
//     }
//     return result;
// }

// router.use(function(req, res, next) {
//     if ('user' in req.session) {
//         next();
//     } else {
//         res.redirect('/login.html');
//     }
// });

// router.post('/check-in', function(req, res, next) {
//     var checkInCode = req.body.code;
//     if (checkInCode === undefined) {
//         res.sendStatus(400);
//     } else {
//         let code = parseVenueCode(checkInCode);
//         // Add to check-in table.
//         let response = { venue: '', time: ''};
//         res.json(response);
//     }
// });

// router.get('/check-in', function(req, res, next) {
//     var checkInCode = req.query.code;
//     if (checkInCode === undefined) {
//         res.sendStatus(400);
//     } else {
//         let code = parseVenueCode(checkInCode);
//         // Add to check-in table.
//         res.send('Some html');
//     }
// });

// router.get('/hotspots', function(req, res, next) {
//     var hotspotVenues = []; // From DB
//     var hotspotAreas = [];  // From DB

//     var hotspots = {
//         areas: hotspotAreas,
//         venues: hotspotVenues
//     };

//     res.json(hotspots);
// });

module.exports = router;