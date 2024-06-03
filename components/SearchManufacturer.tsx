"use client";
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/constants';
import Image from 'next/image';
import React,{useState,Fragment} from 'react'

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  const [query,setQuery] = useState('')

  const filteredManufacturers = query === "" 
  ? manufacturers 
  : manufacturers.filter((item)=>(item.toLowerCase().includes(query.toLowerCase().replace(/\s+/g,""))))

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
        <Combobox.Button className="absolute top-[14px]">
          <Image className='ml-4' alt='Car Logo' src="/car-logo.svg" width={20} height={20}/>
        </Combobox.Button>
        <Combobox.Input  className="search-manufacturer__input" placeholder='Volkswagen' onChange={(e)=>setQuery(e.target.value)} displayValue={(manufacturer:string)=>manufacturer}/>
        <Transition
          as={Fragment}
          leave='transition ease-in-out duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={()=>setQuery('')}
        >
          <Combobox.Options className='search-manufacturer__options z-10'>
            {filteredManufacturers.map((item)=>(
              <Combobox.Option key={item} className={({active})=>`search-manufacturer__option ${active ?'bg-primary-blue text-white':'text-gray-900'}`} value={item}>
                {({selected,active})=>(
                  <>
                  <span className={`block truncate ${selected?'font-medium':'font-normal'}`}>
                    {item}
                  </span>
                  {selected ? (
                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active?'text-white':'text-teal-600'}`}></span>
                  ):null}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer