import express, { json } from "express"
import { home, registerAdmin, registerCustomer, registerSeller,login, logout, products, getuser, deleteUser, updateProfile } from './routes/index.js'
// import checkCurrentUser from "./middlewares/checkCurrentUser.js"
import cors from 'cors'
import morgan from "morgan"

const app = express()
app.use(json())
app.use(cors())
app.use(morgan("common"));

app.use('/', home)
app.use('/registeradmin', registerAdmin)
app.use('/registercustomer', registerCustomer)
app.use('/registerseller', registerSeller)
app.use('/login', login)
app.use('/logout', logout)
app.use('/products', products)
app.use('/getuser', getuser)
app.use('/deleteuser', deleteUser)
app.use('/updateProfile', updateProfile)

// middleware
// app.use(checkCurrentUser)
export default app