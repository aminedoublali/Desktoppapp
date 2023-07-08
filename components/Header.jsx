import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
   <>
   <header className='  bg-gray-200 w-full  h-full flex items-center shadow-lg'>
    <Link href="/"> <h1 className=' ml-4 text-purple-900 font-extrabold text-3xl p-1  leading-none tracking-normal'>Invest</h1></Link>
    <nav className='  flex items-center ml-auto mr-4'>
        <ul className='flex gap-4 text-gray-800 text-lg font-bold not-italic leading-none tracking-normal'>
        <li className='cursor-pointer hover:text-indigo-600 '>
        <Link href="/Stock">保有株式</Link>
        </li>
        <li className='cursor-pointer  hover:text-indigo-600'>
          <Link href="/Money">外貨準備高</Link>
          </li>
        <li className='cursor-pointer  hover:text-indigo-600'>
        <Link href="/Gold">金準備高</Link>
        </li>
        </ul>
    </nav>
   </header>
   </>
  )
}