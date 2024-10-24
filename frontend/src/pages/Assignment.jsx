import React, { useState } from 'react'

function Assignment() {

    // const navigate = useNavigate();

    const [details, setDetails] = useState({
        task: "",
        adminName: "",
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

        const response = await fetch(`http://localhost:3000/user/upload`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
            credentials: "include"
        })
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>

            <div className="relative w-full h-screen">

                <h1 className="text-center sm:text-[48px] xs:text-[30px] text-[20px]">Create an Assignment</h1>
                <form
                    className="flex gap-3 flex-col w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    onSubmit={handleLogin}
                >
                    <input
                        className="bg-transparent rounded-md border-[1px] px-3 py-1"
                        type="text"
                        name="task"
                        placeholder="Task"
                        value={details.task}
                        onChange={handleChange}
                    />
                    <input
                        className="bg-transparent rounded-md border-[1px] px-3 py-1"
                        type="text"
                        name="adminName"
                        placeholder="Admin Name"
                        value={details.adminName}
                        onChange={handleChange}
                    />
                    <button
                        className="border-[1px] outline-none px-3 py-2 bg-blue-600 rounded-md sm:w-1/4 self-center text-[18px]"
                        type="submit"
                    >
                        Submit Assignment
                    </button>
                </form>
            </div>

        </div>
    );
}

export default Assignment
