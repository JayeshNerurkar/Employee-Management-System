import React, { useState } from 'react'

function Login({handleLogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const submitHandler = (e) => {
        e.preventDefault()
        // console.log('Form is submitted');
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl p-20 border-emerald-600'>
                <form onSubmit={(e) => submitHandler(e)}
                className='flex flex-col items-center justify-center'
                >
                    <input 
                    value={email}
                    required
                    className='bg-transparent border-2 border-emerald-600 font-medium text-lg rounded-full py-2 px-4 outline-none placeholder:text-gray-400'
                    type="email" placeholder='Enter your email' 
                    onChange={(e) => setEmail(e.target.value)}
                    />    
                    <input 
                    value={password}
                    required
                    className='bg-transparent border-2 border-emerald-600 font-medium text-lg rounded-full py-2 px-4 outline-none mt-3 placeholder:text-gray-400'
                    type="password" placeholder='Enter password' 
                    onChange={(e) => setPassword(e.target.value)}
                    /> 
                    <button className='outline-none mt-7 text-white bg-emerald-700 hover:bg-emerald-800 font-semibold text-lg py-2 px-8 w-full rounded-full'>Log In</button>   
                </form>
            </div>
        </div>
    )
}

export default Login
