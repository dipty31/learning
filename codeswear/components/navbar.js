import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center item-center my-2 shadow-md">
        <div className='logo mx-5'>
            <Link href='/'><Image src="/logo2.png" alt='codeswear' height={20} width={80} /></Link>
        </div>
        <div className='nav'>
            <ul className='flex items-center space-x-10 font-bold md:text-md'>
                <Link href='/tshirts' ><li>Tshirts</li></Link>
                <Link href='/hoodies' ><li>Hoodies</li></Link>
                <Link href='/stickers' ><li>Stickers</li></Link>
                <Link href='/mugs' ><li>Mugs</li></Link>
            </ul>
        </div>
        <div className='cart absolute right-0 top-7 mx-5 font-bold'>
            <CiShoppingCart className=' text-xl md:text-3xl font-bold'/>
        </div>

    </div>
  )
}

export default Navbar;