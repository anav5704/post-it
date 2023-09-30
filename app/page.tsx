"use client"

import AddPost from "./components/AddPost";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col grid grid-cols-3">
      <AddPost />
    </main>
  )
}
