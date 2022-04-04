import React,{useState} from 'react'
import UserContext from './UserContext'


function FetchUsers(props) {
  
  // this store the data of users...
  const [data, setData] = useState([]);

  // this checks loading is true or false...
  const [loading, setLoading] = useState(true);

  // Fetch users from the API...
  const fetchData = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}&per_page=${6}`);
    await setLoading(true)
    let json = await response.json();
    // await setTimeout(()=>{setLoading(false)},100)
    await setData(json.data);
    setLoading(false)
  };


  return (
    <UserContext.Provider value={{fetchData,data,loading}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default FetchUsers;


