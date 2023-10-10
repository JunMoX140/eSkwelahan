import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import QuizCard from '../components/QuizCard'
import { MdAddBox } from 'react-icons/md'
import { Button, Radio, Label, Modal, TextInput, Textarea, Select, Card} from 'flowbite-react';
import { HiPlus, HiX } from 'react-icons/hi';
import useIsAuthenticated from '../hooks/useIsAuthenticated';
import { useNavigate, useParams } from 'react-router-dom';

function TeacherQuiz() {
  useIsAuthenticated();
  const navigate=useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [answer, setAsnwer] = useState('');
  const [choicesList, setChoicesList]=useState([]);
  const [quizes, setQuizes] =useState([]);
  const [quizTitle, setQuizTitle]=useState("");

  const choiceRef=useRef();
  const questionRef=useRef();
  const pointsRef=useRef();
  const {quizid, classid} = useParams();

  useEffect(() => {
    async function loadQuizDetails() {
      const response=await fetch(`/api/teacher/class/quiz/details/${quizid}`);
      const {details, content }= await response.json();
      const {title} = details[0];
      setQuizTitle(title);
      setQuizes(content);
      console.log(content)
    }
    loadQuizDetails();
  }, [quizid]);

  function onRemoveChoices(item){
    const index = choicesList.indexOf(item);
    if(index > -1){
      choicesList.splice(index, 1);
      setChoicesList([choicesList.toString()]);
    }
    console.log(choicesList.toString());
  }

   async function onAddQuiz(){
    const question= questionRef.current.value;
    const points= pointsRef.current.value;

    const quizobj= {
                      question : question,
                      choices : choicesList,
                      answer : answer,
                      points : points
                    }

    try{
      const response=await fetch(`/api/teacher/class/quiz/add`,{
        method: "POST",
        headers: {
          "Content-type" : "application/json",
        },
        body: JSON.stringify({
          quizId: quizid,
          content: quizobj,
          quizType: 1
        }),
      })

      const {activityContent, activityId, activityItemId, quizType} = await response.json();

      console.log(response.json());
      navigate(`/teacher/class/${classid}/quiz/${quizid}`);

      
    }
    catch{
      console.log("error");
    }
 
  }

 const onAddChoices=()=>{
  const choice= choiceRef.current.value;
    if(choice ==="" || choicesList.includes(choice)){
      choiceRef.current.value="";
      return;
    }
    setChoicesList((prev)=>([...prev, choice ]));
    choiceRef.current.value="";
  }
  
  return (
    <div className='bg-color3 pb-3'>
      <div className='w-full mb-3'>
        <span className='text-2xl ml-3 mt-3 text-color1 font-bold'>{quizTitle}</span>
      </div>
      <div className='flex w-full justify-center'>
        <Select className='w-2/5 text-sm rounded-lg' name="" id="">
          <option value="0">--Please select--</option>
          <option value="1">Multiple Choice</option>
        </Select>
        <Button onClick={()=> setOpenModal(true)} className='ml-2'><HiPlus className="h-4 w-4" /></Button>
      </div>
       <div>
        { quizes && quizes.map((quiz)=>(
          <QuizCard key={quiz.activityItemId} details={quiz.activityContent}/>
        ))
        }
       </div>

      <div>
          <Modal show={openModal == true} onClose={() => setOpenModal(false)}>
            <Modal.Header>Add Quiz Details</Modal.Header>
            <Modal.Body>
              <div>
              <Label htmlFor='question' sizing="sm">Question</Label>
              <Textarea
                id="question"
                placeholder="Question..."
                required
                rows={4}
                sizing="sm"
                ref={questionRef}
              />
              </div>
              <div className='flex items-end mt-2'>
                <div className='w-2/5'>
                    <Label htmlFor='choices' sizing="sm">Choices</Label>
                    <TextInput type="text" sizing="sm" ref={choiceRef} /> 
                </div>
                <div className='flex items-end mt-3'>
                <div className='w-2/5 px-2'>
                    <Button size="sm" onClick={onAddChoices} >
                      <HiPlus className="h-4 w-4" />
                    </Button>
                </div>
                </div>

                  <div className='flex w-3/5 justify-end'>
                    <div className='w-1/3'>
                      <Label htmlFor='choices' sizing='sm'>Points</Label>
                      <TextInput type='number' sizing='sm' ref={pointsRef} required /> 
                    </div>
                </div>
          
              </div>
              
              <div className='mt-2'>
              <Label sizing="sm">Answer</Label>
              <fieldset 
                  className="flex mt-3 max-w-md flex-col gap-4 className='text-xs'"
                  id="radio"
                >
                  {
                     choicesList && choicesList.map((choice) =>(
                      <div  key={choice} className="flex items-center gap-2">
                      <Radio 
                        id={choice}
                        sizing="sm"
                        value={choice}
                        name='choices'
                        onChange={(e)=>setAsnwer(e.target.value)}
                      />
                      <Label sizing="sm" className='w-20 text-xs ml-2'>
                        {choice}
                      </Label>
                      <Button onClick={()=>onRemoveChoices(choice)} className='h-4 w-6'>
                        <HiX className='h-2'/>
                      </Button>
                    </div>
                    ))
                  }
                </fieldset>
              </div>
             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onAddQuiz}>Add</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>Cancel</Button>
            </Modal.Footer>
          </Modal>
      </div>
    </div>
    
  )
}

export default TeacherQuiz