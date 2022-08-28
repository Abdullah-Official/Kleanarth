//*  Imported Libraries
import React from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Table, Button } from 'react-bootstrap'

// * Imported Components
import Sidebar from '../../components/sidebar'
import Topbar1 from '../../components/topbar'

const BuyersListAdmin = () => {
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
            marginLeft: '300px',
            marginTop: '10px',
          }}
        >
          <Link to='/buyerAdmin'>
            <Button
              style={{
                marginLeft: '5px',
                marginRight: '5px',
                marginTop: '50px',
                marginBottom: '30px',
                backgroundColor:'#62fcaf',
              }}
            >
              Orders
            </Button>
          </Link>
          
          <Link to='/buyerPaymentAdmin'>
            <Button
              style={{
                marginLeft: '30px',
                marginRight: '5px',
                marginTop: '50px',
                marginBottom: '30px',
                backgroundColor:'#62fcaf',
              }}
            >
              Payments
            </Button>
          </Link>

          <Link to='/buyerRatingAdmin'>
            <Button
              style={{
                marginLeft: '30px',
                marginRight: '30px',
                marginTop: '50px',
                marginBottom: '30px',
                backgroundColor:'#62fcaf',
              }}
            >
              Rating
            </Button>
          </Link>
  
          <br />
          <h3 className=''           
          style={{
                marginLeft: '5px',
                marginRight: '5px',
                marginBottom: '15px',
              }}>Buyers</h3>
          <br />
          <Table striped bordered hover>
            <thead             
            style={{
          
          backgroundColor:'#62fcaf',
          
           }}>
              <tr>
                <th>User no.</th>
                <th>Name</th>
                <th>Phone no.</th>
                <th>Address</th>
                <th>Email</th>
                <th>Password</th>
                <th>Order</th>
                <th>Payment</th>
                <th>Rating</th>


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
                <td>            
                  <Link to='/buyerOrder' style={{ color: '#83f28f' }}>
                    <span style={{ marginLeft: '10px',marginTop:'-10px',position:'absulate' }}>View</span>
                  </Link>
                </td>
                <td>            
                  <Link to='/paymentByBuyer' style={{ color: '#83f28f' }}>
                    <span style={{ marginLeft: '10px',marginTop:'-10px',position:'absulate' }}>View</span>
                  </Link>
                </td>
                <td>
                  <Link to='/buyerRating' style={{ color: '#83f28f' }}>
                    <span style={{ marginLeft: '10px',marginTop:'-10px',position:'absulate' }}>View</span>
                  </Link>
                </td>

              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default BuyersListAdmin
