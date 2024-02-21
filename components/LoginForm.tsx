"use client"
import * as React from "react"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { toast } from "sonner"
import { Icon } from '@iconify/react';


export const userAuthSchema = z.object({
    email: z.string().email(),
})

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    setIsLoading(false)

    // if (!signInResult?.ok) {
    //   return toast({
    //     title: "Something went wrong.",
    //     description: "Your sign in request failed. Please try again.",
    //     variant: "destructive",
    //   })
    // }

    return toast.success("Check your email")
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
        <Button
        type="button"
        variant={'outline'}
        className="md:px-[70px] md:py-[20px] px-[50px] py-[10px] bg-darkBrown text-white font-PoppinsRegular hover:bg-littleDarkBrown hover:text-white duration-200 transition-all"
        onClick={() => {
            setIsGitHubLoading(true)
        }}
        disabled={isLoading || isGitHubLoading}
        >
            {isGitHubLoading ? (
            <Icon icon="mdi:github" className="mr-2 h-4 w-4 animate-spin" />
            ) : (
            <Icon icon="mdi:github" className="mr-2 h-4 w-4" />
            )}{" "}
            Sign in with Github
        </Button>

        <Button
        type="button"
        variant={'outline'}
        className="md:px-[70px] md:py-[20px] px-[50px] py-[10px] bg-darkBrown text-white font-PoppinsRegular hover:bg-littleDarkBrown hover:text-white duration-200 transition-all"
        onClick={() => {
            setIsGitHubLoading(true)
        }}
        disabled={isLoading || isGitHubLoading}
        >
            {isGitHubLoading ? (
            <Icon icon="devicon:google" className="mr-2 h-4 w-4 animate-spin" />
            ) : (
            <Icon icon="devicon:google" className="mr-2 h-4 w-4" />
            )}{" "}
            Sign in with Google
        </Button>

        <Button
        type="button"
        variant={'outline'}
        className="md:px-[70px] md:py-[20px] px-[50px] py-[10px] bg-darkBrown text-white font-PoppinsRegular hover:bg-littleDarkBrown hover:text-white duration-200 transition-all"
        onClick={() => {
            setIsGitHubLoading(true)
        }}
        disabled={isLoading || isGitHubLoading}
        >
            {isGitHubLoading ? (
            <Icon icon="logos:facebook" className="mr-2 h-4 w-4 animate-spin" />
            ) : (
            <Icon icon="logos:facebook" className="mr-2 h-4 w-4" />
            )}{" "}
            Sign in with Facebook
        </Button>
    </div>
  )
}