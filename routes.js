import express from "express"
import { CustomerController, LocationController, TransactionController } from "./controllers.js"

const routes  = express.Router()

routes.get('/customers/', CustomerController.readAll)
routes.get('/customers/:id', CustomerController.readById)
routes.post('/customers/', CustomerController.save)
routes.delete('/customers/:id', CustomerController.delete)
routes.patch('/customers/:id', CustomerController.update)

routes.get('/locations/', LocationController.readAll)
routes.get('/locations/:id', LocationController.readById)
routes.post('/locations/', LocationController.save)
routes.delete('/locations/:id', LocationController.delete)
routes.patch('/locations/:id', LocationController.update)

routes.get('/transactions/', TransactionController.readAll)
routes.get('/transactions/:id', TransactionController.readById)
routes.post('/transactions/', TransactionController.save)
routes.delete('/transactions/:id', TransactionController.delete)
routes.patch('/transactions/:id', TransactionController.update)

export default routes