import React from 'react'
import SelectLangue from './SelectLangue'

const HomePage = () => {
  return (
    <div className='bg-bgcolor p-1 flex justify-center'>
        <div className='flex justify-around gap-20 w-full  items-center '>
            <img src='/images/logo.svg' alt='logo' className='ml-2' />
            <div>
                <SelectLangue />
            </div>
        </div>
    </div>
  )
}

export default HomePage
