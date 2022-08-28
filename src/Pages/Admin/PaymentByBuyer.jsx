//*  Imported Libraries
import React from 'react'
import { Row, Col, Button, Form, Table } from 'react-bootstrap'

// * Imported Components
import Sidebar from '../../components/sidebar'
import Topbar1 from '../../components/topbar'

const PaymentByBuyer = () => {
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
            marginLeft: '290px',
            marginTop:'40px',
            marginTop: '10px',
          }}
        >
          <br />
          
          <h3 className=''>Payment</h3>
          <br />
          {/*  */}
          <Table striped bordered hover>
            <thead style={{
          
          backgroundColor:'#62fcaf',
          
        }}>
              <tr>
                <th>Order no.</th>
                <th>Waste Type</th>
                <th>Quantity</th>
                <th>Account no.</th>
                <th>Payment</th>
                <th>Paid</th>
                <th>Remaining</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
           
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          
            </tbody>
          </Table>
          {/*  */}
          <span
            style={{
              marginLeft: '320px',
              position: 'absolute',
              bottom: '70px',
              
            }}
          >
            <label> Total Payment</label> <input type='number' />
          </span>
        </Col>
      </Row>
    </>
  )
}

export default PaymentByBuyer
