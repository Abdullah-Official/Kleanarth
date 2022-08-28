//*  Imported Libraries
import React from 'react'
import { Row, Col, Button, Table } from 'react-bootstrap'

// * Imported Components
import Collectorsidebar from '../../components/collectorsidebar'

import Topbar1 from '../../components/topbar'

const ShowOrderCollector = () => {
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
          
          <h3 className=''>
            Order
            <span style={{ marginLeft: '920px' }}>
              <Button variant='primary'>New</Button>
            </span>
          </h3>
          <br />
          <br />
          <br />

          {/*  */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producer Name</th>
                <th>Waste Type</th>
                <th>Quantity</th>
                <th>Trash</th>
                <th>Time</th>
                <th>Date</th>
                <th>Travel</th>
                <th>Proress Order Status</th>
                <th>Ratting</th>
                <th>Account Number</th>
                <th>Amount</th>
                <th>Account Holder Name</th>
                <th>Renewual</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
          {/*  */}
        </Col>
      </Row>
    </>
  )
}

export default ShowOrderCollector
