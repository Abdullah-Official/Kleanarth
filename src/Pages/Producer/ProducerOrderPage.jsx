//*  Imported Libraries
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Table, Form, Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// * Imported Components
import Producersidebar from '../../components/producersidebar'
import Topbar1 from '../../components/topbar'

const ProducerOrderPage = () => {
  const [waste, setWaste] = useState('Select Waste Type.....')
  const [account, setAccount] = useState('Select Account Type.....')

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const history = useNavigate()

  const nextPage = e => {
    e.preventDefault()
    history('/collectorInfoToProducer')
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
            marginLeft: '290px',
            marginTop: '30px',
          }}
        >
        
          <h3 className=''>Place Order  </h3>

          <Row>
            <Col md={4}>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput2'
              >
                <Form.Label>Select Waste Type </Form.Label>

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
            </Col>
            <Col md={4}>
              <h3>Location </h3>
              <input typ='text' 
              style={{
                marginBottom: '10px',
              }} />
              <iframe
                className='gmap_iframe'
                frameborder='0'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
                src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
              ></iframe>
            </Col>
          </Row>


            <Button onClick={handleShow}
              style={{
                marginLeft: '10px',
                marginRight: '20px',
                marginTop: '50px',
                backgroundColor:'#62fcaf',

              }}
>
              Confirm 
            </Button>


          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Account Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
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
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </>
  )
}

export default ProducerOrderPage
