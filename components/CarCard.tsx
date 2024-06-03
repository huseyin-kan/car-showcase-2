"use client"
import { CarProps } from '@/types'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import { CarDetails, CustomButton } from '.'

interface CarCardProps{
    car:CarProps
}

const CarCard = ({car}:CarCardProps) => {
    const [isOpen,setIsOpen] = useState(false)
    const {city_mpg,year,transmission,make,model,drive } = car
    
    const carRent = calculateCarRent(city_mpg,year)
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>

        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
            {carRent}
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>
        
        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain'/>
        </div>
        
        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image alt='steering wheel' src='/steering-wheel.svg' width={20} height={20}/>
                    <span className='text-[14px]'>
                        {transmission === 'a' ? "Automatic":"Manuel"}
                    </span>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image alt='tire' src='/tire.svg' width={20} height={20}/>
                    <span className='text-[14px]'>
                        {drive.toUpperCase()}
                    </span>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image alt='gas' src='/gas.svg' width={20} height={20}/>
                    <span className='text-[14px]'>
                        {city_mpg} MPG
                    </span>
                </div>
            </div>
            <div className='car-card__btn-container'>
                <CustomButton
                    title="View More"
                    containerStyles="w-full py-[16px] rounded-xl bg-primary-blue"
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon='/right-arrow.svg'
                    handleClick={()=>setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}  />
    </div>
  )
}

export default CarCard