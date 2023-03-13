import express from "express"
import allControllers from "../controllers/index.js"

const router = express.Router()
const { registerAdmin } = allControllers


//all router operation
router.post('/',registerAdmin)


export default router