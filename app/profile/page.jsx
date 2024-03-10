"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import { Profile } from "@/components/Profile"

export const MyProfile = () => {

  const {data: session} = useSession()

  const [posts, setPosts] = useState([])

  useEffect(()=> {
    const fetchPosts = async () => {
      const response = await fetch (`/api/users/${session?.user.id
      /posts}`)
      const data = await response.json()

      setPosts(data)   
      
      if (session?.user.id) fetchPosts()
    }

    fetchPosts()
  }, [])

  const handleEdit = () => {

  }

  const handleDelete = async() => {

  }

  return (
    <Profile
      name=""
      desc=""
      data={posts}
      handleEdit={handleEdit()}
      handleDelete={handleDelete()}
    />
  )
}
