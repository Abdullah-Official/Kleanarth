import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import LogoMain from '../uploads/LogoMain.png'
import home from '../uploads/home.png'
import Body from '../components/homebody';
const HomePage = () => {
  return (
    <>
      <Navbar className='topbar1' style={{
        width: '100vw',
        height: '20px',
        backgroundColor:'white',
        position: 'absolute',
        justify: 'space-between',
        left: '0px',
      }}  >
          <img src={LogoMain} style={{
            width: '200px',
            height: '300px',
            paddingTop: '25px',
          }} className='logoi' alt='logo' />

          <Link to='/login'style={{
                position: 'absolute',
                right: '20px',
          }}>Login</Link>

          <Link to='/register' style={{
                position: 'absolute',
                right: '85px',
          }}>Singup</Link>
      </Navbar>
      <Body />
    </>
  )


}

export default HomePage
