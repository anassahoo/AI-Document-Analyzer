import React from 'react'
import ToggleSwitch from './toggleSwitch'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center p-4 bg-white dark:bg-slate-900 shadow-md border-b border-gray-200 dark:border-gray-700 transition-colors'>
        <h1 className='text-3xl font-bold text-[#1e293b] dark:text-white'>AI Document Analyzer</h1>
        <h1 className='ml-auto mr-auto text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent'>Welcome To Dashboard</h1>
        <div className='flex items-center gap-3'>
          <h3 className='text-lg text-[#1e293b] dark:text-gray-300 font-medium'>Theme</h3>
          <div>{<ToggleSwitch />}</div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar
