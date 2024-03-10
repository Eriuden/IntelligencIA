import { connectToDB } from "@/utils/DB"
import Prompt from "@/models/prompt"

export const GET = async (req, {params}) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({
            creator: params.id}).populate("créateur")

        return new Response(JSON.stringify(prompts), {
        status: 200})
    } catch (error) {
        return new Response("Echec de la requète", {status: 500})
    }
}