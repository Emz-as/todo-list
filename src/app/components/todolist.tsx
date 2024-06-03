import React from 'react'
import Image from 'next/image'
import plus from '../image/plus2.png'

export const Todolist = () => {
  return (
    <div className='h-screen w-screen p-[5%]  flex justify-center'> 
      <div className=' w-[50%] h-[100%] border border-gray-700 rounded-lg'>
        <div>
          <h1 className='text-3xl text-center font-bold pt-3'>Todo List</h1>
        </div>
        <div className='w-full h-[10%] flex justify-center'>
          <div className='relative w-[50%]'>
            <input type='text' className='border-2 border-black p-2 rounded-lg my-2 w-full' placeholder='Add a new task' />
            <Image src={plus} alt='plus' className='w-[50px] h-[50px] absolute right-0 top-[39%] transform -translate-y-1/2 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}
