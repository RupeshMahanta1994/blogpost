'use server';


import { redirect } from "next/navigation";
import prisma from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formdata: FormData ) {
    const title = formdata.get('title')?.toString();
    const content = formdata.get('content')?.toString();
    const authorId=await prisma.user.findFirst().then(user=>user?.id || 1);
    
    
    // Here you can add logic to save the post to your database
    console.log('Creating post with title:', title);
    console.log('Content:', content);
    await prisma.post.create({
        data: {
            title: title || 'Untitled',
            content: content || '',
            authorId: authorId,
        },
    });
    console.log('Post created successfully');
    redirect('/');

}
export async function updatePost(formdata: FormData, postId: number) {
    const title = formdata.get('title')?.toString();
    const content = formdata.get('content')?.toString();

    await prisma.post.update({
        where: { id: postId },
        data: {
            title: title || 'Untitled',
            content: content || '',
        },
    });
    redirect('/');
}
export async function deletePost(postId: number) {

    await prisma.post.delete({
        where: { id: postId },
    });
    revalidatePath('/');
}