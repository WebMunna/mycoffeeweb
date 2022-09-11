import About from "../components/About"
import ContactUs from "../components/ContactUs"
import CustomerReview from "../components/CustomerReview"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import OurBlog from "../components/OurBlogs"
import OurMenu from "../components/OurMenu"
import OurProduct from "../components/OurProduct"

import AOS from 'aos'
import 'aos/dist/aos.css'


import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { homePageTrigger } from "../features/panelSlice"



const Home = () => {

  useEffect(() => {
   
    AOS.init({
    
      duration: 700,
      easing: 'ease'
    });
  },[])

  const dispatch = useDispatch()

   useEffect(() => {
    dispatch(homePageTrigger())
    console.log('home page triggered')
   })

  return (

    <div id="home">
        <Hero/>
        <About/>
        <OurMenu/>
        <OurProduct/>
        <CustomerReview/>
        <ContactUs/>
        <OurBlog/>
        <Footer/>
    </div>

  )
}

export default Home