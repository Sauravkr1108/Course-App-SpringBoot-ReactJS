import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Button, Container, Form, FormGroup, Input} from 'reactstrap'
import base_url from '../api/springApi';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCourse = () => {

    useEffect(() => {
        document.title = "Update Course"
    }, [])

    const {id} = useParams();

    const [course, setCourse] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${base_url}/${id}`).then(
            (Response) => {
                setCourse(Response.data)
                console.log(Response.data)
            } 
        ).catch(
            (Error) => {
                console.log(Error.data)
                toast.error("Server error!")
            }
        )   
    }, [])

    const handleForm = (e) => {
        e.preventDefault();
        console.log(course);
        postDataToServer(course);
    };

    const postDataToServer = (data) => {
        axios.put(`${base_url}/courses`, data).then(
            (Response) => {
                console.log(Response);
                console.log("success");
                toast.success("Courses Updated");
                navigate("/view-course")
            }
        )
        .catch( 
            (Error) => {
                console.log(Error);
                console.log("error");
                toast.error("Server Error!");
            }
        )
    }

    return (
        <div>
            <h1 className='display-6 py-3 text-center'>Edit Course</h1>
                <Form onSubmit={handleForm}>
                    <FormGroup>
                        <label>Course Id</label>
                        <Input type="text" value={course.id} name="userId" id="userId" readOnly/>
                    </FormGroup>
                    <FormGroup>
                        <label>Course Title</label>
                        <Input type="text" value={course.title} placeholder="Enter title" name="title" id="title" 
                            onChange={(e) => setCourse({...course, title: e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Course Description</label>
                        <Input type="textarea" value={course.description} placeholder="Enter description" name="description" id="description" 
                            onChange={(e) => setCourse({...course, description: e.target.value})}
                        />
                    </FormGroup>
                    <Container className='text-center'>
                        <Button type="submit" color="success">Update Course</Button>&nbsp;
                    </Container>
                </Form>
        </div>
  )
}

export default UpdateCourse;