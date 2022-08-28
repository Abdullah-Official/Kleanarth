//*  Imported Libraries
import React, { useState } from 'react'
import { Row, Col, Button, Form, Table } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'

// * Imported Components
import Producersidebar from '../../components/producersidebar'
import Topbar1 from '../../components/topbar'

const ProducerInprogressOrder = () => {
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
            marginLeft: '260px',
            height: '100vh',
            width: '90.8%',
          }}
        >
          <h3 className=''>Producer</h3>
          
          <h1>In Progress Orders</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Waste Type</th>
                <th>Location</th>
                <th>Collector</th>
                <th>Estimated Time</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default ProducerInprogressOrder
