import React, { useEffect, useState } from 'react'

const SubmittedAssignments = () => {

    const [assignments, setAssignments] = useState([]);

    const getSubmittedAssignments = async () => {
        const response = await fetch("http://localhost:3000/admin/assignments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })

        const data = await response.json();
        console.log(data);
        
        setAssignments(data.taggedAssignments);

    }

    useEffect(() => {
        getSubmittedAssignments();
    }, []);

    const handleReject = async (id) => {
        const response = await fetch(`http://localhost:3000/admin/assignments/${id}/reject`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
            credentials: "include"
        })

        const data = await response.json();
        console.log(data);

    }

    const handleAccept = async (id) => {
        const response = await fetch(`http://localhost:3000/admin/assignments/${id}/accept`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
            credentials: "include"
        })

        const data = await response.json();
        console.log(data);
    }

  return (
    <div>
      {

        assignments && assignments.map((assignment) => 
            
            <div key={assignment._id} className='w-1/4 mt-4'>
                <p>{assignment.task}</p>
                <button onClick={() => handleReject(assignment._id)}>Reject</button>
                <button onClick={() => handleAccept(assignment._id)} className='ml-6'>Accept</button>
            </div>
        )

      }
    </div>
  )
}

export default SubmittedAssignments
