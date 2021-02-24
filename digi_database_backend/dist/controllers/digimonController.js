"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.add = exports.view = void 0;
//DigimonController.ts
//Import Digimon Model
var digimonModel_1 = __importDefault(require("../models/digimonModel"));
// // import bcrypt
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// var secret = process.env.ACCESS_TOKEN_SECRET;
// For queries - Sorts by name alphabetically
var view = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allDigimon, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, digimonModel_1.default.find(req.body).sort({ first_name: 1 }).exec()];
            case 1:
                allDigimon = _a.sent();
                if (allDigimon) {
                    return [2 /*return*/, res.status(200).json({
                            status: "success",
                            message: "Working",
                            data: allDigimon
                        })];
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        status: 'error',
                        message: err_1.stack
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.view = view;
//for  creating a new Digimon
var add = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var digimon, newDigimon, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    digimon = new digimonModel_1.default();
                    // var hashedPassword = bcrypt.hashSync(req.body.password, 8);			// Hashed - String - Required
                    digimon.image = req.body.image;
                    digimon.sprite = req.body.sprite;
                    digimon.digi_num = req.body.digi_num;
                    digimon.name = req.body.name;
                    digimon.stage = req.body.stage;
                    digimon.type = req.body.type;
                    digimon.memory = req.body.memory;
                    digimon.attribute = req.body.attribute;
                    digimon.equip_slots = req.body.equip_slots;
                    digimon.support_skills = req.body.support_skills;
                    digimon.digivolves_from = req.body.digivolves_from != null ? req.body.digivolves_from : null;
                    digimon.digivolves_into = req.body.digivolves_into != null ? req.body.digivolves_into : null;
                    digimon.attacks = req.body.attacks;
                    digimon.level = req.body.level;
                    digimon.hp = req.body.hp;
                    digimon.sp = req.body.sp;
                    digimon.atk = req.body.atk;
                    digimon.def = req.body.def;
                    digimon.int = req.body.int;
                    digimon.spd = req.body.spd;
                    return [4 /*yield*/, digimon.save()];
                case 1:
                    newDigimon = _a.sent();
                    if (newDigimon) {
                        res.status(201).json({
                            status: "success",
                            message: "New Digimon created!",
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    res.json({ message: err_2 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.add = add;
// //for authenticatin Digimon by token
// export const auth = async (req:Request , res:Response)=>{
//     try {
//         let foundDigimon = Digimon.findOne({token:req.body.token}).exec()
//         if(foundDigimon){
//             return res.status(200).json({message:'Token Valid', auth:true})
//         }
// 	} catch (err) {
// 		res.json({ message: err.message })
// 	}
// }
// //for logging in
// export const  login = async(req:Request, res:Response)=>{
//     try{
//         const filter = {email:req.body.email}
//         let foundDigimon = await Digimon.findOne({email:req.body.email}).exec()
//         console.log(foundDigimon)
//         if(foundDigimon){
//             let passwordIsValid = bcrypt.compareSync(req.body.password, foundDigimon.password);
//             if(!passwordIsValid){
//                 return res.status(400).json({auth:false, token:null})
//             }
//             const  DigimonToken = jwt.sign({ id: foundDigimon._id }, secret, {
//                 expiresIn: 50400 // expires in 14 hour(s)
//             });
//             await  Digimon.updateOne(filter, {token:DigimonToken})
//             await foundDigimon.save()
//             return res.status(200).json({
//                 message:'Digimon logged in successfully',
//                 data: foundDigimon,
//                     auth: true,
//                     token: DigimonToken
//         })
//         }
//         else{
//             res.status(400).json({message:'Digimon not found'})
//         }
//     }
//     catch(err){
//         return res.status(500).json({
//             error:err.stack
//         })
//     }
// }
// //for logging out 
// export const logout = async (req:Request, res:Response)=>{
//     try {
// 		let Digimon = await Digimon.findOne({ token: req.body.token }).exec()
// 		if (Digimon) {
// 			Digimon.token = null;
// 			if (Digimon) {
// 				res.status(204).json({
// 					status: "success",
// 					message: "Digimon logged out Successfully",
// 					data: Digimon
// 				})
// 			} else {
// 				res.json({ message: 'Failed to logout', status: 400 })
// 			}
// 		} else {
// 			res.json({ message: 'Digimon not found' })
// 		}
// 	} catch (err) {
// 		res.json({ message: err })
// 	}
// }
//update the Digimon
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, updatedDigimon, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                data = __assign({}, req.body);
                console.log(data);
                return [4 /*yield*/, digimonModel_1.default.findByIdAndUpdate(req.body._id, data, { new: true, useFindAndModify: false })];
            case 1:
                updatedDigimon = _a.sent();
                console.log(updatedDigimon);
                if (updatedDigimon) {
                    return [2 /*return*/, res.status(200).json({
                            status: 'success',
                            message: "Digimon updated successfully",
                            data: updatedDigimon
                        })];
                }
                else {
                    return [2 /*return*/, res.status(400).json({
                            message: 'Digimon not found'
                        })];
                }
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                return [2 /*return*/, res.status(400).json({ message: err_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.update = update;
//delete the Digimon
