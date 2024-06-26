import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const navLinks = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    return (
        <div className='flex justify-between items-center h-20 w-full px-4 text-white bg-black'>
            <div>
                <h1 className='text-5xl ml-2'>MTM</h1>
            </div>

            <ul className='hidden md:flex'>
                {
                    navLinks.map(({ id, link }) =>
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                            {link}
                        </li>
                    )
                }
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 pr-4 md:hidden text-gray-500'>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>

            {
                nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                        {
                            navLinks.map(({ id, link }) =>
                                <li key={id} className='px-4 cursor-pointer capitalize text-4xl py-4 font-medium text-gray-500 hover:scale-105 duration-200'>
                                    {link}
                                </li>
                            )
                        }
                    </ul>
                )
            }



        </div>
    );
};

export default NavBar;