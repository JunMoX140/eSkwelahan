import React, { useState } from 'react'
import { Card, Label, Radio, Textarea, TextInput, Button} from 'flowbite-react';

function StudentQuizCard(props) {

if(props.details == null){
    return null;
}
    
const [choicesList, setChoicesList]=useState(props.details.choices);

  return (
    <div>
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
  )
}

export default StudentQuizCard