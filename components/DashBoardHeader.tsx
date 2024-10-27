"use client"
import { arrangeMoneyFigures } from '@/lib/utils'
import React from 'react'
import Modal from './Modal'
import { useAuthStore } from '@/hooks/use-auth-store'

const DashBoardHeader = () => {
  const user = useAuthStore((state) => state)
  const value = arrangeMoneyFigures(user.balance)

  return (
    <main>
      <div className="h-[220px] w-full">
        <div className="absolute inset-0 -z-10 h-[220px] w-full bg-white bg-[linear-gradient(to_right,#E8D8C4_1px,transparent_1px),linear-gradient(to_bottom,#E8D8C4_1px,transparent_1px)] bg-[size:8rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
        <div className='container grid gap-2 mx-auto p-6'>
          <h1 className='mt-10 text-[1.5rem] font-PoppinsExtraBold md:text-[2rem] lg:text-[3rem]'>Welcome Back, {user.last_name}!</h1>
          <p className='font-PoppinsLight text-[1rem] md:text-[2rem]'>Total Balance: {'\u20A6'}{value}</p>
          <div className='flex justify-end items-end'>
            <Modal />
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashBoardHeader
