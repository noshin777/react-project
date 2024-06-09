import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";



const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsersList = async () => {
    let result = await fetch("http://localhost:7000/api/auth/list");
    result = await result.json();
    console.log(result);
    setUsers(result);
  };

  const deleteUser = async(userId) =>{
    let result = await fetch(`http://localhost:7000/api/auth/list/${userId}`,{
        method: 'DELETE',
    })
    result = await result.json();
    if(result){
        getUsersList()
    }

  }

  useEffect(() => {
    getUsersList();
  }, []);
  return (
    <>
      <h1 className="my-3 text-center">List of Users</h1>
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr className="rowbg">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Address</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <>
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.address}</td>
                    <td>
                      <a className="btn btn-success me-2 btn-sm">
                      <FaEdit />
                      </a>
                      <button onClick={()=>deleteUser(user._id)} className="btn btn-danger btn-sm">
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Users;
