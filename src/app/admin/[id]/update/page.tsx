import PostForm from '@/components/PostForm'
import { updatePost } from '@/lib/actions/formactions'

import React from 'react'
import prisma from '../../../../../lib/prisma';


const page = async ({ params }) => {
  const id = await params.id;
  const post = await prisma.post.findFirst({ where: { id: Number(id) } });
  const updateAction = async (formData: FormData) => {
    "use server";
    await updatePost(formData, Number(id));
  };
  return (
    <>
      <PostForm formactions={updateAction} create={false} post={post} />

    </>
  )
}

export default page