import React, {useEffect} from 'react'
import { Container, Button } from "reactstrap";  

const Home = () => {

  useEffect(() => {
    document.title ="Home || Courses App"
  }, []);

  return (
    <div>
        <Container fluid className="text-center bg-light p-4">
            <h1 className="display-3">Courses</h1>
            <p>This webapp is developed by Saurav leveraging Spring boot as backend and React Js as frontend</p>
            <Button color="primary">React</Button>
        </Container>
    </div>
  )
}

export default Home