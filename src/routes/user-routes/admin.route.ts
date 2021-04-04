import { Router } from "express"
import AdminController from "../../controllers/user.controller"


const adminRouter = Router()
const adminController = new AdminController()

adminRouter.get("/", adminController.get)
adminRouter.post("/", adminController.post)
adminRouter.get("/:id", adminController.get)
adminRouter.delete("/:id", adminController.delete)

export  default adminRouter