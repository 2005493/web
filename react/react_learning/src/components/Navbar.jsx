import React from 'react'

const Navbar = () => {
  return (
    <div className='m-0'>
      <nav className='flex justify-between items-center '>
        <div className=''>
            <img src='/Frame.png'></img>
        </div>
      <div>
        <ul className='list-none flex space-x-4 font-semibold pr-1'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
     </nav>
    </div>
  )
}

export default Navbar
