//*  Imported Libraries
import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

// * Imported Components
import Buyersidebar from '../../components/buyersidebar'
import Topbar1 from '../../components/topbar'

const DeliverScheduleBuyer = () => {
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
            height: '100vh',
            width: '90.8%',
            marginLeft: '290px',
            marginTop:'35px', 
          }}
        >
          <br />
          <h3 className=''>Deliver Schedule</h3>
          <br />
          <br />
          <Row>
            <Col md={4} style={{ marginLeft: '50px' }}>
              <Table striped bordered hover>
                <thead style={{
          
          backgroundColor:'#62fcaf',
          
        }}>
                  <tr>
                    <th colSpan={2} style={{ textAlign: 'center' }}>
                      Deliver Schedule
                    </th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                  <tr>
                    <td>Day</td>
                    <td>Time</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Monday</td>
                    <td>7:00AM-7:00PM</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Tuesday</td>
                    <td>7:00AM-7:00PM</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Wednesday</td>
                    <td>7:00AM-7:00PM</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Thursday</td>
                    <td>7:00AM-7:00PM</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Friday</td>
                    <td>7:00AM-7:00PM</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Saturday</td>
                    <td>7:00AM-7:00PM</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Sunday</td>
                    <td>7:00AM-7:00PM</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            {/*  */}
            <Col md={4} style={{ marginLeft: '200px' }}>
              <Table striped bordered hover>
                <thead style={{ textAlign: 'center', backgroundColor:'#62fcaf',}}>
                  <tr>
                    <th>Public Day/Event</th>
                    <th>Holiday</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                  <tr>
                    <td>New Year</td>
                    <td>31 December</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Independence Day</td>
                    <td>14 August</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Labour Day</td>
                    <td>1 May</td>
                  </tr>
                  {/*  */}
                  <tr>
                    <td>Kashmir Day</td>
                    <td>5 Feb</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default DeliverScheduleBuyer
