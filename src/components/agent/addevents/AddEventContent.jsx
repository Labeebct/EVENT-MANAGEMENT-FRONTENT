import React from 'react'
import AddEventFrame from './AddEventFrame'

const AddEventContent = ({type}) => {
  return (
    <div className='flex justify-center p-10 items-center h-auto min-h-[calc(100vh-4.5rem)] w-full'>
    <AddEventFrame type={type} />
    </div>
  )
}

export default AddEventContent