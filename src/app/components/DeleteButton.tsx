"use client"
import { deleteArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React from 'react'

type DeleteButttonProps = {
  id: string;
}

const DeleteButton = ({ id }: DeleteButttonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteArticle(id)
    router.push("/");
    router.refresh();
  }

  return (
    <div
      className='bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer'
      onClick={handleDelete}
    >
      削除</div>
  )
}

export default DeleteButton