import {useEffect, useState} from 'react'
import {PromptCard} from "./PromptCard"
import { useSearchParams } from 'next/navigation'


export const Searcher = () => {
    const [search, setSearch] = useState("")
    const searchParams = useSearchParams()
    const creator = searchParams.get("creator")
    const prompt = searchParams.get("prompt")
    const tag = searchParams.get("tag")

    useEffect(()=>{
        const searchResult = async()=> {
            const result = await fetch(`/api/prompt/${creator || prompt || tag}`)
            const data = await result.json()
            setSearch(data)

        if (creator || prompt || tag) searchResult()
        }   
    }, [creator, prompt, tag])
     
  return (
    <form>
        <input type="text" value={search} 
        placeholder="Rechercher"/>
    </form>
  )
}
