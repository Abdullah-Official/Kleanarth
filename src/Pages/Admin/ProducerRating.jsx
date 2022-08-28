//*  Imported Libraries
import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

// * Imported Components
import Sidebar from '../../components/sidebar'
import Topbar1 from '../../components/topbar'

const ProducerRating = () => {
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
            marginTop:'35px',
            marginTop: '10px',
          }}
        >
          <br />
          <h1>Rating </h1>
          <br />
          <br />
          <Table striped bordered hover>
            <thead style={{
          
          backgroundColor:'#62fcaf',
          
        }}>
              <tr>
                <th colSpan={2} style={{textAlign:'center'}}>Order Details</th>
                <th colSpan={2} style={{textAlign:'center'}}>Ratings</th>
              </tr>
              <tr>
                <th>Order no.</th>
                <th>Collector</th>
                <th>Rating</th>
                <th>Message</th>

              </tr>
            </thead>
            <tbody>
              <tr>
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

export default ProducerRating
