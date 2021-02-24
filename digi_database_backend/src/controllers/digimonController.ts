//DigimonController.ts
//Import Digimon Model
import Digimon from '../models/digimonModel'
import {Request, Response } from 'express'

// // import bcrypt
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// var secret = process.env.ACCESS_TOKEN_SECRET;

// For queries - Sorts by name alphabetically
export const view = async (req:Request, res:Response)=> {
    try{

        let allDigimon = await Digimon.find(req.body).sort({first_name:1}).exec()
        if(allDigimon){
            return res.status(200).json({
                status: "success",
                message: "Working",
                data: allDigimon
            })
        
        }
    }
    catch(err){
        return res.status(500).json({
            status:'error',
            message: err.stack
        })
    }	
		
};

//for  creating a new Digimon
export const add = async function(req:Request, res:Response) {
    try {
		const digimon = new Digimon();
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

		//Save and check error
		let newDigimon = await digimon.save()
		if (newDigimon) {
			res.status(201).json({
				status: "success",
				
				message: "New Digimon created!",
			})
		} 
		

	} catch (err) {
		res.json({ message: err })
	}
}

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
export const update = async(req:Request, res:Response)=>{
    try{
        const data = {...req.body}
        console.log(data)
        let updatedDigimon = await Digimon.findByIdAndUpdate(req.body._id, data, {new:true, useFindAndModify:false})
        console.log(updatedDigimon)
        if(updatedDigimon){
         
           return  res.status(200).json({
                status:'success',
                message:"Digimon updated successfully",
                data:updatedDigimon

            })
        }
        else{
            return res.status(400).json({
                message:'Digimon not found'
            })
        }

    }
    catch(err){
       return  res.status(400).json({message:err.message})
    }

}

//delete the Digimon

