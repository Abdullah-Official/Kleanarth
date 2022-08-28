//*  Imported Libraries
import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

// * Imported Components
import Collectorsidebar from '../../components/collectorsidebar'
import Topbar1 from '../../components/topbar'

const OrderCollector = () => {
  const [waste, setWaste] = useState('Select Waste Type.....')
  const [rating, setRating] = useState(0)

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
            marginLeft: '260px',
            height: '100vh',
            width: '90.8%',
          }}
        >
          <h3 className=''>Collector</h3>
          <br />
          
          <h3 className=''>
            Order
            <span style={{ marginLeft: '920px' }}>
              <Button variant='primary'>New</Button>
            </span>
          </h3>
          <br />
          <br />
          <br />

          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Producer Name</Form.Label>
              <Form.Control type='text' placeholder='Producer Name' autoFocus />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
              <Form.Label>Waste Type</Form.Label>

              <Form.Control
                as='select'
                value={waste}
                onChange={e => setWaste(parseInt(e.target.value))}
              >
                <option value={parseInt('0')}> Select .... </option>
                <option value={parseInt('1')}> Poor </option>
                <option value={parseInt('2')}> Fair </option>
                <option value={parseInt('3')}> Good </option>
                <option value={parseInt('4')}> Very Good </option>
                <option value={parseInt('5')}> Excellent </option>
              </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
              <Form.Label>Quantity</Form.Label>
              <Form.Control type='text' placeholder='30 kg' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput4'>
              <Form.Label>Time</Form.Label>
              <Form.Control type='text' placeholder='10:00Pm' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput5'>
              <Form.Label>Date</Form.Label>
              <Form.Control type='text' placeholder='9 December' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput6'>
              <Form.Label>Total Travel</Form.Label>
              <Form.Control type='text' placeholder=' 50 km' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput7'>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as='select'
                value={rating}
                onChange={e => setRating(parseInt(e.target.value))}
              >
                <option value={parseInt('0')}> Recycle Able </option>
                <option value={parseInt('1')}> Non Recycle Able </option>
              </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput8'>
              <Form.Label>Renewal</Form.Label>
              <Form.Control type='text' placeholder=' 50 RS' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput9'>
              <Form.Label>Amount</Form.Label>
              <Form.Control type='text' placeholder=' 700 RS' />
            </Form.Group>
            <Button variant='info' style={{ marginRight: '860px' }}>
              Close
            </Button>
            <Button variant='primary'>Post</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default OrderCollector
