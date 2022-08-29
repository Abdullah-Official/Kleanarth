//*  Imported Libraries
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Topbar1 from '../components/topbar'
import Logo from '../uploads/LogoMain.png'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  //? submitHandler Function
  const submitHandler = e => {
    e.preventDefault()
    dispatch(loginUser({
      email,
      password
    })).unwrap()
    .then(e => {
      alert("LoggedInn")
      window.location.reload()
    }).catch((e) => {alert("ERROR") 
    window.location.reload()})
    window.location.reload()
    setEmail('');
    setPassword('')
  }

  return (
  <>
    <div className='center_div'>
    <Row md={3}>
      <div className='Logodiv' style={{
        width:'50vw',
        marginTop:"10vh",
      }}  >
        <img src= {Logo}alt="" style={{width:'50vw'}} srcset="" />
      </div>
      <div className='login_style' style={{marginTop:'25vh'}}>
        <h1 className='special_Heading' style={{ color: 'white' }}>
          Sign In
        </h1>

        {/* Form */}
        <Form onSubmit={submitHandler}>
          {/* For Email Field  */}
          <Form.Group controlId='email'>
            <Form.Label style={{ color: 'white' }}>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {/* For Password Field  */}
          <Form.Group controlId='password'>
            <Form.Label style={{ color: 'white' }}>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

        

          {/* Submit Button */}
          <Link to= '/' style={{ color: '#83f28f',
          }}>
          <span>Forget Password</span> </Link>

          <br />
          <br />
          {/* <Button id='button_special' type='submit' variant='primary'>
            Sign In
          </Button> */}
          <Button type='submit' variant='primary' id='button_special'
            style={{
              backgroundColor:'#83f28f',              
            }}>
              SignIn
            </Button>
        </Form>

        {/* Link for Register Page */}
        <Row className='py-3'>
          <div style={{
             position: 'relative',
             width: '15vw',
             height: '7vh',
             top: '-58px',
              marginLeft: '200px',
   
          }}>

            <Link to='/register' style={{ color: '#83f28f',
          marginLeft: '160px', }}>
              <span >SignUp</span>
            </Link>
          </div>
        </Row>
      </div>
      </Row>
    </div>
    
    </>
  )
}

export default LoginPage
