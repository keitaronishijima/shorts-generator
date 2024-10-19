'use client'
import React from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import CustomLoading from './_components/CustomLoading'
import { Button } from '@/components/ui/button'
import { useState } from 'react';
import axios from 'axios'

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState();

  const onHandleInputChange=(fieldName, fieldValue)=>{
    console.log(fieldName, fieldValue)

    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
  }

  const onCreateClickHandler = () => {
    GetVideoScript()
  }

  // Get video script

  const GetVideoScript = async () => {
    setLoading(true);
    const prompt = 'Write a script to generate '+formData.duration+' video on topic: '+formData.topic+' along with AI image prompt in '+formData.imageStyle+' format for each scene and give me results in JSON format with imagePrompt and ContentText as field.'
    console.log(prompt)
    const result = await axios.post('/api/get-video-script', {
      prompt:prompt
    }).then(resp=>{
      console.log(resp.data.result);
      setVideoScript(resp.data.result);
    })
    setLoading(false);
  }

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-primary text-center'> Create New</h2>
      <div className='mt-10 shadow-md p-10'>
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandleInputChange}></SelectTopic>
        <SelectStyle onUserSelect={onHandleInputChange}/>
        <SelectDuration onUserSelect={onHandleInputChange}/>
        <Button className='mt-10 w-full' onClick={onCreateClickHandler}>Create Short Video</Button>
      </div>
      <CustomLoading loading={loading}/>
    </div>
  )
}

export default CreateNew