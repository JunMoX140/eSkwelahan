import React, { useRef } from 'react'
import { useState } from 'react';
import { Button, Modal, TextInput  } from 'flowbite-react';


function ModalAddQuiz({openModal, setOpenModal}) {
  const quizNameRef=useRef();

  async function onClickAddQuiz(){
    const response=await fetch("/api/teacher",{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify({
        teacherId : Number(teachedId),
        subjectName : subjectName.current.value,
        description : description.current.value,
        subjectCode : subjectCode.current.value,
        schedule : schedule.current.value,
      }),
    })
    return redirect(`/teacher/class`);

    console.log(quizNameRef.current.value)
    setOpenModal(false);

  }
  
  return(
    <>
      {/* <Button onClick={() => props.setOpenModal('default')}>Toggle modal</Button> */}
      <Modal size="sm" show={openModal == true} onClose={() => setOpenModal(false)}>
      {/* <Modal show={props.openModal==="default"} onClose={props.openModal==""}> */}
        <Modal.Header>Add Quiz Name</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <TextInput
              type='text'
              id="txtQuiz"
              placeholder="Quiz Name"
              required
              className='text-xs'
              ref={quizNameRef}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" onClick={onClickAddQuiz}>Create Quiz</Button>
          <Button size="sm" color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )


  // const handleOnClose =(e)=> {
  //   if(e.target.id  === "container") onClose();
  // };

  // if(!visible) return null;

  // return (
  //   <div>
  //     {/* <button
  //       type="button"
  //       class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
  //       data-te-toggle="modal"
  //       data-te-target="#exampleModalXl"
  //       data-te-ripple-init
  //       data-te-ripple-color="light">
  //       Extra large modal
  //     </button> */}
  //       <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  //       <div  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  //       <div className="fixed inset-0 z-10 overflow-y-auto">
  //         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          
  //           <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
  //             <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
  //               <div className="sm:flex sm:items-start">
  //                 <input type="text" className='w-full' />
  //               </div>
  //             </div>
  //             <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
  //               <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Add</button>
  //               <button onClick={onClose} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default ModalAddQuiz