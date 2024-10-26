import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Register() {

  const url = useLocation();
  const hasAdmin = url.pathname.includes('admin');

  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let registerUrl = "";

    if (hasAdmin) {
      registerUrl = `http://localhost:3000/admin/register`
    }
    else {
      registerUrl = `http://localhost:3000/user/register`
    }

    const response = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
      credentials: "include"
    })

    const data = await response.json();
    console.log(data);

    setDetails({
      fullname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="relative w-full h-screen">
      <h1 className="text-center sm:text-[48px] xs:text-[30px] text-[20px]"> {`${hasAdmin ? "Admin" : "User"} Registration Form`} </h1>
      <form
        className="flex gap-3 flex-col sm:w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onSubmit={handleLogin}
      >
        <input
          className="bg-transparent rounded-md border-[1px] px-3 py-1"
          type="text"
          name="fullname"
          placeholder="name"
          value={details.fullname}
          onChange={handleChange}
        />
        <input
          className="bg-transparent rounded-md border-[1px] px-3 py-1"
          type="email"
          name="email"
          placeholder="email"
          value={details.email}
          onChange={handleChange}
        />
        <input
          className="bg-transparent rounded-md border-[1px] px-3 py-1"
          type="password"
          name="password"
          placeholder="password"
          value={details.password}
          onChange={handleChange}
        />
        <button
          className="border-[1px] outline-none px-3 py-2 bg-blue-600 rounded-md sm:w-1/4 self-center"
          type="submit"
        >
          Register here
        </button>

        <p className="text-center">Already an {`${hasAdmin ? "Admin" : "User"}`} <Link to={`${hasAdmin ? "/admin" : "/user"}/login`} className="text-blue-300">Login Here</Link></p>
      </form>
    </div>
  );
}

export default Register;
