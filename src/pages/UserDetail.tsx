import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  console.log(id);

  return <div>UserDetail {id}</div>;
};

export default UserDetail;

// same with Users.tsx
// just custom api : https://jsonplaceholder.typicode.com/users/ + id
//  const [user, setUser] = useState<User| null>(null);
