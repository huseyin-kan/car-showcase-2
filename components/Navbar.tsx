import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4'>
            <Link href="/" className='flex items-center justify-center'>
                <Image src="/logo.svg" width={118} height={18} className='object-contain' alt='Car Hub Logo'/>
            </Link>
            <CustomButton title="Sign In" btnType='button' containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]  "/>
        </nav>
    </header>
  )
}

export default Navbar