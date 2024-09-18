import React from 'react'

function Register() {
  return (
    <div className='ml-10'>
        <h1 className='text-4xl font-semibold mb-5'>Register</h1>
        <form className='w-64'>
            <div className='flex flex-col'>
                <label>First Name</label>
                <input type="text" className='border-b-2'/>
            </div>
            <div className='flex flex-col'>
                <label>Last Name</label>
                <input type="text" className='border-b-2'/>
            </div>
            <div className='flex flex-col'>
                <label>Email</label>
                <input type="email" className='border-b-2'/>
            </div>
            <div className='flex flex-col'>
                <label>Password</label>
                <input type="password" className='border-b-2'/>
            </div>
            <button type="submit" className='border-blue-300 border-2 p-3 rounded-xl mt-5'>Register</button>
        </form>
    </div>
  )
}

export default Register