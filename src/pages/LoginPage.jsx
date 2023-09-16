import React from 'react'
import { Form } from 'react-router-dom'
import { TextInput, Button, Label, Card } from 'flowbite-react'
import DefaultNavbar from '../components/DefaultNavbar'

export default function LoginPage() {
  return (
    <>
        <div className='w-full h-screen'>
            <div>
                <DefaultNavbar />
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-80'>
                    <Card>
                        <Form method='POST'>
                            <div className='mb-3'>
                                <Label>Username :</Label>
                                <TextInput />
                            </div>
                            <div className='mb-3'>
                                <Label>Password :</Label>
                                <TextInput />
                            </div>
                            <div className='w-100 bg-slate-100'>
                                <Button className='w-full'>Login</Button>
                            </div>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
        
    </>
    
  )
}
