//*  Imported Libraries
import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

// * Imported Components
import Producersidebar from '../../components/producersidebar'
import Topbar1 from '../../components/topbar'

const CollectorInfoToProducer = () => {
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
            marginLeft: '280px',
            marginTop:'30px',
            height: '100vh',
            width: '90.8%',
          }}

        >
         
          <br />
          <h1>Collector Details </h1>
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
                <th>Address</th>
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

export default CollectorInfoToProducer
