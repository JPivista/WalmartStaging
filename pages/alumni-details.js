import axios from "axios";
import React, { useState } from "react";
import { useRouter } from 'next/router';
import { Container, Row, Col, Button } from 'react-bootstrap';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form';
import NewsLetter from '../components/NewsLetter'
import Floating from '../components/FloatingMenu'
import Popups from '../components/PopUps'
import Modal from 'react-bootstrap/Modal';


export default function App() {

    const [loading, setLoading] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [show, setShow] = useState(false);
    const closeModal = () => {
        setShow(false);
      };

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };

    const typeList = [
        { name: "Abhishek jha" },
        { name: "Abhishek KR" },
        { name: "Adarsh Samal" },
        { name: "Ahmed Amin" },
        { name: "Ajith Ranjan" },
        { name: "Amit Chouksey" },
        { name: "Amrit Kumar" },
        { name: "Ankit Makhwana" },
        { name: "Ankit Singh" },
        { name: "Anshul Gupta" },
        { name: "Anupam Chaurasia" },
        { name: "Anurag Singh" },
          { name: "Arun Kumar" },
          { name: "Aseem Kapoor" },
          { name: "Ashutosh Sharma" },
          { name: "Awesz Bukhari" },
          { name: "Balachandra Moger" },
          { name: "Daisy Choudharyr" },
          { name: "Dayanand Choudhary" },
          { name: "Dipesh Choudhary" },
          { name: "G Shiva Keshavulu" },
          { name: "Harshal Tanawala" },
          { name: "Harshvardhan Chauhan" },
          { name: "Jayanta Dey" },
          { name: "Kishore Das" },
          { name: "Kunal Gupta" },
          { name: "Malaya Kumar" },
          { name: "Manoj Kher" },
          { name: "Megha jain" },
          { name: "Meha Sinha" },
          { name: "Muthukumar D" },
          { name: "Naveen Soni" },
          { name: "Meha Sinha" },
          { name: "Meha Sinha" },
          { name: "Meha Sinha" },
          { name: "Meha Sinha" },
          { name: "Meha Sinha" },
  { name: "Nidhi Sharma" },
  { name: "Nikhat Anjum" },
  { name: "Nikhil " },
  { name: "Nishant Sankhala" },
  { name: "Nishtha Gupta" },
  { name: "Nitin Sharma" },
  { name: "Param" },
  { name: "Parvi Lakha" },
  { name: "Pavan Sindhu" },
  { name: "Pawan Khuswaha" },
  { name: "Predun Choudhary" },
  { name: "Priyansh" },
  { name: "Rahul Kumar Gupta" },
  { name: "Rahul Tiwari" },
  { name: "Rahul Yadav" },
  { name: "Raj Tiwari" },
  { name: "Rashee" },
  { name: "Ritu Choudhary" },
  { name: "Riya Gupta" },
  { name: "Rohit Richards" },
  { name: "Samrat Singh" },
  { name: "Sandip Wahane" },
  { name: "Santosh C" },
  { name: "Saurabh Agarwal" },
  { name: "Shivam Kesari" },
  { name: "Shivani Solanki" },
  { name: "Sneha Singh" },
  { name: "Someshwar S" },
  { name: "Soumen Banerjee" },
  { name: "Sreejith S" },
  { name: "Subhankar Shome" },
  { name: "Subramani B S" },
  { name: "Sweety Kumari" },
  { name: "Urvashi Patel" },
  { name: "Vadiraj" },
  { name: "Vikash Tyagi" },
  { name: "Vishal Singh" },
  { name: "Vivek Kumar" },
  { name: "Yash Upadhayee" }
      ];

    const handleFromTypes = (e) => {
        const type = typeList.find(
            (type) => type.name === e.target.value
        );
        setFromTypes(type.name);
    };

   

    // busness type function end here

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    const [post, setPost] = useState(null);
    const [errors, setErrors] = useState({});
    const [FullName, setFullName] = useState(null);
    const [WVProgramID, setWVProgramID] = useState(null);
    const [yourEmail, setEmail] = useState(null);
    const [yourDesignation, setDesignation] = useState(null);
    const [yourCompanyName, setCompanyName] = useState(null);
    const [yourLocation, setLocation] = useState(null);
    const [yourBusinessCategory, setBusinessCategory] = useState(null);
    const [yourLinkProfile, setLinkProfile] = useState(null);
    const [yourProfileImage, setProfileImage] = useState(null);
    const [yourProductImage, setProductImages] = useState([]);
    const [yourAboutBusiness, setAboutBusiness] = useState(null);
    const [yourWebsiteLink, setWebsiteLink] = useState(null);
    const [yourFacebook, setFacebook] = useState(null);
    const [yourTwitter, setTwitter] = useState(null);
    const [yourInstagram, setInstagram] = useState(null);
    const [yourLinkedin, setLinkedin] = useState(null);
    const [yourContactPoint, setFromTypes] = useState(null);
    const [checkboxError, setCheckboxError] = useState(false);
    const [yourFile, setYourFile] = useState(null);
    const [yourProduct, setProductFile] = useState(null);
    const [loader, setLoader] = useState(false); //new entry here

    const router = useRouter();
    const { utm_source, utm_medium, utm_campaign, utm_id } = router.query;
    const query = router.query;
    const title = "Register with WalmartVriddhi - Walmart Vriddhi"
    const desc = "Fill the form to be a part of the Walmart Vriddhi program and unlock your business growth!"
    const Myimg ="/images/registration_banner.png"

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setProfileImage(selectedFile);
        //alert(selectedFile)
    };
    
    const handleProductChange = (e) => {
        const files = e.target.files;
        // Convert FileList to array
        const fileList = Array.from(files);
        // Update product images state
        setProductImages(fileList);
    };
    
    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
    };
   
   
   
   
   
   
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
        setLoader(false);
    };

    function createPost() {
        setErrors({});
        setLoader(true); // Start loader
    
        const formData = new FormData();
        formData.append('FullName', FullName);
        formData.append('WVProgramID', WVProgramID);
        formData.append('yourEmail', yourEmail);
        formData.append('yourDesignation', yourDesignation);
        formData.append('yourCompanyName', yourCompanyName);
        formData.append('yourLocation', yourLocation);
        formData.append('yourBusinessCategory', yourBusinessCategory);
        formData.append('yourLinkProfile', yourLinkProfile);
        formData.append('yourAboutBusiness', yourAboutBusiness);
        formData.append('yourWebsiteLink', yourWebsiteLink);
        formData.append('yourFacebook', yourFacebook);
        formData.append('yourTwitter', yourTwitter);
        formData.append('yourInstagram', yourInstagram);
        formData.append('yourLinkedin', yourLinkedin);
        formData.append('yourContactPoint', yourContactPoint);
        formData.append('utm_source', query.utm_source);
        formData.append('utm_medium', query.utm_medium);
        formData.append('utm_campaign', query.utm_campaign);
        formData.append('utm_id', query.utm_id);
	formData.append('currentDate',currentDate)
    
        // Append profile images
        if (yourProfileImage === null) {
            setErrors(prevErrors => ({
                ...prevErrors,
                yourProfileImage: 'Please upload your profile image.',
            }));
            setLoader(false); // Stop loader
            return;
        }
        formData.append('yourProfileImage', yourProfileImage);  
    
        // Append product images
        if (yourProductImage.length === 0) {
            setErrors(prevErrors => ({
                ...prevErrors,
                yourProductImage: 'Please upload product image.',
            }));
            setLoader(false); // Stop loader
            return;
        }
        yourProductImage.forEach((image, index) => {
            formData.append(`yourProductImage_${index}`, image);
            // formData.append(`yourProductImage`, image);
            });
        // yourProductImage.forEach((file, index) => {
        //    // formData.append(`yourProductImage[${index}]`, file);
        // });
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(yourEmail)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                yourEmail: 'Please enter a valid email address.',
            }));
            setLoader(false); // Stop loader
            return;
        }
    
        if (!yourAboutBusiness) {
            setErrors(prevErrors => ({
                ...prevErrors,
                yourAboutBusiness: 'Please enter about the Business.',
            }));
            setLoader(false); // Stop loader
            return;
        }
    
        if (!yourContactPoint) {
            setErrors(prevErrors => ({
                ...prevErrors,
                yourContactPoint: 'Please select point of contact.',
            }));
            setLoader(false); // Stop loader
            return;
        }
    
        axios.post(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/27012/feedback`,
            formData,
            {
                headers: {
                    "Content-Type": 'multipart/form-data',
                }
            })
            .then((response) => {
                setLoading(false);
                setPost(response.data.message);
                const msg = response.data.status;
    
                if (msg === 'mail_sent') {
                    setShow(true);
		    setLoader(false)
                } else if (msg === 'validation_failed') {
                    const fieldErrors = {};
                    const { invalid_fields } = response.data;
                    invalid_fields.forEach((field) => {
                        fieldErrors[field.field] = field.message;
                    });
                    setErrors(fieldErrors);
			setLoader(false)
                }
                console.log(response.data);
setLoader(false)
            })
            .catch(error => {
                setLoading(false);
                console.error('Error submitting form:', error);
            });
    }
    


    

    return (
        <>
            
            <NextSeo
                noindex={true}
                nofollow={true}
    title={ title}
    description={ desc}
        canonical='https://www.walmartvriddhi.org/register-with-walmartvriddhi/'
        openGraph={{
          url: "https://www.walmartvriddhi.org/register-with-walmartvriddhi/",
          title: title,
          description: desc,
          images: [
            {
              url: Myimg,
              width: 800,
              height: 600,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            {
              url: Myimg,
              width: 900,
              height: 800,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            { url: Myimg },
            { url: Myimg },
          ],
          siteName: {title},
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
    />
            <Header />
            <Container className=" p-0 " fluid >
                <p className="fs-2  text-center pt-5 fw-bold bogle-bold walmart-default">Alumni Details</p>
                <Container className="p-4 px-4 reg-wid">
                <form
                    onSubmit={handleSubmit}
                        style={{ margin: '20px' }}>
                    <Row>
                            <Col sm={6} lg={3}>
                            <div className="mb-3" >
                                    <label className="form-label">Full Name:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.FullName ? 'is-invalid' : ''}`}
                                        id="FullName"
                                        name='FullName'
                                        placeholder="Full Name"
                                        value={FullName}
                                        onChange={event => setFullName(event.target.value)}
                                    />
   {errors && errors.FullName && <div className="invalid-feedback">{errors.FullName}</div>}
                                </div>
                            </Col>                
                            <Col sm={6} lg={3}>
                            <div className="mb-3" >
                                    <label className="form-label">WV Program ID:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.WVProgramID ? 'is-invalid' : ''}`}
                                        id="WVProgramID"
                                        name='WVProgramID'
                                        placeholder="WV Program ID"
                                        value={WVProgramID}
                                        onChange={event => setWVProgramID(event.target.value)}
                                    />
                                    {errors && errors.WVProgramID && <div className="invalid-feedback">{errors.WVProgramID}</div>}
                                </div>
                            </Col>
                            <Col sm={6} lg={3}>
                            <div className="mb-3">
                                    <label htmlfor="yourPhone" className="form-label"><span className="errors">*</span>Your Email:</label>
                                    <input
                                        //required
                                        type='email'
                                        className={`form-control ${errors && errors.yourEmail ? 'is-invalid' : ''}`}
                                        id="yourEmail"
                                        name='yourEmail'
                                        placeholder="test@test.com"
                                        value={yourEmail}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                            // Validate email while typing
                                            const isValid = validateEmail(event.target.value);
                                            if (!isValid) {
                                                setErrors(prevErrors => ({
                                                    ...prevErrors,
                                                    yourEmail: 'Please enter a valid email address.',
                                                }));
                                            } else {
                                                setErrors(prevErrors => ({
                                                    ...prevErrors,
                                                    yourEmail: null,
                                                }));
                                            }
                                        }}
                                    />
                                    {errors && errors.yourEmail && <div className="invalid-feedback">{errors.yourEmail}</div>}
                                </div>
                            </Col>

                            <Col sm={6} lg={3}>
                            <div className="mb-3">
                                    <label htmlfor="Designation" className="form-label">Designation:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.yourDesignation ? 'is-invalid' : ''}`}
                                        id="yourDesignation"
                                        name='yourDesignation'
                                        placeholder="Designation"
                                        value={yourDesignation}
                                        onChange={event => setDesignation(event.target.value)}
                                    />
                                    {errors && errors.yourDesignation && <div className="invalid-feedback">{errors.yourDesignation}</div>}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} lg={3}>
                            <div className="mb-3">
                                    <label htmlfor="CompanyName" className="form-label">CompanyName:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.yourCompanyName ? 'is-invalid' : ''}`}
                                        id="CompanyName"
                                        name='yourCompanyName'
                                        placeholder="Company Name"
                                        value={yourCompanyName}
                                        onChange={event => setCompanyName(event.target.value)}
                                    />
                                    {errors && errors.yourCompanyName && <div className="invalid-feedback">{errors.yourCompanyName}</div>}
                                </div> 
                            </Col>
                            <Col sm={6} lg={3}>
                            <div className="mb-3">
                                    <label htmlfor="Location" className="form-label">Location:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.yourLocation ? 'is-invalid' : ''}`}
                                        id="yourLocation"
                                        name='yourLocation'
                                        placeholder="Location"
                                        value={yourLocation}
                                        onChange={event => setLocation(event.target.value)}
                                    />
                                    {errors && errors.yourLocation && <div className="invalid-feedback">{errors.yourLocation}</div>}
                                </div> 
                            </Col>
                            <Col sm={6} lg={3}>
                            <div className="mb-3">
                                    <label htmlfor="BusinessCategory" className="form-label">Business Category:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.yourBusinessCategory ? 'is-invalid' : ''}`}
                                        id="yourBusinessCategory"
                                        name='yourBusinessCategory'
                                        placeholder="Business Category"
                                        value={yourBusinessCategory}
                                        onChange={event => setBusinessCategory(event.target.value)}
                                    />
                                    {errors && errors.yourBusinessCategory && <div className="invalid-feedback">{errors.yourBusinessCategory}</div>}
                                </div> 
                            </Col>
                            <Col sm={6} lg={3}>
                            <div className="mb-3">
                                    <label htmlfor="LinkProfile" className="form-label">Business Images:</label>
                                    
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.yourLinkProfile ? 'is-invalid' : ''}`}
                                        id="yourLinkProfile"
                                        name='yourLinkProfile'
                                        placeholder="Link for Profile & Business Images"
                                        value={yourLinkProfile}
                                        onChange={event => setLinkProfile(event.target.value)}
                                    />
                                    {errors && errors.yourLinkProfile && <div className="invalid-feedback">{errors.yourLinkProfile}</div>}
                                </div> 
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} lg={3}>
                            <div className="mb-3">
                                    <label htmlfor="ContactPoint" className="form-label"><span className="errors">*</span>Point of Contact:</label>
                                    <Form.Select aria-label="Default select example" className={`form-control ${errors && errors.yourContactPoint ? 'is-invalid' : ''}`}
                                    id="ContactPoint"
                                    name="yourContactPoint"
                                    value={yourContactPoint}
                                    onChange={(e) => handleFromTypes(e)}
                                    >
      <option value="null">Point of Contact</option>
      {typeList.map((type, key) => (
                                        <option key={key} title={type.code} value={type.name}>
                                            {type.name}
                                        </option>
                                    ))}
    </Form.Select>
                                    {errors && errors.yourContactPoint && <div className="invalid-feedback">{errors.yourContactPoint}</div>}
                                </div>
                            </Col>
                            <Col sm={6} lg={3}>
                            <div className="mb-3">
                                    <label htmlfor="ProfileImage" className="form-label"><span className="errors">*</span>Profile Image(up to 3MB):</label>
                                    <input
                                        required
                                        type="file"
                                        className={`form-control ${errors && errors.yourProfileImage ? 'is-invalid focus' : ''}`}
                                        id="yourProfileImage"
                                        name='yourProfileImage'
                                        placeholder="ProfileImage"
                                        multiple
                                        value={yourFile}
                                        //onChange={event => setProfileImage(event.target.value)}
                                        //event.target.files[0]
                                        onChange={handleFileChange}
                                    />
                                    {errors && errors.yourProfileImage && <div className="invalid-feedback">{errors.yourProfileImage}</div>}
                                </div>
                            </Col>
                            <Col sm={12} lg={6}>
                            <div className="mb-3">
                                    <label htmlfor="ProductImage" className="form-label"><span className="errors">*</span>Product Image (up to 3 images, maximum size of 7MB):</label>
                                    <input
                                        required
                                        type="file"
                                        className={`form-control ${errors && errors.yourProductImage ? 'is-invalid' : ''}`}
                                        id="yourProductImage"
                                        name='yourProductImage'
                                        placeholder="Product Image"
                                        multiple
                                        value={yourProduct}
                                        //onChange={event => setProductImage(event.target.value)}
                                        onChange={handleProductChange}
                                    />
                                    {errors && errors.yourProductImage && <div className="invalid-feedback">{errors.yourProductImage}</div>}
                                </div>
                            </Col> 
                        </Row>
                        <Row>
                            <Col>
                            <div className="mb-3">
                                    <label htmlfor="AboutBusiness" className="form-label"><span className="errors">*</span>About the Business:</label>
                                    <textarea
                                        //required
                                        type="text"
                                        className={`form-control ${errors && errors.yourAboutBusiness ? 'is-invalid' : ''}`}
                                        id="AboutBusiness"
                                        name='yourAboutBusiness'
                                        placeholder="About the Business"
                                        value={yourAboutBusiness}
                                        onChange={event => setAboutBusiness(event.target.value)}
                                    />
                                {errors && errors.yourAboutBusiness && <div className="invalid-feedback">{errors.yourAboutBusiness}</div>}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <div className="mb-3">
                                    <label htmlfor="WebsiteLink" className="form-label">Add Website Link:</label>
                                    <input
                                        //required
                                        type="text"
                                        className={`form-control ${errors && errors.yourWebsiteLink ? 'is-invalid' : ''}`}
                                        id="yourWebsiteLink"
                                        name='yourWebsiteLink'
                                        placeholder="Add Website Link"
                                        
                                        value={yourWebsiteLink}
                                        onChange={event => setWebsiteLink(event.target.value)}
                                    />
{errors && errors.yourWebsiteLink && <div className="invalid-feedback">{errors.yourWebsiteLink}</div>}                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <div className="mb-3">
                                    <label htmlfor="Facebook" className="form-label">Facebook:</label>
                                    <input
                                        //required
                                        type="text"
                                        className={`form-control ${errors && errors.yourFacebook ? 'is-invalid' : ''}`}
                                        id="yourFacebook"
                                        name='yourFacebook'
                                        placeholder="Facebook"
                                        
                                        value={yourFacebook}
                                        onChange={event => setFacebook(event.target.value)}
                                    />
                                    {errors && errors.yourFacebook && <div className="invalid-feedback">{errors.yourFacebook}</div>}                                    
                                </div>
                            </Col>
                            <Col>
                            <div className="mb-3">
                                    <label htmlfor="Twitter" className="form-label">Twitter:</label>
                                    <input
                                        //required
                                        type="text"
                                        className={`form-control ${errors && errors.yourTwitter ? 'is-invalid' : ''}`}
                                        id="yourTwitter"
                                        name='yourTwitter'
                                        placeholder="Twitter"
                                        value={yourTwitter}
                                        onChange={event => setTwitter(event.target.value)}
                                    />
                                    {errors && errors.yourTwitter && <div className="invalid-feedback">{errors.yourTwitter}</div>}                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <div className="mb-3">
                                    <label htmlfor="Instagram" className="form-label">Instagram:</label>
                                    <input
                                        //required
                                        type="text"
                                        className={`form-control ${errors && errors.yourInstagram ? 'is-invalid' : ''}`}
                                        id="yourInstagram"
                                        name='yourInstagram'
                                        placeholder="Instagram"
                                        value={yourInstagram}
                                        onChange={event => setInstagram(event.target.value)}
                                    />
                                    {errors && errors.yourInstagram && <div className="invalid-feedback">{errors.yourInstagram}</div>}                                    
                                </div>
                            </Col>
                            <Col>
                            <div className="mb-3">
                                    <label htmlfor="Linkedin" className="form-label">Linkedin:</label>
                                    <input
                                        //required
                                        type="text"
                                        className={`form-control ${errors && errors.yourLinkedin ? 'is-invalid' : ''}`}
                                        id="yourLinkedin"
                                        name='yourLinkedin'
                                        placeholder="Linkedin"
                                        value={yourLinkedin}
                                        onChange={event => setLinkedin(event.target.value)}
                                    />
                                        {errors && errors.yourLinkedin && <div className="invalid-feedback">{errors.yourLinkedin}</div>}                                    
                                </div>
                            </Col>
                        </Row>
                        <Container className="mb-3">
