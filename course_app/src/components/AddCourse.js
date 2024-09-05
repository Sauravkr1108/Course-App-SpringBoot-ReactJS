import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Button, Container, Form, FormGroup, Input} from 'reactstrap'
import base_url from '../api/springApi';
import { toast } from 'react-toastify';

const AddCourse = () => {

    useEffect(() => {
        document.title ="Add Courses"
    }, []);

    const [course, setCourse] = useState({});

    const handleForm = (e) => {
        e.preventDefault();
        console.log(course);
        postDataToServer(course);
        setCourse({id:"", title:"", description:""})
    };

    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (Response) => {
                console.log(Response);
                console.log("success");
                toast.success("Courses added successfully.");
            }
        )
        .catch(
            (Error) => {
                console.log(Error);
                console.log("error");
                toast.error("Server Error!");
            }
        )
    };

    return (
        <div>
            <h1 className='display-6 py-3 text-center'>Fill course detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label>Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" 
                        onChange={(e) => {
                            setCourse({...course, id: e.target.value})
                        }}/>
                </FormGroup>
                <FormGroup>
                    <label>Course Title</label>
                    <Input type="text" placeholder="Enter title" name="title" id="title" 
                        onChange={(e) => setCourse({...course, title: e.target.value})}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Course Description</label>
                    <Input type="textarea" placeholder="Enter description" name="description" id="description" 
                        onChange={(e) => setCourse({...course, description: e.target.value})}
                    />
                </FormGroup>
                <Container className='text-center'>
                    <Button type="submit" color="success">Add Course</Button>&nbsp;
                    <Button color="primary" type="reset" >Clear</Button>
                </Container>
            </Form>
        </div>
  )
}

export default AddCourse