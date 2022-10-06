import React from "react";
import PropTypes from "prop-types";

import Title from "../../UI/Atoms/Title/Title";
import Article from "../../UI//Organisms/Article/Article";
import Form from "../../UI//Organisms/Form/Form";
import { Container, Row, Col } from "react-bootstrap";
import Paragraph from "../../UI/Atoms/Paragraph/Paragraph";

require("./_style.scss");

const Home = (props) => (
  <div className="mt-4">
    <Container>
      <Title text="Sentara Cares" />
      <Paragraph text="Sentara is focused on living its mission — to improve health every day. In addition to providing world-class care, Sentara partners with organizations to provide signiﬁcant support to address social determinants of health and advance the overall quality of life."/>
      
      <Row>
        <Col md={4}>
          <Article
            title="Meet the People of Sentara Improving Health Every Day"
            image={{
              src: "https://www.sentara.com/Assets/Img/Content-Grid/Homepage/Sentara-People-Photo.jpg",
              alt: "Placehold",
            }}
            content="How did Sentara Healthcare become one of the leading healthcare systems in the country? That's simple. Our people. Meet the employees who have started, grown and expanded their careers at Sentara (and find out how you can, too.)"
          />
        </Col>
        <Col md={4}>
          <Article
            title="Meet the People of Sentara Improving Health Every Day"
            image={{
              src: "https://www.sentara.com/Assets/Img/Content-Grid/Homepage/Sentara-People-Photo.jpg",
              alt: "Placehold",
            }}
            content="How did Sentara Healthcare become one of the leading healthcare systems in the country? That's simple. Our people. Meet the employees who have started, grown and expanded their careers at Sentara (and find out how you can, too.)"
          />
        </Col>
        <Col md={4}>
          <Article
            title="Meet the People of Sentara Improving Health Every Day"
            image={{
              src: "https://www.sentara.com/Assets/Img/Content-Grid/Homepage/Sentara-People-Photo.jpg",
              alt: "Placehold",
            }}
            content="How did Sentara Healthcare become one of the leading healthcare systems in the country? That's simple. Our people. Meet the employees who have started, grown and expanded their careers at Sentara (and find out how you can, too.)"
          />
        </Col>
      </Row>
    </Container>
    <br></br>
    <hr />
    <Container>
      <Title text="Example of an Atomic Form" />
      <Form fields={props.form} buttonText="Submit" />
    </Container>
  </div>
);

Home.propTypes = {
  form: PropTypes.array,
};

Home.defaultProps = {
  form: [
    {
      label: "Input 1",
      placeholder: "Placeholder for Input 1",
    },
    {
      label: "Input 2",
      placeholder: "Placeholder for Input 2",
    },
  ],
};

export default Home;
