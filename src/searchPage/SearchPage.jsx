import React from 'react'
import SelectLangue from '../Home/SelectLangue'
import SearchInput from '../Home/SearchInput'
import Carouselimages from '../Home/Carouselimages'
import Categories from '../Home/Categories'
import Products from '../Home/Products/Products'
import BottomNav from '../layout/BottomNav'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HistoryRecord } from './HistoryRecord'
import { useNavigate } from 'react-router-dom'

const SearchPage = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-bgcolor  items-center p-1 flex flex-col gap-3 justify-center'>
        
            <div className=' text-center flex  gap-3 items-center w-11/12 justify-center mt-5'>
                <div className='w-10 h-10 border rounded-md flex justify-center items-center border-black'
                    onClick={() => navigate(-1)}
                >
                    <MdOutlineKeyboardArrowLeft className='text-3xl' />
                    </div>
              <SearchInput />
            </div>
            
            <div className='w-11/12 mx-auto flex flex-col gap-4 mt-5 '>
              <p className='font-sans font-bold text-xl text-gray-700 '>History Record</p>
              <div>
                <HistoryRecord />
              </div>
            </div>
            <div className='w-11/12 mx-auto flex flex-col gap-4   mt-7 '>
              <p className='font-sans font-bold text-xl text-gray-700 '>You May Like</p>
              <div>
              <Products />
              </div>
            </div>
            <BottomNav />
        </div>
      )
}

export default SearchPage