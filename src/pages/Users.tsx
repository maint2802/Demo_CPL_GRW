import { Link, useNavigate } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import { fetchUsers } from "../services/users";
type Company = {
  name: string;
};
type User = {
  id: number;
  username: string;
  company: Company;
};

const Users = () => {
  const { data: users, isLoading, error } = useFetch<User[]>(fetchUsers);

  const nav = useNavigate();

  const handleToDetail = (id: number) => {
    nav("/users/" + id);
    //
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <div>
      <h2>Users</h2>
      <div>
        {users &&
          users.map((user) => {
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
