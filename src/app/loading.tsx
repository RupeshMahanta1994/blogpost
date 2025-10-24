import React from 'react'

const loading = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold mb-4'>Loading...</h1>
            <p className='text-lg'>Please wait while we fetch the data.</p>
        </div>
    )
}

export default loading