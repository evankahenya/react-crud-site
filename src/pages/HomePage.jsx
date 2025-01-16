import React from 'react'
import HomeCards from '../components/HomeCards'
import Hero from '../components/Hero'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <>
       <Hero />
       <HomeCards />
       <JobListings isHome='true'/>
       <ViewAllJobs />
       
    </>

  )
}

export default HomePage