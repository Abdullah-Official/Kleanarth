//*  Imported Libraries
import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

// * Imported Components
import Collectorsidebar from '../../components/collectorsidebar'
import Topbar1 from '../../components/topbar'
const LocationCollector = () => {
  return (
    <>
    <Topbar1 />
      <Row>
        
        <Col md={3}>
          <Collectorsidebar />
        </Col>
        <Col
          md={9}
          style={{
            marginLeft: '260px',
            height: '100vh',
            width: '90.8%',
          }}
        >
          <h3 className=''>Collector</h3>
          <br />
        

          <h3 className=''>Live Location</h3>
          <br />
          <br />
          <br />
          <p>
            Turn On your Location so that admin can access your Location!!!!
          </p>
          <br />
          <Form>
            <Form.Check
              type='switch'
              id='location-switch'
              label='Turn On Location'
            />
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default LocationCollector
