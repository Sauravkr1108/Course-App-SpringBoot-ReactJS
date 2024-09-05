import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
    return (
        <Card className="my-3">
            <CardBody className="bg-warning">
            <h2 className="text-center my-3 display-6">Welcome to Courses Application</h2>
            </CardBody>
        </Card>
    );
}

export default Header;