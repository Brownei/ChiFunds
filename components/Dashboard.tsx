"use client"
import React, { useEffect } from 'react'
import DashBoardHeader from './DashBoardHeader'
import DashboardTransfers from './DashboardTransfers'
import { Icon } from '@iconify/react/dist/iconify.js'
import { usingAnotherBearerRequest } from '@/lib/api'
import { useKeyStore } from '@/hooks/use-public-key'
import { useAuthStore } from '@/hooks/use-auth-store'
import { decryptData, encryptData } from '@/lib/utils'

const Dashboard = () => {
  const secretToken = process.env.NEXT_PUBLIC_ENCRYPTED_PUBLIC_KEY as string
  const token = sessionStorage.getItem("token") as string
  const user = useAuthStore((state: any) => state)
  const setUser = useAuthStore((state: any) => state.setUser)
  const { setKeys } = useKeyStore()

  useEffect(() => {
    usingAnotherBearerRequest(token, "GET", "/auth/user").then((response) => {
      console.log(response.data)
      if (!response.data.error) {
        setUser(response.data)
      }
    })
  }, [])

  useEffect(() => {
    usingAnotherBearerRequest(secretToken, "GET", "/all-keys").then((response) => {
      if (!response.data.error) {
        console.log(response.data.error)
      }

      setKeys(response.data)
    })
  }, [])

  if (!user) {
    sessionStorage.removeItem("token")
    window.location.assign("/login")
  }

  return (
    <main>
      <DashBoardHeader />
      <DashboardTransfers />
    </main>
  )
}

export default Dashboard
