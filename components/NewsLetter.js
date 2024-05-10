// components/ContactForm.js

import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container,Form,Button } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'
import ServerConfig from '../config.json'


const NewsletterForm = () => {

    const [yourEmail, setEmail] = useState()
    const isBlank = (str) => {
        return !str.trim();
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
        setLoader(false);
    };
  
    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      setIsValidEmail(validateEmail(newEmail));

      
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isNotEmpty, setIsNotEmpty] = useState(true);
    const [isSent, setIsSent] = useState(false);
    const [saveError, setApiError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
      setIsSubmitting(true);
      //alert(email)

        if (yourEmail == undefined) {
          setIsNotEmpty(false);
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post(
                `${ServerConfig.SERVER_FROM}contact-form-7/v1/contact-forms/27219/feedback`,
              {yourEmail :yourEmail},
                 {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                    }
        
         
        });
            console.log(response.data);
            if (response.data.status === 'mail_sent') {
                setFormVisible(false); // Hide the form
                setSuccessMessage('Thank you for your submission!');
            } else {
                const fieldErrors = {};
                const { status, invalid_fields } = response.data;
                invalid_fields.forEach((field) => {
                    fieldErrors[field.field] = field.message;
                });
                setErrors(fieldErrors);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }

        setIsSubmitting(false);
    };

  return (
    <Container fluid className='pt-5 g-0'>
      <Container className="newsletter mb-5 m-center">
        <Row className="new_l">
          <Col lg={5} sm={12}>
            <p className="n_text">Subscribe to the Walmart Vriddhi newsletter</p>
          </Col>
          {formVisible ? ( <>
          <Col lg={4} sm={12}>
            
              <Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="email"
                    name="yourEmail"
                    id="yourEmail"
                    className={`subscriber ${!isValidEmail || !isNotEmpty ? 'is-invalid' : ''}`}
                    placeholder="Enter email address"
                    value={yourEmail}
                    onChange={handleEmailChange}
                  />
                  {isSent ? 'Subscribed successfully' : (
                    <>
                      {!isValidEmail && <Form.Text className="text-danger">Invalid email format</Form.Text>}
                      {!isNotEmpty && <Form.Text className="text-danger">Email cannot be empty</Form.Text>}
                    </>
                  )}
                  {
                    saveError ? (
                      <Form.Text className="text-danger">ERROR:check the api</Form.Text>
                    ) : ''
                  }
                </Form.Group>
              </Form>
            
          </Col>
          <Col lg={3} sm={12} className='m-center'>
            <Button variant="outline-primary subs-btn" onClick={handleSubmit}>
              { isSubmitting ?'Please wait..':'Join us' }
            </Button>
          </Col>
          </>) : (<Col lg={4} sm={12}><p className='fs-5 text-white'>Thank you for subscribing newsletter</p></Col>)}
        </Row>
      </Container>
    </Container>
  );
};

export default NewsletterForm;
