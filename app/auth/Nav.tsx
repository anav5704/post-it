import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import Link from "next/link"
import Login from "./Login"
import Logout from "./Logout"

const Nav = async () => {
    const session = await getServerSession(authOptions)

  return (
    <nav className="bg-neutral-900 p-3 mt-5 rounded-sm flex justify-between items-center">
        <Link href={"/"}>
            <h1 className="text-lg font-bold">Post It! 💜</h1>
        </Link>
        <div className="flex items-center gap-5">
            {session?.user ? (
                <Logout name={session?.user?.name || ""} image={session?.user?.image || ""}/>
            ) : (
                <Login />
            )}
        </div>
    </nav>
  )
}

export default Nav
