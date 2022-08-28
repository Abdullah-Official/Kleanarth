//*  Imported Libraries
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Row, Col, Table, Form, Modal, Button } from 'react-bootstrap'



import { Link } from 'react-router-dom'


// * Imported Components
import Producersidebar from '../../components/producersidebar'
import Topbar1 from '../../components/topbar'

const ProducerPreviousOrder = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const history = useNavigate()

  const nextPage = e => {
    e.preventDefault()
    history('/ratingProducer')
  }
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

          }}>My Waste</h1>
          <Table striped bordered hover>
            <thead style={{
          
          backgroundColor:'#62fcaf',
          
        }}>
              <tr>
                <th>Order no.</th>
                <th>Waste Type</th>
                <th>Quantity (Kg)</th>
                <th>Incentive</th>
                <th>Collector</th>
                <th>Date & Time</th>
                <th>Rating </th>
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
                <Button onClick={handleShow}
              style={{
                marginLeft: '10px',
                marginRight: '20px',
                marginTop: '0px',
                backgroundColor:'#62fcaf',

              }}
>
              Rate
            </Button>
                </td>

              </tr>
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Rate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput5'
                >
                  <Form.Label>Rating</Form.Label>
                  <Form.Control type='text' placeholder='Rating out of 5' />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput6'
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control type='text' placeholder='Message' />
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
                Rate
              </Button>
            </Modal.Footer>
          </Modal>
        
        </Col>
      </Row>
    </>
  )
}

export default ProducerPreviousOrder
