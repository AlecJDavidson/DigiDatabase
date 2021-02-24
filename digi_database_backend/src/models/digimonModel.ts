import IDigimon from "../interfaces/digimonInterface";
import mongoose, { Schema } from "mongoose";

const DigimonSchema: Schema = new Schema(
	{
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
	},
	{ timestamps: true } // Timestamp from when the document was created
);

// Export Digimon Model
export default mongoose.model<IDigimon>("Digimon", DigimonSchema);
