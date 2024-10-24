import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function User() {

    const [admins, setAdmins] = useState([])

    const getAdmins = async () => {

        const response = await fetch(`http://localhost:3000/user/admins`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })

        const data = await response.json();
        console.log(data.admins);

        setAdmins(data.admins);

    };

    useEffect(() => {
        getAdmins();
    }, [])

    return (
        <>
        <Link to="/user/assignment">Assignment</Link>
        <div className='flex gap-8 pt-4'>
            {admins && admins.map((admin) => 
                <div key={admin._id}>

                    <h1>{admin.fullname}</h1>
                    <h1>{admin.email}</h1>
                </div>
            )}
        </div>
        </>
    )
}

export default User
