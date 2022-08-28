import react from 'react'
import { Row } from 'react-bootstrap'
import Image  from '../uploads/image1.jpeg'


const Footer = ()=>{
    return(
        <>
         <div style={{
        // backgroundImage:`url(${home})` ,
        backgroundColor:'#96c496',
        textAlign:'center',
        flex: 1,
        justifyContent: 'flex-end',
        width: "100vw",
        position:'relative',
        left:"-9vw",
    }}>
        <Row md={2}>
        <img src={Image }alt="asd"style={{
            width:"40vw",
            height:'40vh',
            left:0,
            border:'4px solid gray',
            position:'relative',
        }} />
        <div style={{
            textAngle:'center',
            marginTop:'20px',
        }}>
        <p>CopyRight&copy; by </p>
        </div>
        </Row>
        
    </div>
        
        </>
    )
}
export default Footer