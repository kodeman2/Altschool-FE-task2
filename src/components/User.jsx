import { USERS_PER_PAGE } from "../utilities/constants";
import Soleuser from "./Soleuser";

const User = ({ users, page }) => {
  const start = (page - 1) * USERS_PER_PAGE;
const selectedUsers = users.slice(start, start + USERS_PER_PAGE);
 return selectedUsers.map((user) => (
  <Soleuser user={user} key={user.login.uuid}/>
  ))
}  

export default User;