import { Router } from "express"
import adminRouter from "./user.route"
import userRouter from "./user.route"


const userIndexRouter = Router()

userIndexRouter.use("/user", userRouter)
userIndexRouter.use("/admin", adminRouter)
export default userIndexRouter