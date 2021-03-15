"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//initialize express router
var express_1 = __importDefault(require("express"));
//Import Controllers
var digimonController_1 = require("../controllers/digimonController");
var router = express_1.default.Router();
// digimon routes
// router.route('/auth')
//     .post(auth)
// router.route('/login')
//     .post(login)
// router.route('/logout')
//     .post(logout)
router.route('/digimon')
    .get(digimonController_1.view)
    .post(digimonController_1.add)
    .put(digimonController_1.update)
    .patch(digimonController_1.update);
router.route('/digimonBy')
    .post(digimonController_1.view);
//Export API routes
exports.default = router;
