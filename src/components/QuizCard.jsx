import React, { useState } from 'react'
import { Card, Label, Radio, Textarea, TextInput, Button} from 'flowbite-react';
import {MdDelete, MdEditSquare} from 'react-icons/md';
import { HiPlus } from 'react-icons/hi';

function QuizCard(props) {
  if(props.details == null){
    return null;
  }
  
  const [choicesList, setChoicesList]=useState(props.details.choices);
  
  return (
    <div>
      <div className='flex h-full p-3'>
        <div className='flex-1'>
        <Card>
            <div>
              <Label htmlFor='question' sizing="sm">Question</Label>
              <Textarea
                id="question"
                placeholder="Question..."
                required
                rows={4}
                size="xs"
                className='text-sm'
                value={props.details.question}
                readOnly
              />
              </div>

              <div className='flex'>
                  <div className=''>
                  <Label sizing="sm">Choices</Label>
                  <ul>
                    <li></li>
                  </ul>
                  <fieldset className="flex max-w-md flex-col gap-2 text-xs" id="radio">
                      { choicesList && choicesList.map((choice) =>(
                          <div  key={choice} className="flex items-center gap-2">
                          <Radio 
                            sizing="sm"
                            value={choice}
                            name='choices'
                            onChange={(e)=>setAsnwer(e.target.value)}
                          />
                          <Label sizing="sm">
                            {choice}
                          </Label>
                        </div>
                        ))
                      }
                    </fieldset>
                  </div>

                  <div className='flex w-3/5 justify-end'>
                    <div className='flex w-1/3'>
                      <Label htmlFor='choices' sizing='sm'>Points: </Label>
                      <Label>{props.details.points}</Label>
                    </div>
                </div>
              </div>
            </Card>
            
        </div>
          <div className='w-28 ml-5'>
          <Card>
              <Button size="xs">EDIT</Button>
              <Button size="xs" color="failure">DELETE</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default QuizCard