//*  Imported Libraries
import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

// * Imported Components
import Sidebar from '../../components/sidebar'
import Topbar1 from '../../components/topbar'

const ProducerIncentivesAdmin = () => {
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
            height: '100vh',
            width: '90.8%',
          }}
        >
          <h3 className=''>Incentive</h3>
          
          <br />
          {/*  */}
          <Table striped bordered hover>
            <thead style={{
          
          backgroundColor:'#62fcaf',
          
        }}>
              <tr>
                <th>User no.</th>
                <th>Waste Type</th>
                <th>Quantity</th>
                <th>Incentive</th>
                <th>Paid</th>
                <th>Remaining</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
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
            <label> Total Incentives</label> <input type='number' />
          </span>
        </Col>
      </Row>
    </>
  )
}



export default ProducerIncentivesAdmin
