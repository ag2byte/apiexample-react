import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const MyCard = ({ details }) => {
  return (
    <Card className="border-info rounded">
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-info"
          src={details.picture?.large}
        />
        <CardTitle className="text-white font-weight-bold">
          {details.name?.first}
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt className="mr-2" />
          {details.location?.city}, {details.location?.country}
        </CardText>
        <CardText>
          <AiOutlineMail className="mr-2" />
          {details.email}
        </CardText>
      </CardBody>
    </Card>
  );
};
export default MyCard;
