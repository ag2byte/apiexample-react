import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import MyCard from "./MyCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Axios from "axios";

function App() {
  const [details, setDetails] = useState({});
  const fetchdetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log({ data });
    const details = data.results[0];
    setDetails(details);
  };

  useEffect(() => {
    fetchdetails();
  }, []);
  return (
    <Container fluid className="p-4 ng-primary App">
      <Row>
        <Col md={4} className="offest-md-4 mt-4">
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
