"use client"
import { LoginForm } from "./LoginForm"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

const RegisterPage = () => {
  return (
    <main>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#E8D8C4_1px,transparent_1px),linear-gradient(to_bottom,#E8D8C4_1px,transparent_1px)] bg-[size:8rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
        <div  className="container flex h-screen w-screen flex-col items-center justify-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute left-4 top-4 font-PoppinsLight md:left-8 md:top-8"
            )}
          >
            <>
              <Icon icon='ion:chevron-back-sharp' className="mr-2 h-4 w-4" />
              Back
            </>
          </Link>
          <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6">
            <h1 className="text-[3rem] font-PoppinsExtraBold text-center md:text-[5rem]">
                Start a journey with us
            </h1>
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              <Link
                href="/login"
                className="hover:text-brand underline underline-offset-4"
              >
                Already have an account? Sign In
              </Link>
            </p>
          </div>
        </div>
    </main>
  )
}

export default RegisterPage