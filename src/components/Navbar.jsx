import React, { useState } from 'react';
import ResponsiveMenu from './components/ResponsiveMenu';
import {NavbarMenu} from '/src/mockData/Data.js'
import { CiSearch } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa6";

const Navbar = () => {
    const [open,setOpen] = useState(false);
  return (
    <>
    <nav>
        
        <div className='max-w-7xl mx-auto sm:px-8 lg:px-16  xl:px-20 flex justify-between items-center gap-8'>
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>   
            {/* Main icon and name */}
            <FaDumbbell />
            <p>coder</p>
            <p className='text-[#ff8901]'>gym</p>
        </div>
        <div className='hidden md:block'>
            {/* centralMenu */}
            <ul className='flex items-center gap-6 text-gray-600'>
                {NavbarMenu.map((items)=>{
                    return <li key={items.id}>
                        <a className='inline-block px-1 py-3 hover:text-[#ff8901] font-semibold' href={items.link 
                            
                        }>{items.title}</a>
                    </li>
                })}
            </ul>
        </div>
        <div className='flex items-center gap-4'> 
            {/* sideIcon */}
            <button className='text-2xl hover:bg-[#ff8901] hover:text-white rounded-full p-3 duration-200'>
                <CiSearch />
            </button>
            <button className='text-2xl hover:bg-[#ff8901] hover:text-white rounded-full p-3 duration-200'>
                <PiShoppingCart />
            </button>
            <button className='hover:bg-[#ff8901] text-[#ff8901] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-5 py-2 duration-200 hidden md:block '>
                login
            </button>

        </div>
        <div className='md:hidden ' onClick={()=>{
        setOpen(!open)
        }} >
           <MdMenu className='text-4xl'/>
        </div>
        </div>
    </nav>  
       <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar