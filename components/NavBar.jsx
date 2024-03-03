"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from "next-auth/react"

export const NavBar = () => {

  const {data: session} = useSession()

  const [providers, setProviders] = useState(null)
  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(()=> {
    const setTheProviders = async ()=> {
        const response = await getProviders()

        setProviders(response)
    }

    setTheProviders()
  }, [])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            Acceuil
        </Link>

        <div className='sm:flex hidden'>
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt"> Créer un post</Link>
                    <button type='button' onClick={signOut}>Déconnexion</button>

                    <Link href="/profile">
                        <Image src={session?.user.image} 
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="Profil"
                        />
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
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt"> Créer un post</Link>
                    <button type='button' onClick={signOut}>Déconnexion</button>

                    <Link href="/profile" onClick={()=> setToggleDropDown((prev)=>
                        !prev)}>
                        <Image src={session?.user.image} 
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="Profil"
                        />
                    </Link>

                    {toggleDropDown && (
                        <div>
                            <Link href="/profile"
                            onClick={() => setToggleDropDown(false)}>
                                Profil
                            </Link>

                            <Link href="/create-prompt"
                            onClick={() => setToggleDropDown(false)}>
                                Générer une prompt
                            </Link>

                            <button type='button' onClick={()=> {
                                setToggleDropDown(false)
                                signOut()
                            }}
                            className="mt-5 w-full">
                                Déconnexion
                            </button>
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
