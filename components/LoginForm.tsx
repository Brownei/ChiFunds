"use client"
import * as React from "react"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation'
import { useAuthStore } from "@/hooks/use-auth-store"

export const userAuthSchema = z.object({
  email: z.string().email(),
})

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function LoginForm({ className, ...props }: LoginFormProps) {
  const router = useRouter()
  const setUser = useAuthStore((state: any) => state.setUser)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
  //const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleMessage = (event: any) => {
      console.log(event.data.token)
      // Ensure the message is from a trusted origin if hosted in production
      if (event.origin === "http://localhost:8000" && event.data.token) {
        sessionStorage.setItem("token", event.data.token);
        router.push("/dashboard")
        console.log("Token saved in sessionStorage");
      }
    };

    window.addEventListener("message", handleMessage);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  async function onSubmit() {
    window.open("http://localhost:8000/v1/auth/google", "Google Login", "width=500,height=600")
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
        onClick={onSubmit}
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
