import express from 'express'
const router = express.Router()
import baseController from '../controller/baseController.js'

router.get('/',baseController.home)
router.post('/save', baseController.CompletePayment)
export default router