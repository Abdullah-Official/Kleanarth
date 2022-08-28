//*  Imported Libraries
import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

// * Imported Components
import Buyersidebar from '../../components/buyersidebar'
import Topbar1 from '../../components/topbar'

const CollectorInfoToBuyer = () => {
  return (
    <>
    <Topbar1 />
      <Row>
        <Col md={3}>
          <Buyersidebar />
        </Col>
        <Col
          md={9}
          style={{
            marginLeft: '280px',
            marginTop:'30px',
            height: '100vh',
            width: '90.8%',
          }}
        >
          {/* <h3 className=''>Buyer</h3>
          <input type='text' placeholder='Search data' /> */}
          <br />
          <h1>Collector Information </h1>
          <Table striped bordered hover 
          >
            <thead
             style={{
          
              backgroundColor:'#62fcaf',
              
            }} >
              <tr>
                <th>Order No.</th>
                <th>Collector ID</th>
                <th>Name</th>
                <th>Number</th>              
                <th>Location</th>
                <th>Picture</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default CollectorInfoToBuyer
