//*  Imported Libraries
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Row, Col, Table, Form, Modal, Button } from 'react-bootstrap'

// * Imported Components
import Collectorsidebar from '../../components/collectorsidebar'
import Topbar1 from '../../components/topbar'

const ToDoListCollector = () => {
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState([])
  const checkList = [""]



  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const history = useNavigate()
  const nextPage = e => {
    e.preventDefault()
    history('/collector')
  }


  return (
    <>
    <Topbar1 />
      <Row>
        <Col md={3}>
          <Collectorsidebar />
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
          <h3 className=''>PickUp</h3>
          <br />
          <Table striped bordered hover>
            <thead style={{
          
          backgroundColor:'#62fcaf',
          
        }}>
              <tr>
                <th>Order no.</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact No.</th>
                <th>Waste Type</th>
                <th>Weight</th>
                <th>Location</th>
                <th>Time</th>
                <th>Pick</th>
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
                  <Button onClick={handleShow}
                    style={{
                     marginLeft: '0px',
                      marginRight: '0px',
                      backgroundColor:'#62fcaf',

                    }}
                  >
                   Add
                  </Button></td>

                <td>                   
                  <Button 
                    style={{
                     marginLeft: '0px',
                      marginRight: '0px',
                      backgroundColor:'#62fcaf',

                    }}
                  >
                   Route
                  </Button></td>
                  <td></td>
                <td>
                {checkList.map((item, index) => (
                  <div key={index}                     
                  style={{
                    marginLeft: '10px',
                     marginRight: '20px',

                   }}>
                   <input value={item} type="checkbox" />
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Weight</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput5'
                >
                  <Form.Label>Weight</Form.Label>
                  <Form.Control type='number' placeholder='Weight' />
                </Form.Group>
                
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='info' onClick={handleClose}>
                Close
              </Button>
              <Button variant='primary' onClick={nextPage}
              style={{

                backgroundColor:'#62fcaf',

              }}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        

          <h3 className=''>Deliver</h3>
          <br />
          <Table striped bordered hover>
            <thead style={{
          
          backgroundColor:'#62fcaf',
          
        }}>
              <tr>
                <th>Order no.</th>                
                <th>Name</th>
                <th>Address</th>
                <th>Contact No.</th>
                <th>Waste Type</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Time</th>
                <th>Deliver</th>
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
                     marginLeft: '0px',
                      marginRight: '0px',
                      backgroundColor:'#62fcaf',

                    }}
                  >
                   Route
                  </Button></td>
                <td></td>
                <td>                 
                  {checkList.map((item, index) => (
                  <div key={index}                     
                  style={{
                    marginLeft: '25px',
                     marginRight: '20px',

                   }}>
                   <input value={item} type="checkbox" />
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </Table>

          
        </Col>
      </Row>
    </>
  )
}

export default ToDoListCollector
