import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { State, City } from 'country-state-city';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { RotatingLines } from 'react-loader-spinner'
import NewsLetter from '../components/NewsLetter'
import Floating from '../components/FloatingMenu'
import Popups from '../components/PopUps'

export default function App() {


    const resetForm = () => {
        setBusiness('');
        setFromTypes('');
        setName('');
        setFromSectors('');
        setPhone('');
        setEmail('');
        setState('');
        setCity('');
        setSelectedSource("");
        setOtherSource("");
        SetSelectCountry('IN');
        SetSelectState('KA');
        // Add any additional state variables that need to be reset
    };


    const typeList = [
        { name: "Manufacturing" },
        { name: "Trading" },
        { name: "Services" }
    ];

    const handleFromTypes = (e) => {
        const type = typeList.find(
            (type) => type.name === e.target.value
        );
        setFromTypes(type.name);
    };

    const sourceList = [
        
        { name: "Industry Association" },
        { name: "State Government" },
        { name: "NSIC" },
        { name: "Online: Social Media / App / Online Ads" },
        { name: "Offline: Advertisement" },
        { name: "Service Providers" },
        { name: "Referrals" },
        { name: "Others (Please specify)"}
    ];

    const handleSourceTypes = (e) => {
        const selectedSource = e.target.value;
        setSelectedSource(selectedSource);
        if (selectedSource === "Others (Please specify)") {
            setOtherSource("");
        }
        //setFromTypes(type.name);
    };

    const sectorList = [
        { name: "Accessories" },
        { name: "Air Conditioners" },
        { name: "Atta Flour" },
        { name: "Auto Accessories" },
        { name: "Baby Care" },
        { name: "Baby's Clothing" },
        { name: "Ballerinas" },
        { name: "Beauty And Grooming" },
        { name: "Biscuits" },
        { name: "Bottom Wear" },
        { name: "Breakfast Cereal And Foods" },
        { name: "Camera" },
        { name: "Chocolates And Toffees" },
        { name: "Cleaning Supplies" },
        { name: "Computer Accessories" },
        { name: "Computer Peripherals" },
        { name: "Dairy" },
        { name: "Dal And Pulses" },
        { name: "Desktop Pcs" },
        { name: "Diy Furnishing" },
        { name: "Dry Fruits" },
        { name: "Ethnic Bottoms" },
        { name: "Ethnic Wear" },
        { name: "Exercise Fitness" },
        { name: "Fabrics" },
        { name: "Festive Decor And Lights" },
        { name: "Food Essentials" },
        { name: "Footwear" },
        { name: "Frozen Non-Veg" },
        { name: "Frozen Veg" },
        { name: "Fruits And Vegetables" },
        { name: "Furnishing" },
        { name: "Furniture" },
        { name: "Girls' Clothing" },
        { name: "Health And Nutrition" },
        { name: "Healthcare" },
        { name: "Healthcare Appliances" },
        { name: "Home Decor" },
        { name: "Home Improvement" },
        { name: "Home Lighting" },
        { name: "Indian Sweets" },
        { name: "Industry And Scientific Tools" },
        { name: "Infant Footwear" },
        { name: "Jam" },
        { name: "Jewelry" },
        { name: "Juices And Fruit Drinks" },
        { name: "Khadi" },
        { name: "Kids' Watches" },
        { name: "Kids' Footwear" },
        { name: "Kids' Winter" },
        { name: "Kitchen Appliances" },
        { name: "Kitchen Storage" },
        { name: "Kitchen" },
        { name: "Lingerie And Sleepwear" },
        { name: "Masala And Spices" },
        { name: "Medical Supplies" },
        { name: "Men's Grooming" },
        { name: "Mobile Accessories" },
        { name: "Mobiles" },
        { name: "Music" },
        { name: "Namkeen" },
        { name: "Network Components" },
        { name: "Noodles" },
        { name: "Oil And Ghee" },
        { name: "Others" },
        { name: "Party Dresses" },
        { name: "Pet Suppliers" },
        { name: "Rain Coats" },
        { name: "Rice And Rice Products" },
        { name: "School Supplies" },
        { name: "Shoes" },
        { name: "Small Home Appliances" },
        { name: "Smart Home Automation" },
        { name: "Smart Watches" },
        { name: "Smart Wearable Tech" },
        { name: "Soft Drinks And Soda" },
        { name: "Speakers" },
        { name: "Sports" },
        { name: "Sports Wear" },
        { name: "Stationery" },
        { name: "Sugar And Gud" },
        { name: "Suits" },
        { name: "Tableware And Dinnerware" },
        { name: "Tea And Coffee" },
        { name: "Television" },
        { name: "Tie" },
        { name: "Top Wear" },
        { name: "Toys" },
        { name: "Underwear And Loungewear" },
        { name: "Watches" },
        { name: "Winter Wear" },
        { name: "Women Western & Maternity Wear" },
    ];

    const handleFromSectors = (e) => {
        const sector = sectorList.find(
            (sector) => sector.name === e.target.value
        );
        setFromSectors(sector.name);
    };

    // busness type function end here

    // state wise city function start here 
 
    

    const [post, setPost] = React.useState(null);
    const [errors, setErrors] = useState({});
    const [yourBusiness, setBusiness] = React.useState(null);
    const [yourType, setFromTypes] = React.useState(null);
    const [yourName, setName] = React.useState(null);
    const [yourSector, setFromSectors] = React.useState(null);
    const [yourPhone, setPhone] = React.useState(null);
    const [yourEmail, setEmail] = React.useState(null);
    const [yourState, setState] = React.useState(null);
    const [yourCity, setCity] = React.useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedSource, setSelectedSource] = useState(""); // Track the selected source
    const [otherSource, setOtherSource] = useState(""); // Track the value of the "Other" source input
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);
    const [selectCountry, SetSelectCountry] = useState('IN');
    const[selectState,SetSelectState] = useState('KA');
    

    const router = useRouter();
    const { utm_source, utm_medium, utm_campaign, utm_id } = router.query;
    const query = router.query;
    const title = "Register with WalmartVriddhi - Walmart Vriddhi"
    const desc = "Fill the form to be a part of the Walmart Vriddhi program and unlock your business growth!"
    const Myimg ="/images/registration_banner.png"
    const yourDate = new Date().toLocaleDateString('en-IN');
    //console.log('utm_source:' + utm_source);
    //console.log('utm_medium:' + utm_medium);
    //console.log('utm_campaign:' + utm_campaign);
    //console.log('utm_id' + utm_id);


    const stateData = State.getStatesOfCountry(selectCountry).map(state => ({
        value: state.value,
        displayValue: state.name,
        innerValue:state.isoCode
    }));

    const cityData = City.getCitiesOfState(selectCountry, selectState).map(city => ({
        value: city.name,
        CityValue: city.name
    }));

    const handleStateChange = (event) => {
        // Call the parent component's onChange function with the selected value
        const selectedValue = event.target.value;
        const selectedOption = event.target.options[event.target.selectedIndex];
        // Get the label (text) of the selected option
        const selectedLabel = selectedOption.text;

        SetSelectState(selectedValue)
        setState(selectedLabel)
        //console.log(selectedLabel)
    };

    const handleCityChange = (event) => {
        // Call the parent component's onChange function with the selected value
        const selectedValue = event.target.value;
        const selectedOption = event.target.options[event.target.selectedIndex];
        // Get the label (text) of the selected option
        const selectedLabel = selectedOption.text;
        if (selectedLabel === 'South 24 Parganas district') {
            setCity('South 24 Parganas')
        }
        else if (selectedLabel === 'North 24 Parganas district') {
            setCity('North 24 Parganas')
        }
        else {
            setCity(selectedLabel)    
        }

        //SetSelectState(selectedValue)
        
        //console.log(selectedLabel)
    };

    

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        
        console.log(errors.yourEmail)
        if (errors.yourEmail === 'Please enter a valid email address.')
        {
            setIsCheckboxChecked(true); 
        }
        else {
            setIsCheckboxChecked(false);    
        }
        

    };

    function createPost() {

        setIsCheckboxChecked(true);
        setErrors({});  

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(yourEmail)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                yourEmail: 'Please enter a valid email address.',
                
            }));
            
            return;
            
        }
        axios.post(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/27146/feedback`,
            {
                'yourBusiness': { yourBusiness },
                'yourType': { yourType },
                'yourName': { yourName },
                'yourSector': { yourSector },
                'yourState': { yourState },
                'yourCity': { yourCity },
                'yourPhone': { yourPhone },
                'yourEmail': { yourEmail },
                'selectedSource': { selectedSource },
                'otherSource': { otherSource },
		'yourDate': { yourDate },
                'utm_source': query.utm_source,
                'utm_medium': query.utm_medium,
                'utm_campaign': query.utm_campaign,
                'utm_id': query.utm_id

            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }

        })
        
            .then((response) => {
                setPost(response.data.message);
                const msg = response.data.status;
                if (msg == 'mail_sent') {
                    setLoading(true);
                    setIsCheckboxChecked(true);
			console.log(msg)
                    resetForm();

                    document.getElementById("yourBusiness").value = "";
                    document.getElementById("yourType").value = "";
                    document.getElementById("yourName").value = "";
                    //document.getElementById("yourSector").value = "";
                    document.getElementById("yourState").value = "";
                    document.getElementById("yourCity").value = "";
                    document.getElementById("yourPhone").value = "";
                    document.getElementById("yourEmail").value = "";
                    document.getElementById("selectedSource").value = "";
                    //document.getElementById("otherSource").value = "";


                }
                else if (msg == 'validation_failed') {
                   
                    const fieldErrors = {};
                    const { status, invalid_fields } = response.data;
                    invalid_fields.forEach((field) => {
                        fieldErrors[field.field] = field.message;
                    });
                    setErrors(fieldErrors);
                    console.log(fieldErrors);
                    setIsCheckboxChecked(true);

                                   
                }

                //console.log(response.data)
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
            <Container className="reg-page p-0 " fluid >
                <p className="fs-4  text-center pt-5">Fill the form to be a part of the Walmart Vriddhi program and unlock your business growth!</p>
                <Container className="p-4 px-4 reg-wid">
                    <Row>
                        {/* <Col className="wbg-white d-sm-none" sm={5}>
                            
                            <Image
                                src='/images/registration_banner.png'
                                width="400"
                                height="700"
                                background='no-repeat'
                                background-size='cover'
                                isResponsive
                                className="banner-img d-flex align-items-end"
                                lazyLoad
                            />

                        </Col> */}
                        <Col className="wbg-white p-2 g-0" sm={6} xs={12}>
                            <h3 className="text-center">Register</h3>
                            <form
                                onSubmit={handleSubmit}
                                style={{ margin: '20px' }}>

                                <div className="mb-3" >
                                    <label className="form-label"><span className="errors">*</span>Business Name:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.yourBusiness ? 'is-invalid' : ''}`}
                                        id="yourBusiness"
                                        name='yourBusiness'
                                        placeholder=""
                                        value={yourBusiness}
                                        defaultValue={yourBusiness} // Add this line
                                        onChange={event => setBusiness(event.target.value)}
                                    />

                                {errors && errors.yourBusiness && <div className="invalid-feedback">{errors.yourBusiness}</div>}
                                </div>

                                <label className="form-label"><span className="errors">*</span>Enterprise:</label>

                                <select
                                    //required
                                    className={`form-control ${errors && errors.yourType ? 'is-invalid' : ''}`}
                                    aria-label="Default select example"
                                    id="yourType"
                                    name="yourType"
                                    value={yourType}
                                    onChange={(e) => handleFromTypes(e)}>
                                    <option value="">Select Type</option>
                                    {typeList.map((type, key) => (
                                        <option key={key} title={type.code} value={type.name}>
                                            {type.name}
                                        </option>
                                    ))}

                                </select>
                                {errors && errors.yourType && <div className="invalid-feedback">{errors.yourType}</div>}

                                <div className="mb-3 mt-3">
                                    <label htmlfor="yourName" className="form-label"><span className="errors">*</span>Your Name:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.yourName ? 'is-invalid' : ''}`}
                                        id="yourName"
                                        name='yourName'
                                        placeholder=""
                                        value={yourName}
                                        defaultValue={yourBusiness} // Add this line
                                        onChange={event => setName(event.target.value)}
                                    />
                                    {errors && errors.yourName && <div className="invalid-feedback">{errors.yourName}</div>}
                                </div>

                                <label className="form-label"><span className="errors">*</span>Business:</label>
                                <select
                                    //required
                                    className={`form-control ${errors && errors.yourSector ? 'is-invalid' : ''}`}
                                    aria-label="Default select example"
                                    name='yourSector'
                                    value={yourSector}
                                    defaultValue={yourSector} // Add this line    

                                    //onChange={event => setSector(event.target.value)}
                                    onChange={(e) => handleFromSectors(e)}>
                                     <option value="">Select option</option>
                                    
                                    {sectorList.map((sector, key) => (
                                        <option key={key} title={sector.code} value={sector.name}>
                                            {sector.name}
                                        </option>
                                    ))}
                                </select>
                                {errors && errors.yourSector && <div className="invalid-feedback">{errors.yourSector}</div>}          
                                <label className="form-label mt-2"><span className="errors">*</span>State:</label>

                                <select onChange={handleStateChange}
                                    id='yourState'
                                    name='yourState'
                                    className={`form-control ${errors && errors.yourState ? 'is-invalid' : ''}`}
                                    defaultValue={yourState}
                                >
                                    <option value="">Select State</option>
            {stateData.map((option, index) => (
                <option key={index} value={option.innerValue} >
                    {option.displayValue}
                </option>
            ))}
            </select>
                        {errors && errors.yourState && <div className="invalid-feedback">{errors.yourState}</div>}          

                                <label className="form-label mt-2"><span className="errors">*</span>City:</label>
                                <select
                                 className={`form-control ${errors && errors.yourCity ? 'is-invalid' : ''}`}
                                 id='yourCity'
                                    name='yourCity'
                                    onChange={handleCityChange}
                                    defaultValue={yourCity}
                                >
                                    <option value="">Select City</option>
            {cityData.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.CityValue}
                </option>
            ))}
        </select>
                                {errors && errors.yourCity && <div className="invalid-feedback">{errors.yourCity}</div>}          

                                <div className="mb-3 mt-3">
                                    <label htmlfor="yourPhone" className="form-label"><span className="errors">*</span>Your Phone:</label>
                                    <input
                                        //required
                                        type='tel'
                                        className={`form-control ${errors && errors.yourPhone ? 'is-invalid' : ''}`}
                                        id="yourPhone"
                                        maxlength="10"
                                        minLength="10"
                                        name='yourPhone'
                                        pattern="[0-9]*"
                                        placeholder=""
                                        value={yourPhone}
                                        defaultValue={yourPhone}
                                        onChange={event => setPhone(event.target.value)}
                                        onKeyPress={(event) => {
                                            // Prevent entering non-numeric characters
                                            const keyCode = event.charCode || event.keyCode;
                                            if (keyCode < 48 || keyCode > 57) {
                                                event.preventDefault();
                                            }
                                        }}


                                    />

                                {errors && errors.yourPhone && <div className="invalid-feedback">{errors.yourPhone}</div>}          
                                </div>

                                <div className="mb-3 mt-3">
                                    <label htmlfor="yourPhone" className="form-label"><span className="errors">*</span>Your Email:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.yourEmail ? 'is-invalid' : ''}`}
                                        id="yourEmail"
                                        name='yourEmail'
                                        placeholder=""
                                        value={yourEmail}
                                        defaultValue={yourEmail}
                                        onChange={event => setEmail(event.target.value)}

                                    />
                            {errors && errors.yourEmail && <div className="invalid-feedback">{errors.yourEmail}</div>}          

                                </div>

                                <div className="mb-3 mt-3">
                                <label className="form-label"><span className="errors">*</span>How did you hear about us?</label>

