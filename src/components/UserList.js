import React from 'react';
import { useEffect ,useState} from "react";
import axios from 'axios';

function UserList () {
       const [listOfUser,setlistOFeUser] = useState([]);
       useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
          setlistOFeUser(response.data);
        });
      }, []);
      

  return (
    <div>
      {listOfUser.map((lol)=>
      <p>{lol.name}</p>
      )}
    </div>
  )
}

export default UserList
