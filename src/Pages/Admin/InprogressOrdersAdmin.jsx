//*  Imported Libraries
import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

// * Imported Components
import Sidebar from '../../components/sidebar'
import Topbar1 from '../../components/topbar'

const InprogressOrdersAdmin = () => {
  return (
    <>
    <Topbar1 />
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col
          md={9}
          style={{
            marginLeft: '260px',
            height: '100vh',
            width: '90.8%',
          }}
        >
        
          <br />
          <h5 className=''>Inprogress Orders</h5>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>#</th>
                <th>Order (Buyer/Producer)</th>
                <th>Name</th>
                <th>Address</th>
                <th>Waste Type</th>
                <th>Waste Material</th>
                <th>Quantity for Buyer</th>
                <th>Payment</th>
                <th>Incentive</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default InprogressOrdersAdmin
