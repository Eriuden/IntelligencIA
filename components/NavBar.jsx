"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from "next-auth/react"

export const NavBar = () => {

  const isUserLoggedIn = true

  const [providers, setProviders] = useState(null)
  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(()=> {
    const setTheProviders = async ()=> {
        const response = await getProviders()

        setTheProviders(response)
    }

    setProviders()
  }, [])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            Acceuil
        </Link>

        <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt"> Créer un post</Link>
                    <button type='button' onClick={signOut}>Déconnexion</button>

                    <Link href="/profile">
                        Profil 
                    </Link>
                </div>
            ): (
                <>
                    {providers && 
                        Object.values(providers).map((provider) => (
                            <button type='button'
                            key={provider.name}
                            onClick={()=> signIn(provider.id)
                            }>
                                Connexion
                            </button>
                        ))}
                </>
            )}
        </div>

        {/*Version mobile */}
        <div className='sm:hidden flex relative'>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt"> Créer un post</Link>
                    <button type='button' onClick={signOut}>Déconnexion</button>

                    <Link href="/profile" onClick={()=> setToggleDropDown((prev)=>
                        !prev)}>
                        Profil 
                    </Link>

                    {toggleDropDown && (
                        <div>
                            <Link href="/profile"
                            onClick={() => setToggleDropDown}></Link>
                        </div>
                    )}
                </div>
            ): (
                <>
                    {providers && 
                        Object.values(providers).map((provider) => (
                            <button type='button'
                            key={provider.name}
                            onClick={()=> signIn(provider.id)
                            }>
                                Connexion
                            </button>
                        ))}
                </>
            )}
        </div>
    </nav>
  )
}
