import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => { 
    const result = await axios.get("http://localhost:8080/items");
    setUsers(result.data);
  };

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/user/${id}`);
  //   loadUsers();
  // };
function click(){
  alert("download sucessflly")
}

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">School</th>
              <th scope="col">Classs</th>
              <th scope="col">Roll no</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
          
            {users.map((user) => (
              <tr>
              
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.school}</td>
                <td>{user.classs}</td>
                <td>{user.rollno}</td>
                <td>{user.address}</td>
                <td>
                 <button onClick={click}> Download</button>
                 
                
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link className="btn btn-outline-primary mx-2"
                    to={`/adduser`}
                  >
                    Add Student
                  </Link>

                  
      </div>
    </div>
  );
}
