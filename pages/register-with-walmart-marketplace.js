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

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6Lc01sspAAAAADM8fQcICBwBT2M62nMi-_UFynYm';
        script.async = true;
        document.body.appendChild(script);

        const timeout = setTimeout(() => {
            //setIsVisible(false);
        }, 2000);

        return () => {
            document.body.removeChild(script);
            clearTimeout(timeout);
        };
    },);

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
        { name: "Others (Please specify)" }
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
    const [error, setError] = useState('');
    const [yourBusiness, setBusiness] = React.useState(null);
    const [yourType, setFromTypes] = React.useState(null);
    const [yourName, setName] = React.useState(null);
    const [yourSector, setFromSectors] = React.useState(null);
    const [yourPhone, setPhone] = React.useState(null);
    const [yourEmail, setEmail] = React.useState(null);
    const [yourState, setState] = React.useState(null);
    const [yourCity, setCity] = React.useState(null);
    const [loading, setLoading] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [selectedSource, setSelectedSource] = useState(""); // Track the selected source
    const [otherSource, setOtherSource] = useState(""); // Track the value of the "Other" source input
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);
    const [selectCountry, SetSelectCountry] = useState('IN');
    const [selectState, SetSelectState] = useState('KA');

    const [yourExporting, setExporting] = React.useState('yes');
    const [youreCommerce, seteCommerce] = React.useState('yes');


    const router = useRouter();
    const { utm_source, utm_medium, utm_campaign, utm_id } = router.query;
    const query = router.query;
    const title = "Register with WalmartVriddhi - Walmart Vriddhi"
    const desc = "Fill the form to be a part of the Walmart Vriddhi program and unlock your business growth!"
    const Myimg = "/images/registration_banner.png"
    const yourDate = new Date().toLocaleDateString('en-IN');

    const [hasErrors, setHasErrors] = useState(false);

    // Function to update error state
    const updateErrorState = (errors) => {
        // Check if any errors exist
        const hasError = Object.keys(errors).length > 0;
        setHasErrors(hasError);
    };



    //console.log('utm_source:' + utm_source);
    //console.log('utm_medium:' + utm_medium);
    //console.log('utm_campaign:' + utm_campaign);
    //console.log('utm_id' + utm_id);


    const stateData = State.getStatesOfCountry(selectCountry).map(state => ({
        value: state.value,
        displayValue: state.name,
        innerValue: state.isoCode
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

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const customErrors = {
        field: 'yourEmail',
        message: 'Please enter a valid email address.'
    }
    const customDomainErrors = {
        field: 'yourEmail',
        message: 'This email domain is not allowed.'
    }

    const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com'];
    function isValidEmail(email) {
        const [_, domain] = email.split('@');
        return notAllowedDomains.includes(domain);
    }

    const businessRegex = /^[a-zA-Z0-9\s]*$/
    const bussErrors = {
        field: 'yourBusiness',
        message: 'invalid character'
    }

    const nameRegex = /^[a-zA-Z\s]*$/
    const nameErrors = {
        field: 'yourName',
        message: 'invalid character'
    }

    const numRegex = /^[0-9]*$/
    const numErrors = {
        field: 'yourPhone',
        message: 'invalid phone number'
    }


    const handleExportingChange = (e) => {
        setExporting(e.target.value);
    };

    const handleECommerceChange = (e) => {
        seteCommerce(e.target.value);
    };


    // recently addded code for validation
    const handleTextChange = e => {
        const value = e.target.value;
        const fname = e.target.name;

        if (fname === 'yourBusiness') {

            if (!businessRegex.test(value)) {
                console.log('invalid details')
                const fieldErrors = {}
                const { field, message } = bussErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
                //alert('valid email enter')
            }
            else {
                console.log('characters looks valid')
                setBusiness(value)
                setErrors();
            }
        }

        if (fname === 'yourName') {
            if (!nameRegex.test(value)) {
                console.log('invalid name')
                const fieldErrors = {}
                const { field, message } = nameErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
                //alert('valid email enter')
            }
            else {
                console.log('characters looks valid')
                setName(value)
                setErrors();
            }

        }

        if (fname === 'yourPhone') {
            if (!numRegex.test(value)) {
                console.log('invalid Phone')
                const fieldErrors = {}
                const { field, message } = numErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
                //alert('valid email enter')
            }
            else {
                console.log('characters looks valid')
                setPhone(value)
                setErrors();
            }

        }
        if (fname === 'yourEmail') {
            if (!emailRegex.test(value)) {
                console.log('invalid Email')
                const fieldErrors = {}
                const { field, message } = customErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
                setEmail()
                //alert('valid email enter')
            }
            else {
                console.log('characters looks valid')
                setEmail(value)
                setErrors();
            }
            if (isValidEmail(value)) {
                console.log('Email domain is not allowed');
                const fieldErrors = {}
                const { field, message } = customDomainErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
            } else {
                console.log('Email domain is allowed');

            }

        }

    }
    // changes end here


    const handleSubmit = async (event) => {
        // 👇️ prevent page refresh
        event.preventDefault();

        try {

            const token = await new Promise((resolve, reject) => {
                window.grecaptcha.execute('6Lc01sspAAAAADM8fQcICBwBT2M62nMi-_UFynYm', { action: 'submit' })
                    .then(resolve)
                    .catch(reject);
            });

            if (!hasErrors) {
                // Submit the form
                createPost();
            } else {
                // If there are errors, handle them accordingly (e.g., display a message to the user)
                console.log("Form has errors. Please correct them before submitting.");
            }
            setIsCheckboxChecked(false);
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    function createPost() {
        setIsCheckboxChecked(true);
        setErrors({});
        axios.post(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/27578/feedback`,
            {
                'yourBusiness': { yourBusiness },
                'yourType': { yourType },
                'yourName': { yourName },
                'yourSector': { yourSector },
                'yourState': { yourState },
                'yourCity': { yourCity },
                'yourPhone': { yourPhone },
                'yourEmail': { yourEmail },
                'yourExporting': { yourExporting },
                'youreCommerce': { youreCommerce },
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
                    // document.getElementById("yourExporting").value = "";
                    // document.getElementById("youreCommerce").value = "";
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
                title={title}
                description={desc}
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
                    siteName: { title },
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <Header />
            <Container className="reg-page p-0 " fluid >
                <p className="fs-4  text-center pt-5">
                    Fill the form to be a part of the Walmart Marketplace and unlock your business growth!
                </p>
                <Container className="p-4 px-4 reg-wid">
                    <Row>
                        <Col className="wbg-white p-2 g-0" sm={6} xs={12}>
                            <h3 className="text-center">Register</h3>
                            <hr style={{ background: '#FFC221' }} className="mx-4 pt-1 border-0" />
                            <form
                                style={{ margin: '20px' }}>

                                <div className="mb-3">
                                    <label className="form-label">Are you exporting?</label>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                value="yes"
                                                checked={yourExporting === "yes"}
                                                onChange={handleExportingChange}
                                            />
                                            <span className="ps-1">
                                                Yes
                                            </span>
                                        </label>
                                        <label className="ms-3">
                                            <input
                                                type="radio"
                                                value="no"
                                                checked={yourExporting === "no"}
                                                onChange={handleExportingChange}
                                            />
                                            <span className="ps-1">
                                                No
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Do you have eCommerce experience?</label>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                value="yes"
                                                checked={youreCommerce === "yes"}
                                                onChange={handleECommerceChange}
                                            />
                                            <span className="ps-1">
                                                Yes
                                            </span>
                                        </label>
                                        <label className="ms-3">
                                            <input
                                                type="radio"
                                                value="no"
                                                checked={youreCommerce === "no"}
                                                onChange={handleECommerceChange}
                                            />
                                            <span className="ps-1">
                                                No
                                            </span>
                                        </label>
                                    </div>
                                </div>

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
                                        onChange={handleTextChange}
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
                                        defaultValue={yourName} // Add this line
                                        onChange={handleTextChange}
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

                                        placeholder=""
                                        value={yourPhone}
                                        defaultValue={yourPhone}
                                        onChange={handleTextChange}
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
                                    <label htmlfor="yourEmail" className="form-label"><span className="errors">*</span>Your Email:</label>
                                    <input
                                        //required
                                        type='text'
                                        className={`form-control ${errors && errors.yourEmail ? 'is-invalid' : ''}`}
                                        id="yourEmail"
                                        name='yourEmail'
                                        placeholder=""
                                        value={yourEmail}
                                        defaultValue={yourEmail}
                                        onChange={handleTextChange}

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
                                    onClick={handleSubmit}>
                                    {isCheckboxChecked ? 'Submit' :
                                        (<>
                                            Please wait..<RotatingLines
                                                visible={true}
                                                height="20"
                                                width="20"
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
                                src='/images/register_img_marketplace.png'
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

            <Popups />
            <Floating />
            <NewsLetter />
            <Footer />
        </>
    );
}