<select
    //required
    className={`form-control ${errors && errors.selectedSource ? 'is-invalid' : ''}`}
    aria-label="Default select example"
    id="selectedSource"
    name="selectedSource"
                                        value={selectedSource}
                                        defaultValue={selectedSource}
    onChange={(e) => handleSourceTypes(e)}>
    <option value="">Select option</option>
    {sourceList.map((type, key) => (
<option key={key} title={type.code} value={type.name}>
{type.name}
</option>
    ))}

</select></div>
                                

{selectedSource === "Others (Please specify)" && (
                <div className="mb-3">
                    <label htmlFor="otherSource" className="form-label">
                        Specify Other Source:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="otherSource"
                        name="otherSource"
                        placeholder="Specify Other Source"
                                            value={otherSource}
                                            defaultValue={otherSource}
                        onChange={(e) => setOtherSource(e.target.value)}
                    />
                </div>
            )}

<button type='submit'
className={`btn btn-primary register pb-4 ${!isCheckboxChecked ? 'disabled' : ''}`}
                                    onClick={createPost}>
                                    {isCheckboxChecked ? 'Submit':
(<>
Please wait..<RotatingLines
  visible={true}
  height="30"
  width="30"
  color="#ffff"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
wrapperClass=""
strokeColor="#fff"
                                    />
</>)}
                                </button>
                                {loading && <h1 class="reg-success mt-4">{post}</h1>}

                            </form>
                        </Col>
                        <Col className="wbg-white m-tm-none p-0" sm={6}>
                            
                            <Image
                                src='/images/registration_banner.png'
                                width="100"
                                height="100"
                                background='no-repeat'
                                background-size='cover'
                                isResponsive
                                className="banner-img d-flex align-items-end w-100 h-100"
                                lazyLoad
                            />

                        </Col>
                    </Row>
                </Container>
            </Container>
            
            <Popups/>
            <Floating/> 
            <NewsLetter/>
            <Footer />
        </>
    );
}
