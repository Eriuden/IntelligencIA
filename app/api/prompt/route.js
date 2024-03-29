import { connectToDB } from "@/utils/DB"
import Prompt from "@/models/prompt"

export const GET = async (req) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate("créateur")

        return new Response(JSON.stringify(prompts), {
        status: 200})
    } catch (error) {
        return new Response("Echec de la requète", {status: 500})
    }
}