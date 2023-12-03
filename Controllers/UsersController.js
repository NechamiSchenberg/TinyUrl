import Users from '../Moudels/UserCollection.js';

const UsersController = {
    getEnteries: async (req, res) => {
        let users = await Users.find();
        res.json(users);
    },

    getUserById: async (req, res) => {
        const { id } = req.params;
        let users = await Users.findById(id);
        res.json(users);
    },

    addUser: async (req, res) => {
        const { name, email,links } = req.body;
        try {
            const newUser = await Users.create({ name, email, links });
            await newUser.save();

            res.json(newUser);
        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    DeleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await Users.findByIdAndDelete(id);
            res.json(deleted);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    updateUser: async (req, res) => {
        const { id } = req.params;
        try {
            const update = await Users.findByIdAndUpdate(id);
            res.json(update);
        } catch (error) {

        }
    }
}

export default UsersController;