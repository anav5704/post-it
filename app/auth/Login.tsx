"use client"

import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div>
        <button onClick={() => signIn()} className="text-sm bg-purple-700 hover:opacity-60 rounded-sm py-2 px-6">Sign In</button>
    </div>
  )
}

export default Login
