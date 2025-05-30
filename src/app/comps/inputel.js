import React from 'react'
import { Theme } from '../local'
import { motion } from 'framer-motion'
import { BsPlus } from 'react-icons/bs'
function InputEl(props) {
  return (
    <>

    {props.select
    ? <div className="w-full">
      <label className="block uppercase tracking-wide text-moon-200/80 text-xs text-right font-bold mb-2" for="grid-state">
    : {props.label} 
      </label>
      <div className="relative">
        <select value={props.value} onChange={(e)=>{props.outputfunc(e.target.value)}} className="block appearance-none w-full bg-gray-200
         border border-gray-200 text-gray-400 text-sm py-3 px-4 pr-8 rounded leading-tight
          focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option disabled value={null}   selected> أختر {props.label} </option>
        {props.data&&props.data.map((datum,index)=>(

<option  value={datum.id} key={index}>
 { props.iscats?datum.name_ar + " / ":datum.attributes.name_ar }  
   { props.iscats?datum.catagory&&datum.catagory&&datum.catagory.name_ar :"" } 
</option>
))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        
      </div>

    </div>
    :
    <motion.div whileTap={{ scale: 1.03 }} className="w-full">
    <label className="block uppercase text-right tracking-wide text-moon-200/80 text-xs font-bold mb-2" for="grid-last-name">
     : {props.label} 
    </label>
    <input value={props.value}  onChange={(e)=>{props.outputfunc(e.target.value)}} className="appearance-none  block w-full bg-gray-200  border
     border-gray-200 rounded disabled:bg-gray-400 disabled:hover:cursor-not-allowed disabled:text-white py-3 px-3 leading-tight transition-colors text-sm text-right focus:outline-none focus:bg-white
      focus:border-moonsec-100/80" id="grid-last-name" disabled={props.disabled&&props.disabled}
       min={props.min&&props.min} max={props.min&&props.max} 
        type={props.num?"number":props.date?"date":props.ispass?"password":"text"} placeholder={props.ispass?"********": props.label}/>
  </motion.div>}
    
    
    </>
    


  )
}

export default InputEl