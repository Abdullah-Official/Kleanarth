//*  Imported Libraries
import React from 'react'
import { Row, Col, Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Topbar1 from '../../components/topbar'

// * Imported Components
import Producersidebar from '../../components/producersidebar'

const ProducerHome = () => {
  return (
    <>
      <Topbar1 />
      <Row>
        <Col md={3}>
          <Producersidebar />
        </Col>
        <Col
          md={10}
          style={{
            marginLeft: '280px',
            marginTop: '10px',
          }}
        >
          <Link to='/producerOrderPage'>
            <Button
              style={{
                marginLeft: '5px',
                marginRight: '5px',
                marginTop: '50px',
                marginBottom: '30px',
                backgroundColor:'#62fcaf',
              }}
            >
              Order
            </Button>
          </Link>
          {/* <Button
            style={{
              marginRight: '5px',
              marginTop: '50px',
            }}
          >
            Incentive
          </Button>
          <Button
            style={{
              marginRight: '5px',
              marginTop: '50px',
            }}
          >
            Payment
          </Button>
            
          <Button
            style={{
              marginRight: '5px',
              marginTop: '50px',
            }}
          >
            Pick up Schedule
          </Button>
          <Button
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              marginTop: '50px',
            }}
          >
            Text Alert
          </Button>
          
          <Button
            style={{
              marginLeft: '5px',
              marginRight: '0px',
              marginTop: '5px',
            }}
          >
            Rating
          </Button> */}

          
          <h1>Orders</h1>
          <Table striped bordered hover>
            <thead             
            style={{
          
          backgroundColor:'#62fcaf',
          
           }}>
              <tr>
                <th>Order no.</th>
                <th>Waste Type</th>
                <th>Location</th>
                <th>Collector</th>
                <th>Date & Time</th>
                <th>Collector Location</th>

              </tr>
            </thead>
           
            <tbody>
            
              <tr>
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
                  marginBottom: '0px',
                  backgroundColor:'#3bedb7',
                  }}
                >
                  Get
                </Button></td>
              </tr>
            </tbody>
          </Table>

          <Link to='/pickUpScheduleProducer'>
            <Button
              style={{
                marginLeft: '5px',
                marginRight: '5px',
                marginTop: '50px',
                marginBottom: '30px',
                backgroundColor:'#62fcaf',
              }}
            >
              PickUp Schedule
            </Button>
          </Link>

        </Col>
      </Row>
    </>
  )
}

export default ProducerHome
