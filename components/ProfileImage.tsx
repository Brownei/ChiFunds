import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from 'next/image'

export function ProfileImage({ image, firstLetter }: { image: string, firstLetter: string }) {
  return (
    <Avatar>
      <Image src={image} width={100} height={100} alt='Profile picture' />
      <AvatarFallback>{firstLetter}</AvatarFallback>
    </Avatar>
  )
}

