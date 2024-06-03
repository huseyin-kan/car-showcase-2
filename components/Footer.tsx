import Image from 'next/image'
import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-16 py-4'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image className='object-contain' alt='Car Hub Logo' width={118} height={18} src="/logo.svg"/>
          <p className='text-base text-gray-700'>
            CarHub 2023 <br />
            All right reserved &copy;
          </p>
        </div>
        <div className='footer__links'>
          {
            footerLinks.map((link)=>(
              <div className='footer__link' key={link.title}>
                <h3 className='font-bold'>{link.title}</h3>
                {link.links.map((item)=>(
                  <Link className='text-gray-500' key={item.title} href={item.url}>{item.title}</Link>
                ))}
              </div>
            ))
          }
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
          <p>@2023 CarHub. All Rights Reserved</p>

          <div className='footer__copyrights-link'>
            <Link href="/" className='text-gray-500'>Privacy Policy</Link>
            <Link href="/" className='text-gray-500'>Terms of Use</Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer