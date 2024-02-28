import React from 'react'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { BsFillBagCheckFill} from 'react-icons/bs';
import Link from 'next/link';

const Checkout = ({subTotal, cart, clearCart, addToCart, removeFromCart}) => {
  return (
    <div className='container px-2 sm:m-auto '>
      <h1 className='font-bold text-3xl my-8 text-center '>CheckOut</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2><br/>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 
              focus:ring-indigo-200 text-t outline-none text-gray-700 py-1 px-3 leading-8 tranition-colors duration-200 ease-in-out'/>   
          </div>
        </div>
        <div className='px-2 w-full'>
          <div className='relative mb-4'>
            <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 
              focus:ring-indigo-200 text-t outline-none text-gray-700 py-1 px-3 leading-8 tranition-colors duration-200 ease-in-out'/>        
          </div>
        </div>
        </div>
        <div className='px-2 w-full'>
          <div className='relative mb-4'>
            <label htmlFor='address'>Address</label>
              <textarea id='address' name='address' cols='30' rows='2' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 
              focus:ring-indigo-200 text-t outline-none text-gray-700 py-1 px-3 leading-8 tranition-colors duration-200 ease-in-out'></textarea>        
          </div>
      </div>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor='phone'>Phone</label>
              <input type='phone' id='phone' name='phone' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 
              focus:ring-indigo-200 text-t outline-none text-gray-700 py-1 px-3 leading-8 tranition-colors duration-200 ease-in-out'/>   
          </div>
        </div>
        <div className='px-2 w-full'>
          <div className='relative mb-4'>
            <label htmlFor='city'>City</label>
              <input type='text' id='city' name='city' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 
              focus:ring-indigo-200 text-t outline-none text-gray-700 py-1 px-3 leading-8 tranition-colors duration-200 ease-in-out'/>        
          </div>
        </div>
        </div>
        <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor='state'>State</label>
              <input type='text' id='state' name='state' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 
              focus:ring-indigo-200 text-t outline-none text-gray-700 py-1 px-3 leading-8 tranition-colors duration-200 ease-in-out'/>   
          </div>
        </div>
        <div className='px-2 w-full'>
          <div className='relative mb-4'>
            <label htmlFor='pincode'>PinCode</label>
              <input type='text' id='pincode' name='pincode' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 
              focus:ring-indigo-200 text-t outline-none text-gray-700 py-1 px-3 leading-8 tranition-colors duration-200 ease-in-out'/>        
          </div>
        </div>
        </div>

        <h2 className='font-semibold text-xl'>2. Review Cart Items</h2><br/>

        <div className=' sidecart bg-blue-200 p-6 m-2'>        
        <ol className='list-decimal font-semibold'>
        {Object.keys(cart).length == 0 && <div className='my-4 text-base font-normal'>Cart is empty!</div>}
        {
            Object.keys(cart).map((k)=>{
            return(
            <li key={k} className="">
            <div className="item flex my-5 rounded-lg">
                <div className="w-2/3 font-semibold">{cart[k].name }</div> 
                <div className="flex items-center justify-center w-1/3"><CiCircleMinus onClick={()=>{removeFromCart(k,1,cart[k].name, cart[k].size, cart[k].variant)}} className="mx-3 cursor-pointer text-indigo-500" />{cart[k].qty}<CiCirclePlus onClick={()=>{addToCart(k,1,cart[k].name, cart[k].size, cart[k].variant)} } className="mx-3 cursor-pointer text-purple-900"/></div> 
            </div>
            </li>);
            })
        }
        </ol>
        <span className='total font-bold text-gray-600'>SubTotal: {subTotal}</span>
    </div>
        <div className="mx-2">
        <Link href='/checkout'><button class="flex text-white bg-indigo-500 border-0 py-3 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/> Pay ₹{subTotal} </button></Link>
        </div>

    </div>
  )
}

export default Checkout