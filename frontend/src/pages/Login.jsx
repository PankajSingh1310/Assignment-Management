import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Cookies from "js-cookie";

function Login() {

    const { role } = useParams();
    
    const navigate = useNavigate();

    const [details, setDetails] = useState({
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

    //   console.log(details);

    const handleLogin = async (e) => {
        e.preventDefault();

        let loginUrl = "";

        if (role === "Admin") {
            loginUrl = "http://localhost:3000/admin/login"
        }
        else {
            loginUrl = "http://localhost:3000/user/login"
        }

        const response = await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
            credentials: "include"
        })
        const data = await response.json();
        console.log(data);

        const token = Cookies.get('token');
        console.log(token);

        if(token){
            navigate("/user/admins");
        }
        else{
            navigate("/user/register");
        }
    };

    return (
        <div>

            {

                (role === "Admin" || role === "User") ?

                    <div className="relative w-full h-screen">

                        <h1 className="text-center sm:text-[48px] xs:text-[30px] text-[20px]">{role} Login Form</h1>
                        <form
                            className="flex gap-3 flex-col w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            onSubmit={handleLogin}
                        >
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
                                className="border-[1px] outline-none px-3 py-2 bg-blue-600 rounded-md sm:w-1/4 self-center text-[18px]"
                                type="submit"
                            >
                                Login here
                            </button>
                        </form>
                    </div>

                    :

                    <div className="text-center text-3xl mt-20"> Invalid Url request</div>

            }

        </div>
    );
}

export default Login;
