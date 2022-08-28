//*  Imported Libraries
import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

// * Imported Components
import Buyersidebar from '../../components/buyersidebar'
import Topbar1 from '../../components/topbar'

const PaymentBuyerToAdmin = () => {
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
            marginLeft: '260px',
            height: '100vh',
            width: '90.8%',
          }}
        >
          <h3 className=''>Buyer</h3>
        
          <br />
          <h1>Payment (Account Details)</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Account Holder</th>
                <th>Account Number</th>
                <th>Product Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ali</td>
                <td>9053495905093</td>
                <td>ABC</td>
                <td>7 JULY</td>
                <td>10 PM</td>
                <td>1790</td>
                <td>UNPAID</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default PaymentBuyerToAdmin
