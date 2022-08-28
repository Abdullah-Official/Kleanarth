//*  Imported Libraries
import React, { useState } from 'react'
import { Row, Col, Table, Form, Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// * Imported Components
import Buyersidebar from '../../components/buyersidebar'
import Topbar1 from '../../components/topbar'
const AvailableProductsBuyer = () => {
  const [waste, setWaste] = useState('Select Waste Type.....')
  const [account, setAccount] = useState('Select Account Type.....')


  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const history = useNavigate()

  const nextPage = e => {
    e.preventDefault()
    history('/collectorInfoToBuyer')
  }

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
            marginLeft: '290px',
            marginTop: '30px',
          }}
        >
         
          <br />
          <h1           
          style={{
            marginTop: '30px',
            marginBottom: '25px',
          }}>Recyclable Waste</h1>
          <Table striped bordered hover>
            <thead             
            style={{
          
          backgroundColor:'#62fcaf',
          
           }}>
              <tr>
                <th>Waste Type</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Location</th>
                <th>Time</th>
                <th>Purchase</th>
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

                    backgroundColor:'#62fcaf',

                  }}>Buy</Button>
                </td>
              </tr>
            </tbody>
          </Table>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Buy Waste</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>

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
                </Form.Control>
              </Form.Group>
              <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Quantity'
                    autoFocus
                  />
                </Form.Group>
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

                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput2'
                >
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type='number' placeholder='Amount' />
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
                Purchase
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </>
  )
}

export default AvailableProductsBuyer