<div class="form-check">
                                <input 
                                    className={`form-check-input ${checkboxError ? 'is-invalid' : ''}`}
                                    type="checkbox" value="" id="flexCheckDefault"
                                onChange={handleCheckboxChange}
                                />
                              
  <label class="form-check-label" for="flexCheckDefault">
  I hereby consent to the collection, use, and sharing of my personal information as provided in this form on the Walmart Vriddhi website.
  </label>
</div>
                        
</Container>
<Container className="text-center">             
<button
        type='submit'
        className={loader ? 'registers disabled' :'registers disabled'}
        onClick={(e) => {
            e.preventDefault();
            // Check if the checkbox is checked
            if (!isCheckboxChecked) {
                setCheckboxError(true);
            } else {
                setCheckboxError(false);
                createPost();
            }
        }}
        aria-disabled="true"
    >
{loader ? 'Please wait..' :'Submit'}
</button>
                            
                        </Container>

        <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Successfully submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark fs-5 p-4 bg-white">{post}</Modal.Body>
      </Modal>

                        {/* {loading && <h1 class="reg-success mt-4">{post}</h1>
                        
                        } */}
</form>
</Container>
</Container>
            
{/* <Popups/> */}
            <Floating/> 
            <NewsLetter/>
            <Footer />
        </>
    );
}
