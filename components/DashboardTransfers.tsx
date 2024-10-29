"use client"
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const DashboardTransfers = () => {
  function iconsForTransactions(action: string) {
    switch (action) {
      case "sending":
        return <Icon icon={'ri:arrow-left-fill'} color='red' />
      case "receiving":
        return <Icon icon={'mynaui:arrow-right-solid'} color='green' />
      case "borrowing":
        return <Icon icon={''} />
    }
  }

  return (
    <main className='container mx-auto p-6'>
      <div className='flex justify-evenly items-center'>
        <div className='border border-black'>
          <h4>Received</h4>
          <div>

          </div>
        </div>
        <div className='border border-black'>
          <h4>Borrowed</h4>
        </div>
        <div className='border border-black'>
          <h4>Sent</h4>
        </div>
      </div>
    </main>
  )
}

export default DashboardTransfers
