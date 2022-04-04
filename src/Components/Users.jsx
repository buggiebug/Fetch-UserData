import React from 'react'

function Users(props) {

    const {data} = props;
    
  return (
      
        <div id="box">
          <img src={`${data.avatar}`} alt="avatar"/>
          <p><strong>{data.first_name} {data.last_name}</strong></p>
          <p><strong>E-mail: </strong>{data.email}</p>
        </div>
  
  )
}

export default Users