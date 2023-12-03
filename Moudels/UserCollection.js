import mongoose, { Schema } from "mongoose"

const userSchema = mongoose.Schema({
    name:
    {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    links: Array,
})

export default mongoose.model("Users", userSchema)