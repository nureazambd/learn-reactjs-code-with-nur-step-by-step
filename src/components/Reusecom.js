import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Reusecom(props) {
  return (
    <div>
        <h1>Reusecom</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
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
      
    </Table>


    </div>

  )
}
