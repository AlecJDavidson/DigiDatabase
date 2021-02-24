import { Document } from "mongoose";

export default interface IDigimon extends Document {
	image: string;
	sprite: string;
	digi_num: number;
	name: string;
	stage: string;
	type: string;
	memory: number;
	attribute: string;
	equip_slots: number;
	support_skills: Array<string>;
	digivolves_from: Array<string>;
	digivolves_into: Array<string>;
	attacks: Array<string>;
	level: number;
	hp: number;
	sp: number;
	atk: number;
	def: number;
	int: number;
	spd: number;
}
