"use client"

import { useState, useEffect } from "react"

import { PromptCard } from "./PromptCard"

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className="mt-16">
      {data.map((post) => (
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick()}
        />
      ))}
    </div>
  )
}

export const Feed = () => {
  const [searchText, setSearchText] = useState("")
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {

  }

  useEffect(()=> {
    const fetchPosts = async () => {
      const response = await fetch ("/api/prompt")
      const data = await response.json()

      setPosts(data)      
    }

    fetchPosts()
  }, [])

  return (
    <section>
      <form className="relative w-full flex-center">
        <input 
          type="text"
          placeholder="Chercher un mot clé ou nom d'utilisateur"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>

      <PromptCardList 
        data={{posts}}
        handleTagClick={() => {}}
      />
    </section>
  )
}
