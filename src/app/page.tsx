import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-screen bg-background flex flex-col items-center  w-full'>
      <h1 className='text-4xl font-bold'>Welcome to My Blog</h1>
      <p className='text-lg'>This is a space where I share my thoughts and ideas.</p>
    </div>
  )
}

export default page