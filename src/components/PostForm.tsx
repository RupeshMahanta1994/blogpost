import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const PostForm = ({ formactions, create = true, post }) => {
    return (
        <div >
            {/* Form elements will go here */}
            <form action={formactions}>
                <Label htmlFor="title">Title</Label>
                <Input id="title" defaultValue={post?.title} name='title' placeholder="Post Title" className='w-full mt-2 mb-4' />
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" defaultValue={post?.content} name='content' placeholder="Post Content" className='w-full mt-2 mb-4 h-40' />
                {/* Add more form fields as needed */}
                <Button type="submit" variant="default">{create ? 'Create Post' : 'Update Post'}</Button>
            </form>
        </div>
    )
}

export default PostForm