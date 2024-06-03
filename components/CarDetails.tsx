"use client"
import { CarProps } from '@/types';
import { generateCarImageUrl } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import {Fragment} from 'react'

interface CarDetailsProps{
    isOpen:boolean;
    closeModal:()=>void;
    car:CarProps;
}

const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>
            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-90'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-300'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-90'
                >
                    <Dialog.Panel className='car-details__dialog-panel no-scrollbar'>
                        <button type='button' onClick={closeModal} className='car-details__close-btn'>
                            <Image src='/close.svg' alt='close' width={20} height={20}  />
                        </button>
                        <div className='flex-1 flex flex-col gap-3'>
                            <div className='car-details__main-image'>
                                <Image src={generateCarImageUrl(car)} alt='car' fill priority className='object-contain' />
                            </div>
                            <div className='flex gap-3'>
                                <div className='flex-1 relative w-full h-24 bg-primary-100 rounded-lg'>
                                    <Image src={generateCarImageUrl(car,'29')} alt='car' fill priority className='object-contain' />
                                </div>
                                <div className='flex-1 relative w-full h-24 bg-primary-100 rounded-lg'>
                                    <Image src={generateCarImageUrl(car,'33')} alt='car' fill priority className='object-contain' />
                                </div>
                                <div className='flex-1 relative w-full h-24 bg-primary-100 rounded-lg'>
                                    <Image src={generateCarImageUrl(car,'13')} alt='car' fill priority className='object-contain' />
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <h2 className='font-semibold text-xl capitalize'>
                                {car.make} {car.model}

                                <div className='mt-3 flex flex-wrap gap-3'>
                                    {Object.entries(car).map(([key,value])=>(
                                        <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                            <h4 className='text-grey capitalize'>{key.split('_').join(' ')}</h4>
                                            <p className='text-black-100 font-semibold'>{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </h2>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
    </>
  )
}

export default CarDetails