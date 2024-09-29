"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { db } from '@/configs/db'
import { eq } from 'drizzle-orm'
import { Users } from '@/configs/schema'

function Provider({children}) {

  const {user} = useUser();

  useEffect(() => {
    user&&isNewUser();
  }, [user]);

  const isNewUser= async ()=>{
    const result = await db.select().from(Users)
    .where(eq(Users.email, user?.primaryEmailAddress?.primaryEmailAddress));

    if (!result[0]) {
      await db.insert(Users).values({
        name:user.fullName,
        email:user?.primaryEmailAddress?.emailAddress,
        imageUrl:user?.imageUrl
      })
    }
  }

  return (
    <div>
        {children}
    </div>
  )
}

export default Provider