'use client'

import React from 'react'

import Styles from "../styles/Home.module.css"
import { Theme,CURRENCY, API_URL, IMG_URL, DEF_IMG } from '../local'
import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary';
import { Spinner } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useState,useEffect } from 'react'
import { Button } from '@nextui-org/react'
import { FaHeart, FaStar } from 'react-icons/fa6'
import { MAIN_STYLE } from '../styles/style'
import Head from 'next/head'
import { BsStarFill,BsCheck2Circle,BsCheckCircleFill,BsCartPlusFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'



export default function Product(props) {
  const router = useRouter();
  const [loading,setLoading]= useState(false);
 const [cimg,setCimg] = useState("");
const [colors,setColors]=useState(null);

  useEffect(() => {
//getprice();

// }
//

colorDisplay()
   }, [])

// const getprice = ()=>{
//   for (let i = 0; i < props.data.length; i++) {
    
    
//   }
// }


const colorDisplay = ()=>{
  var colo = []
  var colob = []

for (let i = 0; i < props.data.varients.length; i++) {
 
  if(colo.includes(props.data.varients[i].colors[0].id)){

  }else{
    colo.push(props.data.varients[i].colors[0].id);
    colob.push(props.data.varients[i].colors[0]);
    
  }
  
}


setColors(colob);
}

   
function oldPrice(newPrice, discountPercentage) {
  const discountFactor = 1 - (discountPercentage / 100);
  const oldPrice = newPrice / discountFactor;
  return parseInt(oldPrice);
}

    return (

      
        <motion.div
        onClick={()=>{setLoading(true); 
          router.push(`/products?pid=${props.data.id}`)
        }} 
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="   overflow-hidden
     rounded-none lg:rounded-md sm:rounded-none border border-gray-100 bg-white shadow-none lg:shadow-md md:shadow-md sm:shadow-none"  
        style={{display:'block',
        display:"flex",alignItems:"center",justifyContent:"center"
        ,padding:10,textAlign:'left',width:"100%",height:"100%"}}>

<div className=' h-full w-full'  style={{
  
  display:'flex',
  alignItems:"center",justifyContent:"space-between",flexDirection:"column" 
}} >
    
  <div sty className='w-full h-48 min-w-full ' style={{position:"relative"}} >


{loading?<div className='flex h-full justify-center items-center'>

  <div style={{zIndex:10}}>
        <div style={{justifyContent:"center",alignItems:"center"}} className="lds-facebook"><div></div><div></div><div></div></div>
        </div>

</div>:<div>
  
  <>
<div >
<CldImage
  
  fill objectFit='cover'
   className=' rounded-md  ' 
  src={JSON.parse(props.data.img)[0].thumb}
   //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Description of my image"
/>
</div>
  <span    onClick={()=>{router.push(`/categories?cid=${props.data.subcatagory.id}`)}}  className="absolute cursor-pointer bottom-0 left-0 m-2 rounded-full bg-black 
    text-center text-xs p-1 px-3 font-medium text-white">
      {props.data.subcatagory.name_ar  }
      </span>

</>
  
  </div>}








  
      </div>

      
      <div  onClick={()=>{router.push(`/products?pid=${props.data.id}`)}}  className="mt-2 px-1 flex justify-end  w-full">

      <h5  className="text-base  
        tracking-normal  text-white bg-moon-200 inline font-bold px-4 py-1  rounded-full ">{props.data&&props.data.code} </h5>
    
  </div>

  <div className="mt-1 mb-0 flex items-start  w-full flex-col justify-between">
  <div className='flex align-middle w-full justify-end py-2  ' > 
  

  {colors&&colors.map((color,index)=>(
                
                <div className='align-middle w-full justify-center mr-1 '   key={color.id}>
                    <Tooltip className="bg-moon-300 font-medium py-2 px-5 text-white" content={color.name_ar} >
                     <div style={{backgroundColor:color.colorCode}} className=' h-3 w-3 rounded-full  ' >
                     
                     </div>
                     </Tooltip>
                    </div>
           
               ))}


<div className='flex py-1   w-full  justify-end items-center space-x-1'>


<div className='text-xs'>
  (121) <span className='text-moon-200 font-bold' >3.0</span>
</div>


<FaStar className='text-yellow-300' />
  <FaStar className='text-yellow-300' />
  <FaStar className='text-yellow-400' />
  <FaStar className='text-yellow-400' />
  <FaStar className='text-yellow-400' />


</div>

    </div>
      <div className=' w-full flex flex-col justify-end '>
        <div className="text-xl font-bold text-moon-300/75 flex flex-row  justify-end  " > <div>{CURRENCY} </div> <div> {props.data.varients[0].price} 
          </div>  </div>

          <div className="text-sm text-moon-200 line-through flex flex-row   justify-end" >
       
          {props.data.varients[0].old_price > 0 && (
  <div className="text-sm text-moon-200 line-through flex flex-row justify-end">
    <div>{CURRENCY}</div>
    <div>
      {oldPrice(props.data.varients[0].price, props.data.varients[0].old_price)}
    </div>
  </div>
)}


            </div>
      
      </div>
    
    </div>
    
  {/* <div href="#" className="flex hidden  items-center justify-center rounded-md bg-moon-200 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      
       to cart</div > */}




      </div>

    
   
    


        </motion.div>
    )
}
