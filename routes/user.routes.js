import {Router} from "express"
import { getUser,getUsers } from "../controllers/user.controller.js";
import { authenticateAccessToken } from "../middlewares/authenticate.middleware.js";
const userRouter = Router();

userRouter.get("/me",authenticateAccessToken,getUser)
userRouter.get("/users",authenticateAccessToken,getUsers);
export default userRouter;