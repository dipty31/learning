import { IoIosCloseCircle } from "react-icons/io";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useRef } from "react";
import { CiShoppingCart, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { BsFillBagCheckFill} from 'react-icons/bs';

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
    console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
    const toggleCart = () =>{
        if(ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');

        } else if(!ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');

        }
    }
    const ref = useRef()
;  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md">
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
        <div onClick={toggleCart} className='cart absolute right-0 top-7 mx-5 font-bold'>
            <CiShoppingCart className=' text-xl md:text-3xl font-bold'/>
        </div>


    <div ref = {ref}className=' h-full w-72 sidecart absolute top-0 right-0 bg-blue-200 px-8 py-10 transform tranition-transform translate-x-full'>
        <h2 className='font-bold text-xl text-center'>shoppong cart</h2>
        <span onClick={toggleCart} className='absolute top-2 right-2 cursor-pointer text-xl text-indigo-500'><IoIosCloseCircle /></span>
        <ol>
        {Object.keys(cart)===0 && <div className='my-4 text-base font-normal'>No item in the cart!</div>}
        {
            Object.keys(cart).map((k)=>{
            return(
            <li key={k} className="text-center">
            <div className="item flex my-5 rounded-lg">
                <div className="w-2/3 font-semibold">{cart[k].name }</div> 
                <div className="flex items-center justify-center w-1/3"><CiCircleMinus className="mx-3 cursor-pointer text-indigo-500" />{cart[k].qty}<CiCirclePlus className="mx-3 cursor-pointer text-purple-900"/></div> 
            </div>
            </li>);
            })
        }
        </ol>
        <div className="flex">
        <button class="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm"> <BsFillBagCheckFill className='m-1'/> Checkout </button>
        <button onClick={clearCart} class="flex ml-0.5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm">Clear Cart </button>
        </div>
    </div>

    </div>
  )
}

export default Navbar;