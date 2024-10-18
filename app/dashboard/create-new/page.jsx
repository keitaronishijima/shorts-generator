'use client'
import React from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import { useState } from 'react';

function CreateNew() {
  const [formDate, setFormData] = useState([]);
  const onHandleInputChange=(fieldName, fieldValue)=>{
    console.log(fieldName, fieldValue)

    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
  }
  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-primary text-center'> Create New</h2>
      <div className='mt-10 shadow-md p-10'>
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandleInputChange}></SelectTopic>
        <SelectStyle onUserSelect={onHandleInputChange}/>
        <SelectDuration onUserSelect={onHandleInputChange}/>
        <Button className='mt-10 w-full'>Create Short Video</Button>
      </div>
    </div>
  )
}

export default CreateNew