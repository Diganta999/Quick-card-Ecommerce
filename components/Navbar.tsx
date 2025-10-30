import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

const Navbar = () => {
    const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Contact
        </Link>
      </li>
    </>
  );
    return (
        <div>
            <div className="navbar bg-base-100 shadow rounded-2xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                        <li><Button className=''> Seller Dashboard </Button></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn">Account</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
