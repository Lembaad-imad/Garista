import React from 'react'
import SelectLangue from './SelectLangue'
import SearchInput from './SearchInput'
import Carousel from './Carouselimages'
import Categories from './Categories'
import Products from './Products/Products'
import BottomNav from '../layout/BottomNav'
import Carouselimages from './Carouselimages'

const HomePage = () => {
  return (
    <div className='bg-bgcolor  p-1 flex flex-col gap-2 justify-center'>
        <div className='flex justify-around gap-20 w-full  items-center border-b-2 border-gray-200 '>
            <img src='/images/logo.svg' alt='logo' className='ml-2' />
            <div>
                <SelectLangue />
            </div>
        </div>
        <div className=' text-center flex flex-col gap-3 items-center '>
          <SearchInput />
          <Carouselimages />
        </div>
        {/* <div className=' bg bg-black w-screen h-52  flex justify-center items-center'>
        </div> */}
        <div className='w-11/12  mx-auto flex flex-col  '>
          <p className='font-sans font-bold text-xl  '>Categories</p>
          <div>
            <Categories />
          </div>
        </div>
        <div className='w-11/12 mx-auto flex flex-col gap-3 '>
          <p className='font-sans font-bold text-xl '>Products</p>
          <div>
          <Products />
          </div>
        </div>
        <BottomNav />
    </div>
  )
}

export default HomePage
