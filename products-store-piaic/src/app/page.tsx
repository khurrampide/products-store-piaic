import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Promotions from './components/Promotions'
import { createClient } from 'contentful'


export default function Home() {
  console.log("Home")
  return (
    <>
      
      <Hero/>
      <Promotions/>

    </>
  )
}
