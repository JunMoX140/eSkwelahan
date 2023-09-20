import React, { useRef } from 'react'
import { useState } from 'react';
import QuizCard from '../components/QuizCard'
import { GrAdd } from 'react-icons/gr'
import { Button, Radio, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import { HiPlus } from 'react-icons/hi';

function TeacherQuiz() {

  const [openModal, setOpenModal] = useState(false);
  const [choicesList, setChoicesList]=useState([]);
  const [answer, setAsnwer] = useState('');

  const [quiz, setQuizes] = useState({
    Question: '',
    Choices: [],
    Answer: '',
    Points:0
  });

  const choiceRef=useRef();

   function onAddQuiz(){
    console.log(answer.toString());
  }

 const onAddChoices=()=>{
    const data= choiceRef.current.value;
    setChoicesList((prev)=>([...prev, data ]));
    choiceRef.current.value="";
  }
  
  return (
    <div >
      <div className='flex w-full'>
        <select className='w-4/5 text-sm rounded-lg' name="" id="">
          <option value="0">--Select Quiz Type--</option>
          <option value="1">Multiple Choice</option>
          <option value="2">Essay</option>
        </select>
        <button onClick={()=> setOpenModal(true)} className='w-1/5 p-2 ml-3 bg-lm-bg rounded'><GrAdd className='mx-auto'/></button>
      </div>
       <div>
      
       </div>

      <div>
          <Modal show={openModal == true} onClose={() => setOpenModal(false)}>
            <Modal.Header>Add Quiz</Modal.Header>
            <Modal.Body>
              <div>
              <Label htmlFor='question'>Question</Label>
              <Textarea
                id="question"
                placeholder="Question..."
                required
                rows={4}
              />
              </div>
              <div className='flex items-end mt-3'>
                <div className='w-2/5'>
                  <Label htmlFor='choices'>Points</Label>
                  <TextInput type='number' ref={choiceRef} /> 
              </div>
          
              </div>
              <div className='flex items-end mt-3'>
                <div className='w-2/5'>
                  <Label htmlFor='choices'>Choices</Label>
                  <TextInput ref={choiceRef} /> 
              </div>
              <div className='w-2/5 px-2'>
                  <Button pill onClick={onAddChoices}>
                    <HiPlus className="h-6 w-6" />
                  </Button>
              </div>
              
              </div>
              <div className='mt-3'>
              <Label>Answer</Label>
              <fieldset onChange={()=>setAsnwer()}
                  className="flex mt-3 max-w-md flex-col gap-4"
                  id="radio"
                >
                  {
                    choicesList.map( (list) =>(
                      <div  key={list} className="flex items-center gap-2">
                      <Radio 
                        id={list}
                        value={list}
                        name='choices'
                      />
                      <Label htmlFor={list}>
                        {list}
                      </Label>
                    </div>
                    ))
                  }
                </fieldset>
              </div>
             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onAddQuiz}>Add</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    </div>
    
  )
}

export default TeacherQuiz