import React, {useState} from "react";
import {validateFormRegister} from "../../utils/validateForm";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fname: "",
    sname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //using fetch
  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateError = validateFormRegister(formData);
    setErrors(validateError);
    if (Object.keys(validateError).length === 0) {
      try {
        const response = await fetch(
          "http://localhost:4000/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        if (response.ok) {
          toast.success("user added successfully");
          setFormData({
            fname: "",
            sname: "",
            email: "",
            password: "",
            cpassword: "",
          });
          setTimeout(() => {
            navigate("/sign-in")
          }, 800)
          console.log("register successfully", data);

        } else {
          toast.error("user alread exist");
          console.log("failed", data);
        }
      } catch (error) {
        toast.error(`Registration failed: ${error.message}`);
        console.error(error);
      }
    }
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateError = validateFormRegister(formData);
    setErrors(validateError);
    if (Object.keys(validateError).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/users/register",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status===200) {
          toast.success("User added successfully");
          setFormData({
            fname: "",
            sname: "",
            email: "",
            password: "",
            cpassword: "",
          });
          setTimeout(() => {
            navigate("/sign-in");
          }, 800);
        } else {
          toast.error("User already exists");
          console.log("Failed", response.data);
        }
      } catch (error) {
        toast.error(`Registration failed: ${error.message}`);
        console.error(error);
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
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                className={`${
                  errors.fname ? "text-red-500" : "text-gray-700"
                }  text-sm font-bold mb-2 flex`}
              >
                First Name{" "}
                {errors.fname && (
                  <p className="text-red-500 text-sm px-2">{errors.fname}</p>
                )}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fname"
                type="text"
                placeholder="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label
                className={`${
                  errors.sname ? "text-red-500" : "text-gray-700"
                }  text-sm font-bold mb-2 flex`}
              >
                Last Name{" "}
                {errors.sname && (
                  <p className="text-red-500 text-sm px-2">{errors.sname}</p>
                )}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sname"
                type="text"
                placeholder="Last Name"
                name="sname"
                value={formData.sname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className={`flex  text-sm font-bold mb-2 ${
                errors.email ? "text-red-500" : "text-gray-700"
              }`}
            >
              Email{" "}
              {errors.email && (
                <p className="text-red-500 text-sm px-2">{errors.email}</p>
              )}
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
            <label className={`text-sm font-bold mb-3 text-gray-700`}>
              {errors.password ? (
                <p className="text-red-500 text-sm px-2">{errors.password}</p>
              ) : (
                <p className="text-sm font-bold mb-3 text-gray-700">Password</p>
              )}
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
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cpassword"
            >
              {errors.cpassword ? (
                <p className="text-red-500 text-sm px-2">{errors.cpassword}</p>
              ) : (
                <p className="text-sm font-bold mb-3 text-gray-700">
                  Confirm Password{" "}
                </p>
              )}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="cpassword"
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              value={formData.cpassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              SIGN-UP
            </button>
          </div>
          <div className="text-center">
            <Link
              to="/sign-in"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Already have an account Login
            </Link>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            By clicking 'Log In' you agree to our website FootFlex Terms &
            Conditions, FootFlex Privacy Notice and Terms & Conditions P@ssw0rd!
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
