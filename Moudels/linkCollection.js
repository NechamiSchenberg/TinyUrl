import mongoose from 'mongoose'

const linkSchema = mongoose.Schema({
    "originalUrl": String,
    "uniqueName": String,
    "clicks":
        [{
            "insertedAt": Date,
            "ipAddress": String,
            "targetParamValue": String,
        }],
})

export default mongoose.model("Links", linkSchema)