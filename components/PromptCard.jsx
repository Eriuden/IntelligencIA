"use client"

import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

export const PromptCard = ({post, handleTagClick,
handleEdit, handleDelete}) => {
  return (
    <div>
      < div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 
        cursor-pointer">
          <Image src={post.creator.image}
            alt="Image_utilisateur"
            width={40}
            height={40}
            className="rounded-full" />
        </div> 
      </div>
    </div>
  )
}
