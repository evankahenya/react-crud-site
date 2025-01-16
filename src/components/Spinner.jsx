import React from 'react'
import HashLoader from 'react-spinners/HashLoader'


const override = {
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({loading}) => {
  return (
    <HashLoader 
    color= '#4338CA'
        loading={loading}
        cssOverride={override}
        size={150}
      // speedMultiplier = '1'
     
    
    />
  )
}

export default Spinner