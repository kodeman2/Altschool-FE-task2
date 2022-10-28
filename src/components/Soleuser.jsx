import React from 'react'

const Soleuser = ({user}) => {

  return (
    <div className='usercontainer'>
     <div className="userimg">
      
     <img src={user.picture.thumbnail} alt="user picture"/>
     </div>
     <div className="username">
      
  <h1>{`Full Name: ${user.name.first} ${user.name.last}`}</h1>
     </div>
     <div className="userphone">
  <h1>{`Phone Number: ${user.phone} `}</h1>
    </div>

    </div>
  )
}

export default Soleuser