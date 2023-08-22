import React from 'react'
import { Card, Label, Radio} from 'flowbite-react';
import {MdDelete, MdEditSquare} from 'react-icons/md'

function QuizCard() {
  return (
    <div className='flex'>
    <div className='my-4'>
      <Card className='bg-lm-bg'>
      <fieldset className="flex max-w-md flex-col gap-4 border-gray-50" id="radio">
      <legend className="mb-6">
        <textarea name="" id="" cols="100" rows="5" placeholder='Question'></textarea>
      </legend>
      <div className="flex items-center gap-2">
        <Radio
          id="united-state"
          name="countries"
          value="USA"
        />
        <Label htmlFor="united-state">
          United States
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          id="germany"
          name="countries"
          value="Germany"
        />
        <Label htmlFor="germany">
          Germany
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          id="spain"
          name="countries"
          value="Spain"
        />
        <Label htmlFor="spain">
          Spain
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          id="uk"
          name="countries"
          value="United Kingdom"
        />
        <Label htmlFor="uk">
          United Kingdom
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          disabled
          id="china"
          name="countries"
          value="China"
        />
        <Label
          disabled
          htmlFor="china"
        >
          <p>
            China (disabled)
          </p>
        </Label>
      </div>
    </fieldset>
    
      </Card>
    </div>
    <div className='bg-lm-bg m-4 w-24 p-2'>
      <button><MdEditSquare className='h-10 w-full'/></button>
      <button><MdDelete/></button>
      
      
    </div>
    </div>
    

  )
}

export default QuizCard