import React from "react";
import './App.css';
import Header from './components/Header';
import {Button, Col, Container, Row} from "reactstrap"
import { ToastContainer, toast} from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UpdateCourse from "./components/UpdateCourse";

function App() {

  const btnHandle = () => {
    toast("Success");
    toast.error("Error!", {
      position: "top-center"
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={3}>
              <Menu />
            </Col>
            <Col md={9}>
            <Routes>
              <Route path="/" Component={Home} exact/>
              <Route path="add-course" Component={AddCourse} exact />
              <Route path="view-course" Component={AllCourses} exact />
              <Route path="update-course/:id" Component={UpdateCourse} exact/>
            </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
