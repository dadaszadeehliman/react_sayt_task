import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";



export const Navbar = () => {
    return (
        <header className='mt-4'>
            <div className='container esas'>
                <div className='esas_1'>
                    <FaSearch />
                    <input type="text" placeholder='search' />
                </div>
                <div className='esas_btn'>
                    <button className='btn_1'>SHOOPERS</button>
                </div>
                <div className='esas_2'>
                    <IoPersonSharp />
                    <FcLike />
                    <FaShoppingCart />
                </div>
            </div>
            <div className='container mt-3'>
                <nav className='nav'>
                    <ul className='nav__menu'>
                        <li className='nav__item'><a href="#" className='nav__link'>Home</a></li>
                        <li className='nav__item'><a href="#" className='nav__link'>About</a></li>
                        <li className='nav__item'><a href="#" className='nav__link'>Shop</a></li>
                        <li className='nav__item'><a href="#" className='nav__link'>Cataloge</a></li>
                        <li className='nav__item'><a href="#" className='nav__link'>New aries</a></li>
                        <li className='nav__item'><a href="#" className='nav__link'>Contacts</a></li>
                    </ul>
                    <ul className='nav_icon'>
                        <div className='esas_menu_2'>
                            <IoPersonSharp />
                            <FcLike />
                            <FaShoppingCart />
                        </div>
                        <button><li ><IoMdMenu /></li></button>


                    </ul>
                </nav>
            </div>

        </header>
    )
}
