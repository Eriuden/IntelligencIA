import {Schema, model, models} from "mongoose";

const promptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "Utilisateur",
    },

    prompt: {
        type: String,
        required: [ true, "Champ requis"],
    },

    tag: {
        type: String,
        required: [ true, "Champ requis"],
    }
})

const Prompt = models.Prompt ||  model("Prompt", promptSchema)

export default Prompt