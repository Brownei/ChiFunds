import { persist } from "zustand/middleware"
import { create, } from 'zustand'

type Key = {
  publicKey: string
  privateKey: string
}

interface SentTransactionsState {
  sentTransactions: any[]
  setSentTransaction: (newTransactions: any) => void
}

interface ReceivedTransactionsState {
  receivedTransactions: any[]
  setReceivedTransaction: (newTransactions: any) => void
}

export const useSentTransactionsStore = create<SentTransactionsState>()(
  persist((set) => ({
    sentTransactions: [],
    setSentTransaction: (newTransactions) => set((state) => ({ sentTransactions: [state.sentTransactions, ...newTransactions] })),
  }),
    {
      name: "sentTransactions-storage"
    })
)

export const useReceivedTransactionsStore = create<ReceivedTransactionsState>()(
  persist((set) => ({
    receivedTransactions: [],
    setReceivedTransaction: (newTransactions) => set((state) => ({ receivedTransactions: [state.receivedTransactions, ...newTransactions] })),
  }),
    {
      name: "receivedTransactions-storage"
    })
)

