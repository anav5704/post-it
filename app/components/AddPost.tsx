"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import axios from "axios"

const AddPost = () => {
    const [title, setTitle] = useState("")
    const [disabled, setDisabled] = useState(false)

    const { mutate }  = useMutation(
        async (title: string) => await axios.post("/api/posts/addpost", {title}),
        {
            onError: (error) => { 
                console.log(error)
            },
            onSuccess: (data) => {
                console.log(data)
                setTitle("")
                setDisabled(false)
            }
        }
    )

    const submitPost =async (e: React.FormEvent) => {
        e.preventDefault()
        setDisabled(true)
        mutate(title)
    }

  return (
    <form onSubmit={submitPost}>
        <div className="flex flex-col gap-3 col-span-2">
            <textarea 
            className="caret-purple-700 p-2  rounded-sm outline-none bg-neutral-900"
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="What are we thinking?" 
            name="title" 
            value={title} 
            rows={3}
            />
            <button type="submit" disabled={disabled}  className="text-sm bg-purple-700 hover:opacity-60 disabled:opacity-30 rounded-sm py-2 px-6">Create Post</button>
        </div>
    </form>
  )
}

export default AddPost
