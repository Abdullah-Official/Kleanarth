//*  Imported Libraries
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Table, Form, Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// * Imported Components
import Producersidebar from '../../components/producersidebar'
import Topbar1 from '../../components/topbar'
import { useDispatch, useSelector } from "react-redux";
import uuid from 'react-uuid';
import { createProducedWaste } from '../../reducers/wasteReducer'
import { createPayment } from '../../reducers/paymentReducer'

const ProducerOrderPage = () => {
  const [waste, setWaste] = useState('Select Waste Type.....')
  const [account, setAccount] = useState('Select Account Type.....')
  const [paymentType, setPaymentType] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const history = useNavigate()

  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  
  const { token, user } = useSelector((state) => state.user);
  // const {  } = useSelector((state) => state.user);
  const nextPage = e => {
    e.preventDefault()
    history('/collectorInfoToProducer')
  }

  const createNewPayment = () => {
    dispatch(createPayment({
      paymentID: uuid(), 
      orderID: 'orderid', 
      paymentType, 
      accountNo: account, 
      totalPaid: '12', 
      paymentTime: new Date(), 
      paymentStatus: 'inactive'
    })).unwrap()
    .then((e) => {
      alert("Successfull")
      setPaymentType('')
      setAccount('')
      handleClose()
    })
    .catch((e) => {
      alert("ERROR")
      console.log({
        paymentID: uuid(), 
        orderID: 'orderid', 
        paymentType, 
        accountNo: account, 
        totalPaid: '12', 
        paymentTime: new Date(), 
        paymentStatus: 'inactive'
      })
      setPaymentType('')
      setAccount('')
      handleClose()
    })
    console.log({ paymentID: uuid(), 
      orderID: 'orderid', 
      paymentType, 
      accountNo: account, 
      totalPaid: '12', 
      paymentTime: new Date(), 
      paymentStatus: 'inactive'})
      setPaymentType('')
      setAccount('')
      handleClose()
  }


  // add this function to CONFIRM BUTTON for Creating New Produced Waste
  const createNewProducedWaste = () => {
    dispatch(createProducedWaste({
      wasteID : uuid(),
    userID : user?.UserID ,
    wasteType : waste,
    creationDate : new Date().getTime(),
    collectionTime : new Date().getTime(),
    wasteValueInPkr : "12000"
    })).unwrap()
    .then(() => {
      
      alert("Successfull")})
      setWaste('')
      handleShow()
      
    .catch(() => {
      alert("ERROR")
    console.log({
      wasteID : uuid(),
      userID : user?.UserID ,
      wasteType : waste,
      creationDate : new Date().getTime(),
      collectionTime : new Date().getTime(),
      wasteValueInPkr : "12000"
    })
    setWaste('')
    handleShow()
  })
    console.log({
      wasteID : uuid(),
      userID : user?.UserID ,
      wasteType : waste,
      creationDate : new Date().getTime(),
      collectionTime : new Date().getTime(),
      wasteValueInPkr : "12000"
    })
    setWaste('')
    // nextPage()
    // handleShow()
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


            <Button onClick={createNewProducedWaste}
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
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
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
                  value={paymentType}
                  onChange={e => setPaymentType(parseInt(e.target.value))}
                
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
              <Button variant='primary' onClick={createNewPayment}               
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
