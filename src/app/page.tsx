import React from 'react'
import prisma from '../../lib/prisma'
import PostCard from '@/components/PostCard'

type Props = {}

const page = async (props: Props) => {
  const posts = await prisma.post.findMany()
  return (
    <div className='h-screen bg-background flex flex-col items-center  w-full'>
      <h1 className='text-4xl font-bold mt-4'>Welcome to My Blog</h1>
      <p className='text-lg'>This is a space where I share my thoughts and ideas.</p>
      <div className='mt-8 grid grid-cols-3 gap-6'>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default page