import React from 'react'
import SelectLangue from './SelectLangue'
import SearchInput from './SearchInput'
import Carousel from './Carousel'
import Categories from './Categories'
import Products from './Products/Products'
import BottomNav from './Products/BottomNav'

const HomePage = () => {
  return (
    <div className='bg-bgcolor  p-1 flex flex-col gap-3 justify-center'>
        <div className='flex justify-around gap-20 w-full  items-center border-b-2 border-gray-200 '>
            <img src='/images/logo.svg' alt='logo' className='ml-2' />
            <div>
                <SelectLangue />
            </div>
        </div>
        <div className=' text-center '>
          <SearchInput />
        </div>
        <div className=''>
          <Carousel />
        </div>
        <div className='w-11/12 mx-auto flex flex-col gap-4 '>
          <p className='font-sans font-bold text-2xl '>Categories</p>
          <div>
            <Categories />
          </div>
        </div>
        <div className='w-11/12 mx-auto flex flex-col gap-4 '>
          <p className='font-sans font-bold text-2xl '>Products</p>
          <div>
          <Products />
          </div>
        </div>
        <BottomNav />
    </div>
  )
}

export default HomePage
