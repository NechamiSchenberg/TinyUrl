import Users from '../Moudels/UserCollection.js';
import Links from '../Moudels/linkCollection.js'
import { getClientIp } from 'request-ip';

const RedirectController = {
    redirectLink: async (req, res) => {
        const { uniqueName } = req.params;
        const targetParamValue = req.query.targetParamValue;
        const ipAddress = getClientIp(req);

        try {
            const link = await Links.findOne({ 'uniqueName': uniqueName });
            link.clicks.push({
                insertedAt: new Date(),
                ipAddrees: ipAddress,
                targetParamValue: targetParamValue
            })

            await link.save();
            console.log(link.originalUrl);
            res.redirect(link.originalUrl);
        } catch (error) {
            console.error('Error redirecting:', error);
            res.status(500).json({ error: 'Error redirecting' })
        }
    },
}

export default RedirectController