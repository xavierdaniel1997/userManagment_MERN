import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { validateFormSignUp } from "../../utils/validateForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validateError = validateFormSignUp(formData)
    setErrors(validateError)
    if(Object.keys(validateError).length===0){
      try{
        const response = await fetch("http://localhost:4000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(formData)
        })
        const data = await response.json()
        if(response.ok){
          toast.success("Login successfully")
          setFormData({
            email: "",
            password: ""
          })
          setTimeout(() => {
            navigate("/")
          }, 700)
          console.log("Login successfully", data)
        }else{
          console.log("login failed", data);
          toast.error(data.message)
        }
      }catch(error){
        toast.error(`Login failed ${error.message}`)
        console.error(error)
      }
    }
  };
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="flex flex-1 justify-center items-center bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover h-svh w-full"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-8">FOOTFLEX</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className={`flex  text-sm font-bold mb-2 gap-1 ${errors.email? "text-red-500" : "text-gray-700"}`}
            >
              Email {errors.email && (<p>{errors.email}</p>)}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className={`flex text-sm font-bold mb-2 gap-1 ${errors.password? "text-red-500" : "text-gray-700"}`} 
            >
              Password {errors.password && (<p>{errors.password}</p>)}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              SIGN-IN
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/sign-up"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Register here to Sign-Up
            </Link>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            By clicking 'Log In' you agree to our website FootFlex Terms &
            Conditions, FootFlex Privacy Notice and Terms & Conditions
            P@ssw0rd!
          </p>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
