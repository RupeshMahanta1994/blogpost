import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import prisma from '../../lib/prisma'
import { Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import { deletePost } from '@/lib/actions/formactions'
import { Button } from './ui/button'

const PostCard = async ({ post }: { post: { title: string, content: string, authorId: number } }) => {
    const user = await prisma.user.findFirst({
        where: { id: post.authorId }
    })
    const deleteAction = async () => {
        "use server";
        await deletePost(post.id);
    };
    return (
        <Card className="w-[400px] mb-6">
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{user?.name}</CardDescription>
                <CardAction className='flex gap-2'>
                    <Link href={`/admin/${post.id}/update`} >
                        <Button variant='outline' >
                            <Pencil size={16} /></Button></Link>
                    <form action={deleteAction}>
                        <Button type='submit' variant='destructive' ><Trash size={14} /></Button>
                    </form>
                </CardAction>
            </CardHeader>
            <CardContent>
                <p>{post.content}</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}

export default PostCard