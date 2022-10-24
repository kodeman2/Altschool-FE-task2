
 import User from "./User";
 import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { USERS_PER_PAGE } from "../utilities/constants";


export default function Users() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);

useEffect(() => {
 const fetchUsers = async () => {
  setLoading(true);
  const res= await axios.get('https://randomuser.me/api/?page=1&results=50&nat=us');
  setLoading(false);
  setUsers(res.data.results);
  setTotalPages(Math.ceil(res.data.results.length / USERS_PER_PAGE));
};

fetchUsers();
}, []);

const handleClick = (number) => {
 setPage(number);
}

return ( 

<div className="users">
 <Pagination totalPages={totalPages} handleClick={handleClick} page={page}/>
 <h1>Users</h1>
 <p>Page {page}</p>
 {loading ? <p>Loading...</p> :
 <div className="mainuser">
 <User users={users} page={page}/>

 </div>}
</div>)
}


