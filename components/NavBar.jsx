"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from "next-auth/react"

export const NavBar = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            Acceuil
        </Link>
    </nav>
  )
}
