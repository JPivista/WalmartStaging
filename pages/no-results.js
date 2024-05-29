import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link'
const NoResults = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h1 className='text-primary fw-bold ' style={{ fontSize: "50px" }}>
                        Search Query Not Found
                    </h1>
                    <h3 className='text-warning p-2'>
                        Please Enter the Proper Value
                    </h3>
                    <Link href="/" className='btn btn-primary rounded-pill mt-4'>
                        <h3 className='text-center mt-2'>
                        Go Back To Homepage
                        </h3>
                        
                    </Link>
                </Col>
              
            </Row>
        </div>
    )
}

export default NoResults