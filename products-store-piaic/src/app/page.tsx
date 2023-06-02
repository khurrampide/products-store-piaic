import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Promotions from './components/Promotions'
import { createClient } from 'contentful'
import ProductsHome from './components/ProductsHome'
import HomeSeeAllProducts from './components/HomeSeeAllProducts'
import HomeSubscribe from './components/HomeSubscribe'
import HomeFooterMenus from './components/HomeFooterMenus'


export default function Home() {
  console.log("Home")
  return (
    <>
    
      <Hero/>
      <Promotions/>
      <ProductsHome/>
      <HomeSeeAllProducts/>
      <HomeSubscribe/>
      <HomeFooterMenus/>

    </>
  )
}
