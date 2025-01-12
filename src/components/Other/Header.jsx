import React from 'react';

function Header({setUser, loggedInUserData}) {

    const logOutUser = () => {
        localStorage.setItem('loggedInUser','')
        // window.location.reload()
        setUser('')
    }

    const usernameData = JSON.parse(localStorage.getItem('loggedInUser'))
    
    let username 
    if (usernameData.data.firstName == 'Admin') {
        username = 'Admin'
    }else{
        username = usernameData.data.firstName
    }
    
    
    
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{username}👋</span> </h1>
            <button 
            onClick={logOutUser}
            className='bg-red-600 text-base font-medium px-5 py-2 rounded-sm'>Log Out</button>
        </div>
    )
}

export default Header
