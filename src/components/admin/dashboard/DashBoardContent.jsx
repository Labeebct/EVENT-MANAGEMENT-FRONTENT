import React from 'react'
import DashBoardStati from './DashBoardStati'
import DashBoardGraph from './DashBoardGraph'

const DashBoardContent = () => {
  return (
    <div className='p-5'>
    <DashBoardStati />
    <DashBoardGraph />
    </div>
  )
}

export default DashBoardContent