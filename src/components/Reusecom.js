import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Reusecom(props) {
  return (
    <>
        <h1>Reusecom</h1>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>
      </thead>
      {props.student.map((item,index)=>
      <tbody>
      <tr>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>
            {item.contact.map((contact,index)=>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Office</th>
                <th>Home</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{contact.office}</td>
                <td>{contact.home}</td>
                <td>{contact.personal}</td>
              </tr>
            </tbody>
          </Table>
            )}
        </td>
      </tr>
    </tbody>
      )}
    </>

  )
}
