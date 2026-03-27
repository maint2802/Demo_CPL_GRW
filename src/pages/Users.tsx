import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
type Company = {
  name: string;
};
type User = {
  id: number;
  username: string;
  company: Company;
};

const usersApi = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get(usersApi).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const nav = useNavigate();

  const handleToDetail = (id: number) => {
    nav("/users/" + id);
    //
  };

  return (
    <div>
      <h2>Users</h2>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>id: {user.id}</p>
              <p>username: {user.username}</p>
              <p>company name: {user.company.name}</p>
              <button onClick={() => handleToDetail(user.id)}>Detail</button>
              <Link to={"/users/" + user.id}>Detail by Link</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;

// axios vs fetch
