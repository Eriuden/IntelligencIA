import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email déjà existant"],
        required: [true, "Email requis"],
    },
    userName: {
        type: String,
        required: [true, "Nom requis"],
    },

    image: {
        type: String,
    }
})

const User = models.User || model("User", userSchema)

export default User;