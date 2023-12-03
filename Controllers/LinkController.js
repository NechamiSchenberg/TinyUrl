import Users from '../Moudels/UserCollection.js';
import Links from '../Moudels/linkCollection.js'

const LinkController = {

    addLink: async (req, res) => {
        const { userId, originalUrl, uniqueName } = req.body;
        try {
            const user = await Users.findById(userId);
            const newLink = new Links({
                originalUrl,
                uniqueName,
                clicks: []
            })

            await newLink.save();
            user.links?.push(newLink);
            await user.save();
            res.status(200).json({
                success: true,
                message: 'Link added successfully'
            });
        } catch (error) {
            console.error('Error adding link:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to add link'
            });
        }
    },

    getLinks: async (req, res) => {
        try {
            const links = await Links.find();
            res.status(500).json(links);
        } catch {
            res.status(500).json();
        }
    },
}

export default LinkController