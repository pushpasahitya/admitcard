import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import PDF from './PDF';
import PDF from "../pages/PDF";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    school: "",
    classs:"",
    rollno:"",
    address:"", 
  });

  const { name,phone,school,classs,rollno,address} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/add", user);
    navigate("/");
  };

  return (
    <>
    {
    (<div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                NAME:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div >
              <label htmlFor="phone" className="form-label">
             PHONE:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phone no"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor="school" className="form-label">
              SCHOOL NAME:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your school"
                name="school"
                value={school}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor=" classs" className="form-label">
                CLASSS:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your classs"
                name="classs"
                value={classs}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="rollno" className="form-label">
               ROLL NO:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your rollno"
                name="rollno"
                value={rollno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                ADDRESS:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <button type="submit" className="btn btn-outline-primary">
              Submit:
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
      
     
    </div>)

  }
  </>
   
  );
}
