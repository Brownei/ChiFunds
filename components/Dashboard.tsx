"use client"
import React, { useEffect } from 'react'
import DashBoardHeader from './DashBoardHeader'
import DashboardTransfers from './DashboardTransfers'
import { Icon } from '@iconify/react/dist/iconify.js'
import { usingAnotherBearerRequest } from '@/lib/api'
import { useAuthStore } from '@/hooks/use-auth-store'

const Dashboard = ({ user, loading }: { user: any, loading: boolean }) => {
  const token = sessionStorage.getItem("token") as string
  const setUser = useAuthStore((state: any) => state.setUser)

  useEffect(() => {
    usingAnotherBearerRequest(token, "GET", "/auth/user").then((response) => {
      console.log(response.data)
      if (!response.data.error) {
        setUser(response.data)
      }
    })
  }, [])

  if (!user) {
    //sessionStorage.removeItem("token")
    //window.location.assign("/login")
    console.log("Hello")
    console.log(user, loading)
  }

  return (
    <main>
      {loading ? (
        (
          <div className="flex justify-center items-center h-screen w-screen">
            <Icon icon={'uil:fidget-spinner'} fontSize={30} className="animate-spin" />
          </div>
        )
      ) : (
        <>
          <DashBoardHeader />
          <DashboardTransfers />
        </>
      )}
    </main>
  )
}

export default Dashboard
