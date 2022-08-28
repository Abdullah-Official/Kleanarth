//*  Imported Libraries
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Row, Col, Table, Form, Modal, Button } from 'react-bootstrap'



import { Link } from 'react-router-dom'


// * Imported Components
import Sidebar from '../../components/sidebar'
import Topbar1 from '../../components/topbar'

const CollectorAdmin = () => {
  const [show, setShow] = useState(false)


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
            height: '100vh',
            width: '90.8%',
              marginLeft: '280px',
              marginTop: '10px',
           //margin: '10px',
          }}
        >
          {/* <h3 className=''>Producer</h3> */}
        
          <h1
          style={{
            
              marginTop: '20px',
              marginBottom: '20px',

          }}>Collection</h1>

          <Table striped bordered hover
          style={{
            width:'94%',
            
          }}>
            <thead style={{
          backgroundColor:'#62fcaf',
          
        }}>
              <tr>
                <th>User no.</th>
                <th>Order no.</th>
                <th>Waste Type</th>
                <th>Weight</th>
                <th>Incentive</th>
                <th>Address</th>
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
          
          <h1
          style={{
            
              marginTop: '20px',
              marginBottom: '20px',

          }}>Delivers</h1>
          <Table striped bordered hover
                    style={{
                      width:'94%',
                      
                    }}>
            <thead style={{
          
          backgroundColor:'#62fcaf',
          
        }}>
              <tr>
                <th>User no.</th>
                <th>Order no.</th>
                <th>Org. Name </th>
                <th>Waste Type</th>
                <th>Quantity    </th>
                <th>Incentive</th>
                <th>Address</th>
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
                <td></td>
              </tr>
            </tbody>
          </Table>        
        </Col>
      </Row>
    </>
  )
}



export default CollectorAdmin