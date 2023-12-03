import express from 'express';
import UsersController from "../Controllers/UsersController.js";

const UserRouter=express.Router();
UserRouter.delete("/DeleteUser/:id",UsersController.DeleteUser)
UserRouter.post("/addUser", UsersController.addUser);
UserRouter.get("/getEnteries", UsersController.getEnteries)
UserRouter.get("/getUserById/:id", UsersController.getUserById)
UserRouter.put("/updateUser/:id", UsersController.updateUser)
export default UserRouter;