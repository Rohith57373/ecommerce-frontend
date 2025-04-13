import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { Link } from 'react-router-dom'

import avataricon from "../assets/avatar.png"
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/Orders" },
    { name: "cart Page", href: "/cart" },
    { name: "Check out", href: "/checkout" }

]

function Navbar() {
    const cartItems = useSelector(state => state.cart.cartItems)


    const [isDropDown, setIsDropDown] = useState(false)
    // console.log(isDropDown)
    // const currentUser = false;


    const { currentUser, logout } = useAuth()

    const handleLogOut = () => {
        logout()
    }

    return (
        <div>
            <header className="max-w-screen-2xl mx-auto px-4 py-6 ">
                <nav className='flex justify-between items-center'>
                    {/* left side */}
                    <div className="flex items-center md:gap-16 gap-4">
                        <Link to="/"> <FaBarsStaggered className='size-6' />
                        </Link>

                        {/* search input */}
                        <div className='relative sm:w-72 w-40 space-x-2'>
                            <IoIosSearch className='absolute inline-block left-3 inset-y-2' />
                            <input type="text" placeholder='   Search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
                        </div>

                    </div>




                    {/* rightside */}
                    <div className="relative flex items-center md:space-x-3 space-x-2">
                        <div>
                            {
                                currentUser ? <>
                                    <button onClick={() => setIsDropDown(!isDropDown)}>
                                        <img src={avataricon} alt="" className={`size-7 rounded-full  ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                                    </button>

                                    {/* show drop down */}
                                    {
                                        isDropDown && (
                                            <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                                <ul className='py-2'>
                                                    {
                                                        navigation.map((item) => (
                                                            <li key={item.name} onClick={() => setIsDropDown(!isDropDown)}>
                                                                <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                    <li>
                                                        <button
                                                            onClick={handleLogOut}
                                                            className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'>Logout </button>
                                                    </li>
                                                </ul>

                                            </div>
                                        )
                                    }
                                </> : < Link to="/login"> <FaRegUserCircle className='size-6' /> </Link>
                            }
                        </div>

                        <button className='hidden sm:block'>
                            <FaRegHeart className='size-6' />
                        </button>

                        <Link to="/cart" className="bg-yellow-300 p-1 sm:px-6 px-2 flex items-center rounded-sm">
                            <IoBagHandle className='' />

                            {
                                cartItems.length > 0 ? <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span> :
                                    <span className='text-sm font-semibold sm:ml-1'>0</span>
                            }

                        </Link>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
