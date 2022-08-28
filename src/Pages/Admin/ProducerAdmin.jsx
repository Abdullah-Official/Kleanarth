//*  Imported Libraries
import React from 'react'
import { Row, Col, Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Topbar1 from '../../components/topbar'

// * Imported Components
import Sidebar from '../../components/sidebar'

const ProducerAdmin = () => {
  return (
    <>
      <Topbar1 />
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col
          md={10}
          style={{
            marginLeft: '300px',
            marginTop: '60px',
            
          }}
        >

          
          <h1 style={{
            marginBottom:'20px',
          }}>Producer Waste</h1>
          <Table striped bordered hover>
            <thead             
            style={{

          
          backgroundColor:'#62fcaf',
          
           }}>
              <tr>
                <th>User no.</th>

                <th>Order no.</th>
                <th>Waste Type</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Location</th>
                <th>Collector</th>
                <th>Date & Time</th>

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
                <td></td>

              </tr>
            </tbody>
          </Table>

        </Col>
      </Row>
    </>
  )
}

export default ProducerAdmin
