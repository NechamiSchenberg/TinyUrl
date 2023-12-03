
import Users from "../Moudels/UserCollection";

const userContext = {

    getAllUsers: async()=>{
        let users = await Users.find();
        return users;
    },

    getUserById: async(id)=>{
        const users = await Users.findById(id);
        return users;
    },
    getUserByNameAndPass: async(name,pass)=>{
        // const Users = await userModel.findOne({"name":name }) && userModel.findOne({"password":pass });
        const users = await Users.findOne({"name":name ,"password":pass });
        return users;
    },

    addUser: async( {name,email})=>{
        const newUser = new Users( {name,email});
        newUser.save();
        return newUser;
    },

    updateUser: async(id,User)=>{
        const updateUser = await Users.findByIdAndUpdate(id,User,{new:true});
        updateUser.save();
        return updateUser;
    },

    removeUser: async(id)=>{
        const deleted = await Users.findByIdAndRemove(id);
        return deleted;
    }
}

export default userContext;