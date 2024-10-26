"use client";
import Link from 'next/link';
import React from 'react'
export const metadata={
  title:"Home: Work Manager"
}

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-600 h-16 py-2 px-4 flex justify-between items-center'>
        <div className='brand'>
          <h1 className='text-2xl font-semibold'>
            <a href='#!'>Work Manager</a>
          </h1>
        </div>

        <div>
          <ul className='flex space-x-5'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href='/add-task'>Add Task</Link></li>
            <li><a href='#!'>Show Task</a></li>


          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href='#!'>Login</a>
            </li>
          </ul>
        </div>


      </nav>
    </div>
  )
}

export default Navbar
