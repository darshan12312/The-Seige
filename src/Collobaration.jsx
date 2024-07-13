import { motion } from 'framer-motion'
import React from 'react'
import './index.css';

function Collobaration() {
  return (
    <div className='w-full  text-white '>


        
        <div className=' w-full h-[8vw]  pl-[1vw] pr-[1vw]  overflow-hidden' > 
            <h1 className=' tracking-wide ' >COLLABORATED ARTISTS <span className=' text-red-500  text-3xl' >.</span></h1>
        <motion.div initial={{x:"0"}} animate={{x:"-150%"}} transition={{ repeat:Infinity ,ease:"linear", duration: 30 }} className=' flex items-center text-[4vw] whitespace-nowrap  ' >
                <h1 className=' pr-[3vw] ' >SHREYASH SAGVEKAR,</h1>
                <h1 className=' pr-[3vw] ' >NATIQ,</h1>
                <h1 className=' pr-[3vw] ' >WOLF.CRYMAN,</h1>
                <h1 className=' pr-[3vw] ' >VEDANG,</h1>
                <h1 className=' pr-[3vw] ' >DEVONIAN,</h1>
                <h1 className=' pr-[3vw] ' >REBEL 7,</h1>
                <h1 className=' pr-[3vw] ' >FARHAN KHAN,</h1>
                <h1 className=' pr-[3vw] ' >SEZ ON THE BEAT,</h1>
                <h1 className=' pr-[3vw] ' >SHREYASH SAGVEKAR,</h1>
                <h1 className=' pr-[3vw] ' >NATIQ,</h1>
                <h1 className=' pr-[3vw] ' >WOLF.CRYMAN,</h1>
                <h1 className=' pr-[3vw] ' >VEDANG,</h1>
                <h1 className=' pr-[3vw] ' >DEVONIAN,</h1>
                <h1 className=' pr-[3vw] ' >REBEL 7,</h1>
                <h1 className=' pr-[3vw] ' >FARHAN KHAN,</h1>
                <h1 className=' pr-[3vw] ' >SEZ ON THE BEAT,</h1>
        </motion.div>
      
        </div>
    </div>
  )
}

export default Collobaration
