import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { contactPost } from "../features/panelSlice"
import { toast } from 'react-toastify'

import { GoogleMap, Marker, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

import Fade from 'react-reveal/Fade';

import AOS from 'aos'
import 'aos/dist/aos.css'



const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


const Contact = ({data}) => {


    const dispatch = useDispatch()


    // const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyBzOrO7M0I30-TWV8QvqhykefnFE3U2c9U"});

   
    useEffect(() => {
   
      AOS.init({
      
        duration: 700,
        easing: 'ease'
      });
    },[])

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDGAlKESHCfMfCLbifMB0PRD8spCyOlPC4"
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])






    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ response, setResponse ] = useState('false')

    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState



    const submit = (e) => {
      e.preventDefault()
    dispatch(contactPost({ name:name, email:email, number:number, response:response }))

    toast.success('Thanks for contact with us. You will be responsed within 24 hour !', {
      position: toast.POSITION.TOP_CENTER
    })
    setName('')
    setEmail('')
    setNumber('')
    }


    const center = useMemo(() => ({ lat:44, lng:-80}), []);
   
    // let mainBox = `bg-blue-200 p-[10px] text-center h-[350px] flex flex-col items-center justify-between border-[1px] ${nightMode ? 'border-slate-200' : 'border-zinc-800'} ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-xl `
    let mainBox = `w-full rounded-md flex sm:flex-col md:flex-row lg:flex-row ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-2xl `
    let mapBox = 'bg-blue-200 rounded-md sm:w-[100%] md:w-[50%] lg:w-[50%]  sm:h-[250px] md:h-[300px] lg:h-[400px] '
    let formBox = '  sm:w-[100%] md:w-[50%] lg:w-[50%] p-[20px] flex flex-col justify-between sm:h-[300px] md:h-[300px] lg:h-[400px]'
    let formTitle = 'font-bold text-[30px] mx-auto '
    let nameInput = `sm:h-[45px] md:h-[45px] lg:h-[55px] rounded-md pl-[5px] ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
    let emailInput = `sm:h-[45px] md:h-[45px] lg:h-[55px] rounded-md pl-[5px] ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
    let numberInput = `sm:h-[45px] md:h-[45px] lg:h-[55px] rounded-md pl-[5px] ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
    let contactBtn = `mx-auto bg-amber-600 text-slate-200 mt-[10px] sm:w-[120px] md:w-[120px] lg:w-[140px] cursor-pointer  h-[40px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
   

  return (
    <Fade bottom>
    <div  className={mainBox}>
    <div  className={mapBox}>
      { isLoaded &&
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
       <Marker position={center}/>
      </GoogleMap>
        }
    </div>
   
      <form className={formBox}>
         <Fade left> <div  className={formTitle}>GET IN TOUCH</div></Fade>
          <Fade right> <input  className={nameInput} type="text" value={name}  placeholder="name" onChange={(e) => setName(e.target.value)}/> </Fade>
         <Fade top> <input  className={emailInput} type="email" value={email}  placeholder="email" onChange={(e) => setEmail(e.target.value)}/> </Fade>
         <Fade bottom> <input  className={numberInput} type="text" value={number}  placeholder="number" onChange={(e) => setNumber(e.target.value)}/> </Fade>
          <button  onClick={submit} className={contactBtn} type="submit">Contact Now</button>
      </form>
  

    </div>
    </Fade>
  )
}

export default Contact