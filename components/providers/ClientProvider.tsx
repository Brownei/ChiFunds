"use client"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { Toaster } from "@/components/ui/sonner"


export default function ClientProvider({children} : {
    children: ReactNode
}) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {queries: {staleTime: 1000 * 60 * 5}}
  }))
  return (
    <div>
        <QueryClientProvider client={queryClient}>
            <main>
                {children}
                <Toaster richColors/>
            </main>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </div>
  )
}
