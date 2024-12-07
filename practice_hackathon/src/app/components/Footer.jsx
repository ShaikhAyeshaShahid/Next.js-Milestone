import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <footer className="text-white body-font bg-black">
                <div className="container px-5 py-4 mx-auto ">
                    <div className="flex  md:text-left text-center -mb-10 -mx-4">
                        <div className="lg:max-w-md md:w-1/2 w-full px-4">
                            <h2 className="text-2xl font-inter">Exclusive</h2>
                            <nav className="list-none mb-10 my-3">
                                <li className='py-2'>
                                    <a className="text-xl font-poppins">Subscribe</a>
                                </li>
                                <li className='py-2'>
                                    <a className="text-sm font-thin font-poppins">Get 10% off your first order</a>
                                </li>
                                <li className="py-2 w-52">
                                    <div className="flex items-center rounded border border-gray-300 bg-black bg-opacity-50 overflow-hidden">
                                        <input
                                            type="text"
                                            id="footer-field"
                                            name="footer-field"
                                            placeholder="Enter your email"
                                            className="w-full bg-black bg-opacity-50 text-white py-2 px-2 transition-colors duration-200 ease-in-out font-poppins outline-none"
                                        />
                                        <button className="px-2 flex items-center justify-center">
                                            <Image
                                                src="/send_icon.png"
                                                height={16}
                                                width={20}
                                                alt="send icon"
                                                className="cursor-pointer"
                                            />
                                        </button>
                                    </div>
                                </li>


                            </nav>
                        </div>

                        <div className="lg:w-1/6 md:w-1/2 font-poppins w-full px-4 text-white">
                            <h2 className="text-xl font-light py-2">Support</h2>
                            <nav className="list-none mb-10">
                                <li className='py-2'>
                                    <a className="text-sm font-light">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                                </li>

                                <li className='py-2'>
                                    <a className="text-sm font-light">exclusive@gmail.com</a>
                                </li>
                                <li className='py-2'>
                                    <a className="text-sm font-light">+88015-88888-9999</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/6 md:w-1/2 font-poppins w-full px-4 text-white">
                            <h2 className="text-xl font-light py-2">Account</h2>
                            <nav className="list-none mb-10">
                                <li className='py-2'>
                                    <a className="text-sm font-light">My Account</a>
                                </li>
                                <li className='py-2'>
                                    <a className="text-sm font-light">Login / Register</a>
                                </li>
                                <li className='py-2'>
                                    <a className="text-sm font-light">Cart</a>
                                </li>
                                <li className='py-2'>
                                    <a className="text-sm font-light">Wishlist</a>
                                </li>
                                <li className='py-2'>
                                    <a className="text-sm font-light">Shop</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/6 md:w-1/2 font-poppins w-full px-4 text-white">
                            <h2 className="text-xl font-light py-2">Quick Link</h2>
                            <nav className="list-none mb-10">
                                <li className='py-2'>
                                    <a className="text-sm font-light">Privacy Policy</a>
                                </li>
                                <li className='py-2'>
                                    <a className="text-sm font-light">Terms Of Use</a>
                                </li>
                                <li className='py-2'>
                                    <a className="text-sm font-light">FAQ</a>
                                </li>
                                <li className='py-2'>
                                    <a className="text-sm font-light">Contact</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/6 md:w-1/2 font-poppins w-full text-white">
                            <h2 className="text-xl font-light py-2">Download App</h2>
                            <nav className="list-none mb-10">
                                <li className='py-2'>
                                    <a className="text-xs font-light">Save $3 with App New User Only</a>
                                </li>
                                <li className='h-20 w-50 '>
                                    <Image
                                        src="/download.png"
                                        width={200}
                                        height={50}
                                        alt='download'
                                    />
                                </li>

                                <li>
                                    <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto text-white">
                                        <a className="text-white my-4">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-white my-4">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-white my-4">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-white my-4">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                            </svg>
                                        </a>
                                    </span>                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='h-px bg-white opacity-5'></div>

                <div className="bg-black py-4">
                    <div className="container mx-auto px-5 flex flex-col items-center text-center">
                        <p className="text-gray-500 text-sm">
                            © Copyright Rimel 2022. All right reserved

                        </p>

                    </div>
                </div>

            </footer>




        </div>
    )
}

export default Footer
