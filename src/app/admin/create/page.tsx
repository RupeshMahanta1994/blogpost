import PostForm from '@/components/PostForm'
import { createPost } from '@/lib/actions/formactions'
import React from 'react'

const page = () => {
    return (
        <>
            <PostForm formactions={createPost} create={true} />

        </>
    )
}

export default page