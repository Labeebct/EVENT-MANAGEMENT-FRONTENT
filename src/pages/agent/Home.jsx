import React from 'react'
import timeoutLoading from '../../config/timeoutLoading'
import HomeContent from '../../components/agent/home/HomeContent'

const Home = () => {
  timeoutLoading()
  return (
    <HomeContent />
  )
}

export default Home