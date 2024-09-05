import axios from 'axios'
import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container} from "reactstrap"
import base_url from '../api/springApi'
import { toast } from 'react-toastify'
import UpdateCourse from './UpdateCourse'
import Home from './Home'
import { Link } from 'react-router-dom'

const Course = ({course, update}) => {

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/course/${id}`).then(
      (Response) => {
        console.log(Response.data)
        update(id);
        toast.success("Course deleted.",{position: "bottom-center"})
      },
      (Error) => {
          console.log(Error.data)
          toast.error("Server error!")
      }
    )
  };

  return (
    <Card>
        <CardBody className='text-center'>
            <CardSubtitle className='fw-bold'>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container>
                <Button size="sm" color="danger" onClick={() => deleteCourse(course.id)}>Delete</Button>&nbsp;&nbsp;
                <Link to={'/update-course/'+course.id}><Button size="sm" color="warning">Update</Button></Link>
            </Container>
        </CardBody>
    </Card>
  )
}

export default Course