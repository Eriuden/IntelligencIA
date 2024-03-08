"use client"

import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

export const PromptCard = ({post, handleTagClick,
handleEdit, handleDelete}) => {

  const [copied, setCopied] = useState("")
  const handleClick = () => {
    console.log("click")
  }

  return (
    <div>
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 
        cursor-pointer">
          <Image src={post.creator.image}
            alt="Image_utilisateur"
            width={40}
            height={40}
            className="rounded-full" 
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold
            text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm
            text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div> 

        <div onClick={() => {}}>
          <Image src={copied === post.prompt
            ? "/assets/icons/tick.svg"
            : "assets/icons/copy.svg"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm">{post.prompt}</p>
      <p className="font-inter text-sm blue-gradient cursor-pointer"
        onClick={() => handleClick && handleTagClick(post.tag)}>
        {post.tag}
      </p>
    </div>
  )
}
