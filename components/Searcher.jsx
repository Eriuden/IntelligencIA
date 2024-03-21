import {useEffect, useState} from 'react'
import {PromptCard} from "./PromptCard"
import { useSearchParams, useRouter } from 'next/navigation'


export const Searcher = () => {
    const [search, setSearch] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const searchParams = useSearchParams()
    const creator = searchParams.get("creator")
    const prompt = searchParams.get("prompt")
    const tag = searchParams.get("tag")
    const router = useRouter()

    useEffect(()=>{
        const searchResult = async()=> {
            const result = await fetch(`/api/prompt/${creator || prompt || tag}`)
            const data = await result.json()
            setSearch(data)

        if (creator || prompt || tag) searchResult()
        }   
    }, [creator, prompt, tag])

    const submitSearch = async(e)=> {
        if (submitted === false) {
            e.preventDefault()
        setSubmitted(true)

        if(!creator || prompt || tag) return alert("Données introuvables")

        try {
            const result = await fetch(`api/prompt/${creator || prompt || tag}`,
            {
              method:"GET",
              body: JSON.stringify({
                creator: search.creator,
                prompt: search.prompt,
                tag: search.tag 
              })
            })
      
            if(result.ok) {
              router.push("/search")
            }
          } catch (error) {
            console.log(error)
          } finally {
            setSubmitted(false)
          }
        }     
    }
     
  return (
    <form onSubmit={submitSearch()}>
        <input type="text" value={search} 
        placeholder="Rechercher"/>
    </form>
  )
}
