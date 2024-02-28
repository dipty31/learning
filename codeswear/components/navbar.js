import { IoIosCloseCircle } from "react-icons/io";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import { MdAccountCircle } from "react-icons/md";
import { CiShoppingCart, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="logo mx-5">
        <Link href="/">
          <Image src="/logo2.png" alt="codeswear" height={20} width={80} />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-10 font-bold md:text-md">
          <Link href="/tshirts">
            <li>Tshirts</li>
          </Link>
          <Link href="/hoodies">
            <li>Hoodies</li>
          </Link>
          <Link href="/stickers">
            <li>Stickers</li>
          </Link>
          <Link href="/mugs">
            <li>Mugs</li>
          </Link>
        </ul>
      </div> 
      <div className="cart absolute right-0 top-7 mx-5 font-bold flex">
        <Link href='/login'><MdAccountCircle className=" text-xl md:text-3xl font-bold mx-2 cursor-pointer" /></Link>
        <CiShoppingCart
          onClick={toggleCart}
          className=" text-xl md:text-3xl font-bold cursor-pointer"
        />
      </div>

      <div
        ref={ref}
        className={` h-[100vh] w-72 sidecart absolute top-0 right-0 bg-blue-200 px-8 py-10 transform tranition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="font-bold text-xl text-center">shoppong cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer text-xl text-indigo-500"
        >
          <IoIosCloseCircle />
        </span>
        <ol>
          {Object.keys(cart).length == 0 && (
            <div className="my-4 text-base font-normal">Cart is empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="text-center">
                <div className="item flex my-5 rounded-lg">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
                  <div className="flex items-center justify-center w-1/3">
                    <CiCircleMinus
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="mx-3 cursor-pointer text-indigo-500"
                    />
                    {cart[k].qty}
                    <CiCirclePlus
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="mx-3 cursor-pointer text-purple-900"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="total font-bold text-gray-600 my-2 text-sm">
          SubTotal: {subTotal}
        </div>

        <div className="flex">
          <Link href="/checkout">
            <button class="flex text-white bg-indigo-500 border-0 py-3 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
              <BsFillBagCheckFill className="m-1" /> Checkout{" "}
            </button>
          </Link>
          <button
            onClick={clearCart}
            class="flex ml-0.5 text-white bg-indigo-500 border-0 py-0 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm"
          >
            Clear Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
