import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen bg-background'>
            <main className='container mx-auto px-4 py-8'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-4xl font-bold'>Create a New Post</h1>
                </div>
                <div className='mt-8 max-w-4xl mx-auto border p-6 rounded-lg shadow-sm '>
                    {children}

                </div>
            </main>
        </div>
    )
}

export default Layout