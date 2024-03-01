import React from 'react'
import Feed from '../components/Feed'

export const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='text-center'>
        Découvrir et partager
        <br className='max-md:hidden'/>
        <span className='text-center'>Prompts générés par l'IA</span>
      </h1>

      <Feed/>
        
    </section>
  )
}
