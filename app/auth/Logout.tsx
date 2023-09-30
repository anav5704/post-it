"use client"
 
import { signOut } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"

interface User {
    name: string, 
    image: string, 
}

const Logout = ({name, image}: User) => {
  return (
    <div className="flex items-center gap-3">
        <button onClick={() => signOut()} className="text-sm bg-purple-700 hover:opacity-60 rounded-sm py-2 px-6">Log Out</button>
        <Link href={"/dashboard"}>
            <Image className="rounded-sm" height={38} width={38} src={image} alt={`profile image for username: ${name}`}/>
        </Link>
    </div>
  )
}

export default Logout

