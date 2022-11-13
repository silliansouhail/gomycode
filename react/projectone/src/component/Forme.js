import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./forme.css"

const Forme = () => {
  return (
    <div className='formate'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='d-grid gap-2'>
        <Button variant="primary" type="submit" size="sm" >
          Submit
        </Button>
      </div>
    </Form>
    </div>
  )
}

export default Forme