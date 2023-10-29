import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {

  const handleSubmit = (event) => {
    console.log(event);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>
        Section 1: Personal Information
      </h3>
      <br/>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Madara"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Uchiha"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Educational Institution:</Form.Label>
        <Form.Control placeholder="National Institute of Technology, Jamshedpur" />
      </Form.Group>

      <Row className="mb-3">
      <Form.Group className="mb-3">
        <Form.Label>Major/Field of Study:</Form.Label>
        <Form.Control placeholder="Computer Science" />
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Select aria-label="Default select example">
      <option>Graduation Year</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      </Form.Select>
      </Row>

      <br/>
      <h3>
      Section 2: Recession Impact on Education
      </h3>
      <h5>Please share how the recession affected your educational experience:</h5>
      <br/>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          Did you face any challenges related to course availability or quality due to the recession?
          If yes, please describe briefly:  
        </Form.Label>
        <Form.Control
         as="textarea"
         rows={3} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Did you experience any financial constraints that impacted your education? If yes, please describe briefly:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Row>

      <br/>
      <h3>
      Section 3: Placement Season Experience
      </h3>
      <h5>Please provide insights into your placement season experience during the recession:</h5>
      <br/>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
        Did you participate in the placement season of 2023?
        If yes, please continue with the following questions. If no, skip to Section 4. 
        </Form.Label>
        <Form.Control
         as="textarea"
         rows={3} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
        Were there any changes in the number of job/internship opportunities available compared to previous years?
        If there was a change, please describe briefly: 
        </Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
        Did you face any challenges in securing interviews or offers during the placement season? 
        If yes, please describe briefly: 
        </Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} />
      </Form.Group>
      </Row>

      <br/>
      <h3>
      Section 4: Additional Comments
      </h3>
      <h5>Please use this section to provide any additional comments, insights, or suggestions related to the recession and its impact on the placement season:</h5>
      <br/>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
        Comments  
        </Form.Label>
        <Form.Control
         as="textarea"
         rows={3} 
        />
      </Form.Group>
      </Row>

      <br/>
      <h3>
      Conclusion:
      </h3>
      <p>
        Thank you for completing the survey. Your input is invaluable in contributing to our understanding of the effects of the 2023 recession on the placement season.
        If you have any further comments or questions, please feel free to contact us at siddhant.mark85@gmail.com.
      </p>
      <br/>
      

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;
