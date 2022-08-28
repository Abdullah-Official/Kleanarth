import react from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import home from '../uploads/image2.jpeg'
import Footer from './footer'
import Image1 from '../uploads/image1.jpeg'

const Body = () => {
    return (<>
        <div style={{ paddingTop: '45px' }} />


        {/* <img src={home} style={{ left: '0px', position: 'absolute' }} alt="Image" /> */}
        <div style={{
            backgroundImage: `url(${home})`,
            // backgroundColor:'#96c496',
            textAlign: 'center',
            width: "100vw",
            borderBottomLeftRadius: '58px',
            height: "80vh",
            
            position: 'relative',
            left:'-9vw',
        }}>
            <h1 style={
                {color:'#f2f2f2',
                paddingTop: '35px',
            }
            }>KleanArth</h1><br />
            <h6 style={
                {color:'#f2f2f2',}
            }>We manage your waste to make a clean, health and sustainable city for you</h6>
            <h2 style={
                {color:'#f2f2f2',}
            }>Right Place For Right Waste!</h2>
        </div>
        
        <div style={{
            backgroundColor:"#83f28f",
            width:'100vw',
            height: "70vh",
            marginTop:'2px',
            position:'relative',
            textAlign:'center',
            left:'-9vw',
        }}>
            <h2 style={
                {
                paddingTop: '75px',
            }
            }>What We Do?</h2>

            <br/>
            <p style={{color: 'black', fontSize: '20px',}}>We probide the alternative of landfills!!!</p>
              <p style={{color: 'black', fontSize: '20px',}}>  In Pakistan,40% of solid waste remains uncollected. </p>
                <p style={{color: 'black', fontSize: '20px',}}>We believes in unlocking waste value by utilising the Waste segregation at source.</p>
                <p style={{color: 'black', fontSize: '20px',}}>Establish connection between 3 different types of users - waste Producer, waste Collector & waste Buyer.</p>
                <p style={{color: 'black', fontSize: '20px',}}>Provide one platform to carry out an automated process where the waste collection will be improved. </p>
                <p style={{color: 'black', fontSize: '20px',}}>We try to clean the city and make it sustainable for liveable future.To make your city clean Think Green, Think clean
                
            </p>

</div>

        <div style={{
            backgroundColor:"#8acc9f",
            width:'100vw',
            height: "70vh",
            marginTop:'2px',
            position:'relative',
            textAlign:'center',
            left:'-9vw',
        }}>
            <h2 style={
                {
                paddingTop: '45px',
            }
            }>How dose it works?</h2>
            <br />
            <br />
        <Row md={4}>
        <Col md={3}>
            <h3>1</h3>
            <h3>Singup</h3>
            <h4>and gather your waste</h4>
        </Col>
        <Col md={3}>
            <h3>2</h3>
            <h3>Place</h3>
            <h4>your waste outside the house</h4>
        </Col>
        <Col md={3}>
            <h3>3</h3>
            <h3>Collection</h3>
            <h4>of waste perform by our collectors they wieght your waste & upload details</h4>
        </Col>
        <Col md={3}>
            <h3>4</h3>
            <h3>Await</h3>
            <h4>for the incentives</h4>
        </Col>
    </Row></div>
        <div style={{
            backgroundImage: `url(${Image1})`,
            // backgroundColor:'#96c496',
            textAlign: 'center',
            width: "100vw",
            height: "100vh",
            position: 'relative',
            // top:'200px',
            left:'-9vw',
            // marginTop: '101px',
        }}>
            <div style={{ paddingTop: '10px' }} />
            <h1 style={{ color: '#83f28f' }}>Contact us</h1>
            <div style={{ paddingTop: '10px' }} />

            <div>
                
                <div style={{ paddingTop: '25px' }} />
            </div>
        </div>
    
        <Footer />


    </>
    )

}
export default Body