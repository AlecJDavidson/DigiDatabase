"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var DigimonSchema = new mongoose_1.Schema({
    // Digimon Image
    image: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    sprite: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    // Digimon Number
    digi_num: {
        type: Number,
        required: true,
        trim: true,
    },
    // Digimon Name
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    // Digimon Stage
    stage: {
        type: String,
        required: true,
        trim: true,
    },
    // Digimon type
    type: {
        type: String,
        required: true,
        trim: true,
    },
    // Digimon Memory
    memory: {
        type: Number,
        required: true,
        trim: true,
    },
    // Digimon Attributes
    attribute: {
        type: String,
        required: true,
        trim: true,
    },
    // Digimon Equipment Slots
    equip_slots: {
        type: Number,
        required: true,
        trim: true,
    },
    // Digimon Support Skills
    support_skills: {
        type: [String],
        required: true,
        trim: true,
    },
    // Digimon Digivolves From
    digivolves_from: {
        type: [String],
        required: true,
        trim: true,
    },
    // Digimon Digivolves Into
    digivolves_into: {
        type: [String],
        required: true,
        trim: true,
    },
    // Digimon Attacks
    attacks: {
        type: [String],
        required: true,
        trim: true,
    },
    // Digimon Levels
    level: {
        type: Number,
        required: true,
        trim: true,
    },
    // Digimon Hp
    hp: {
        type: Number,
        required: true,
        trim: true,
    },
    // Digimon Sp
    sp: {
        type: Number,
        required: true,
        trim: true,
    },
    // Digimon Atk
    atk: {
        type: Number,
        required: true,
        trim: true,
    },
    // Digimon Def
    def: {
        type: Number,
        required: true,
        trim: true,
    },
    // Digimon Int
    int: {
        type: Number,
        required: true,
        trim: true,
    },
    // Digimon Spd
    spd: {
        type: Number,
        required: true,
        trim: true,
    },
}, { timestamps: true } // Timestamp from when the document was created
);
// Export Digimon Model
exports.default = mongoose_1.default.model("Digimon", DigimonSchema);
