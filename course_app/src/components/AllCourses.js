import React, { useState, useEffect } from 'react'
import Course from './Course'
import { Button } from 'reactstrap';
import base_url from '../api/springApi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllCourses = () => {

    useEffect(() => {
        document.title ="All Courses"
    }, []);

    const getAllCourses = () => {
        axios.get(`${base_url}/courses`).then(
            (Response) => {
                console.log(Response.data)
                toast.success("Courses has been loaded.",{position: "bottom-center"})
                setCourse(Response.data)
            },
            (Error) => {
                console.log(Error.data)
                toast.error("Server error!")
            }
        );
    };

    useEffect(() => {
        getAllCourses();
    }, []);

    const [courses, setCourse] = useState([]);

    const removeCourseById = (id) => {
        setCourse(courses.filter(c => c.id != id))
    }

    return (
        <div>
            {/* <Button onClick={() => {
                console.log("testing");
                setCourse([
                    ...courses,
                    {
                        title: "Angular",
                        description: "Demo"
                    }
                ]);
                
            }}>New</Button> */}
            <h2>AllCourses</h2>
            <p>List of courses: </p>
            {
                courses.length>0 ? courses.map((item) => (<Course key={item.id} course={item} update={removeCourseById} />)) : "No courses"
            }
        </div>
    );
}

export default AllCourses