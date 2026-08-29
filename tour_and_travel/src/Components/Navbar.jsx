import React from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from 'react'    
import Responsivemenu from './Navbar/Responsivemenu';




const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className='sticky py-6  mx-auto top-0 transition-all bg-transparent'>
            <div className='bg-black/75 px-4 fixed w-full z-50 top-0 py-2'>
                <div className='max-w-7xl mx-auto py-2 px-5 flex bg-transparent justify-between items-center'>
                    <Link to='/'>
                        <h1 className='text-2xl text-white font-bold  '>
                            trip
                            <span className='text-red-500'>
                                buddy
                            </span>
                        </h1>

                    </Link>

                    <div className='flex items-center gap-5'>
                        <nav className='hidden md:flex gap-7'>
                            <ul className='flex gap-7 font-semibold items-center text-xl text-white'>
                                <Link to='/'><li>Home</li></Link>
                                <Link to='/about'><li>About Us</li></Link>
                                <Link to='/gallery'><li>Gallery</li></Link>
                                <Link to='/contact'><li>Contact</li></Link>
                                <Link to='/tours'><li>Tours</li></Link>
                            </ul>
                            <button className='bg-red-500 text-white px-4 py-1 rounded-md font-semibold'>
                                Book Now
                            </button>


                        </nav>

                        <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer md:hidden text-white'
                        size ={30}/>

                    </div>
                </div>
                <Responsivemenu showMenu={showMenu} setShowMenu={setShowMenu}/>

            </div>
        </header>
    )
}

export default Navbar