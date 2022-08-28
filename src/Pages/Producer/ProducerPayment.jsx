//*  Imported Libraries
import React from 'react'
import { Row, Col, Button, Form, Table } from 'react-bootstrap'

// * Imported Components
import Producersidebar from '../../components/producersidebar'
import Topbar1 from '../../components/topbar'

const ProducerPayment = () => {
  return (
    <>
    <Topbar1 />
      <Row>
        <Col md={3}>
          <Producersidebar />
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
                <th>Payment</th>
                <th>Paid</th>
                <th>Remaining</th>
                <th>Date & Time</th>
                <th>Pay</th>
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
            <td>                
              <Button
                  style={{
                  marginLeft: '20px',
                  marginRight: '2px',
                  marginTop: '0px',
                  backgroundColor:'#3bedb7',
                  }}>
                  Pay
                </Button>
              </td>


          
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

export default ProducerPayment
