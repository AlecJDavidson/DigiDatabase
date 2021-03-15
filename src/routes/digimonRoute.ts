//initialize express router
import express from 'express'
//Import Controllers
import {view, add , update} from '../controllers/digimonController'
// import {verifyToken} from '../middleware/verifyToken'

import digimon from '../models/digimonModel'
const router = express.Router()


// digimon routes
// router.route('/auth')
//     .post(auth)
// router.route('/login')
//     .post(login)
// router.route('/logout')
//     .post(logout)
router.route('/digimon')
    .get(view)
    .post(add)
    .put(update)
    .patch(update)
    
router.route('/digimonBy')
    .post(view)

//Export API routes
 export default router