//*  Imported Libraries
import React, { useState } from 'react'
import { Row, Col, Table, Form, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Topbar1 from '../../components/topbar'

// * Imported Components
import Sidebar from '../../components/sidebar'

const AdminHome = () => {
  const [waste, setWaste] = useState('Select Waste Type.....')
  const [account, setAccount] = useState('Select Account Type.....')

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const history = useNavigate()

  const nextPage = e => {
    e.preventDefault()
    history('/adminHome')
  }
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
            marginTop: '10px',
          }}
        >
          {/* <Link to='/producerOrder'>
            <Button
              style={{
                marginLeft: '5px',
                marginRight: '5px',
                marginTop: '50px',
                marginBottom: '30px',
                backgroundColor:'#62fcaf',
              }}
            >
              Signup Requeset
            </Button>
          </Link> */}


          
          <h1               
          style={{
                marginLeft: '5px',
                marginRight: '5px',
                marginTop: '50px',
                marginBottom: '30px',
              }}>Signup request</h1>
          <Table striped bordered hover>
            <thead             
            style={{
          
          backgroundColor:'#62fcaf',
          
           }}>
              <tr>
                <th>User no.</th>
                <th>Name</th>
                <th>Location</th>
                <th>Date & Time</th>
                <th>Status</th>

              </tr>
            </thead>
           
            <tbody>
            
              <tr>
              
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>            
                <Button onClick={handleShow}
                  style={{  
                  marginLeft: '20px',
                  marginRight: '2px',
                  marginTop: '0px',
                  marginBottom: '0px',
                  backgroundColor:'#3bedb7',
                  }}
                >
                  Check
                </Button></td>
              </tr>
            </tbody>
          </Table>

          <h1               
          style={{
                marginLeft: '5px',
                marginRight: '5px',
                marginTop: '50px',
                marginBottom: '30px',
              }}>location request</h1>
          <Table striped bordered hover>
            <thead             
            style={{
          
          backgroundColor:'#62fcaf',
          
           }}>
              <tr>
                <th>User no.</th>
                <th>Order no.</th>
                <th>Name</th>
                <th>Address</th>
                <th>Collector Id</th>

                <th>Date & Time</th>
                <th>Status</th>

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
                <Button 
                  style={{  
                  marginLeft: '20px',
                  marginRight: '2px',
                  marginTop: '0px',
                  marginBottom: '0px',
                  backgroundColor:'#3bedb7',
                  }}
                >
                  Accept
                </Button></td>
              </tr>
            </tbody>
          </Table>



          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>signup request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table striped bordered hover>
            <thead             
>
              <tr>
                <th             
                style={{
          
          backgroundColor:'#62fcaf',
          width:'50px',
          
           }}>First Name</th>
                <td></td>
              </tr>
              <tr>
                <th                 
                style={{
          
          backgroundColor:'#62fcaf',
          
           }}>Last Name</th>
                <td></td>
              </tr>
              <tr>
                <th                 
                style={{
          
          backgroundColor:'#62fcaf',
          
           }}>Phone no.</th>
                <td></td>
              </tr>
              <tr>
                <th                 
                style={{
          
          backgroundColor:'#62fcaf',
          
           }}>Address</th>
                <td></td>
              </tr>
              <tr>
                <th                 
                style={{
          
          backgroundColor:'#62fcaf',
          
           }}>User Type</th>
                <td></td>

              </tr>
              <tr>
                <th                 
                style={{
          
          backgroundColor:'#62fcaf',
          
           }}>Email</th>
                <td></td>

              </tr>
              <tr>
                <th                 
                style={{
          
          backgroundColor:'#62fcaf',
          
           }}>Password</th>
                <td></td>

              </tr>
              <tr>
                <th                 
                style={{
          
          backgroundColor:'#62fcaf',
          
           }}>Confirm</th>
                <td></td>

              </tr>
            </thead>
           
            <tbody>
            
              {/* <tr>
              
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr> */}
            </tbody>
          </Table>
              {/* <Form>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>Account no.</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Account no.'
                    autoFocus
                  />
                </Form.Group>


                <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput2'
              >
                <Form.Label>Waste Type </Form.Label>

                <Form.Control
                  as='select'
                  value={waste}
                  onChange={e => setWaste(parseInt(e.target.value))}
                
                >
                  <option value={parseInt('0')}                  
                  style={{

                  backgroundColor:'#62fcaf',

                  }}> Select .... </option>
                  <option value={parseInt('1')}
                    style={{backgroundColor:'#62fcaf',}}> Plastic </option>
                  <option value={parseInt('2')}
                  style={{backgroundColor:'#62fcaf',}}> Paper </option>
                  <option value={parseInt('3')}
                  style={{backgroundColor:'#62fcaf',}}> Trash </option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput2'
              >
                <Form.Label>Account Type </Form.Label>

                <Form.Control
                  as='select'
                  value={account}
                  onChange={e => setAccount(parseInt(e.target.value))}
                
                >
                  <option value={parseInt('0')}                  
                  style={{

                  backgroundColor:'#62fcaf',

                  }}> Select .... </option>
                  <option value={parseInt('1')}
                    style={{backgroundColor:'#62fcaf',}}>EasyPaisa </option>
                  <option value={parseInt('2')}
                  style={{backgroundColor:'#62fcaf',}}>JazzCash</option>

                </Form.Control>
              </Form.Group>
                
              </Form> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant='info' onClick={handleClose}>
                Reject
              </Button>
              <Button variant='primary' onClick={nextPage}               
              style={{

                backgroundColor:'#62fcaf',

              }}>
                Accept
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </>
  )
}



export default AdminHome
