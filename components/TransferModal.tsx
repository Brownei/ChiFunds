"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from 'react'
import { Button } from "./ui/button"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"
import { useKeyStore } from '@/hooks/use-public-key'
import { usingAnotherBearerRequest } from "@/lib/api"
import { encryptData } from "@/lib/utils"

const TransferModal = () => {
  const token = sessionStorage.getItem("token") as string
  const { keys } = useKeyStore()
  const [successSection, setSuccessSection] = useState(false)
  const [errorSection, setErrorSection] = useState<"oversabi" | "rubbish" | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm({
    mode: 'onSubmit'
  })

  function encryptedData(data: any) {
    const accountNumber = data.accountNumber
    const amount = Number(data.amount)
    const payload = {
      amount,
      account_number: accountNumber,
    }

    return encryptData(keys.publicKey, payload)
  }

  async function onSubmit(data: any) {
    console.log(data)
    setIsLoading(true)
    try {
      const response = await usingAnotherBearerRequest(token, "POST", "/transactions/transfer-money", {
        data: encryptedData(data)
      })
      console.log(response.data)
      if (response.data.error) {
        if (response.data.error = `"json: cannot unmarshal number 10000000000 into Go struct field BorrowMoneyDto.amount of type int32"`) {
          setErrorSection("oversabi")
        }
      }

      setSuccessSection(true)
    } catch (error) {
      setErrorSection("rubbish")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          type="button"
          variant={'outline'}
          className="md:px-[20px] md:py-[20px] px-[50px] py-[10px] bg-darkBrown text-white font-PoppinsRegular hover:bg-littleDarkBrown hover:text-white duration-200 transition-all"
        >
          <Icon icon={'fa6-solid:paper-plane'} fontSize={16} color='white' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Money</DialogTitle>
          <DialogDescription>
            Sending funds? after borrowing?
          </DialogDescription>
        </DialogHeader>

        <div className="grid items-center gap-4">
          <Label htmlFor="accountNumber" className="text-start">
            Account Number
          </Label>
          <Input
            id="amount"
            placeholder="512....."
            className="col-span-3"
            {...register("accountNumber")}
          />
        </div>

        <div className="grid items-center gap-4">
          <Label htmlFor="talking" className="text-start">
            Amount
          </Label>
          <Input
            id="amount"
            type='number'
            className="col-span-3"
            {...register("amount")}
          />
        </div>
        <DialogFooter>
          <Button disabled={isLoading} className='bg-darkBrown text-white font-PoppinsRegular hover:bg-littleDarkBrown hover:text-white duration-200 transition-all' onClick={handleSubmit(onSubmit)} type="submit">
            {isLoading && (<Icon icon={'uil:spinner-alt'} className='mr-2 h-4 w-4 animate-spin' />)}
            Save changes
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}

export default TransferModal
