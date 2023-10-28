import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
export default function Student() {
    const data = [
        {name:'Salman',email:'salman@gmail.com',contact:[
            {office:'098765',home:'0654321',personal:'012345'}
        ]},
        {name:'Paranto',email:'paranto@gmail.com',contact:[
            {office:'098765',home:'0654321',personal:'012345'}
        ]},
        {name:'Ashiq',email:'ashiq@gmail.com',contact:[
            {office:'098765',home:'0654321',personal:'012345'}
        ]},
        {name:'Hridoy',email:'hridoy@gmail.com',contact:[
            {office:'098765',home:'0654321',personal:'012345'}
        ]},
        {name:'Shourov',email:'shourov@gmail.com',contact:[
            {office:'098765',home:'0654321',personal:'012345'}
        ]}
    ]
  return (
    <div>
        <h1>Student</h1>
        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Contact</th>
          </tr>
        </thead>
        {data.map((item,index)=>
        <tbody>
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact.map((contact,index)=>
            <Table key={index}>
                <thead>
                    <tr>
                        <th>Offic</th>
                        <th>Home</th>
                        <th>Personal</th>
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
            )}</td>
          </tr>
        </tbody>
        )}
      </Table>
        
    </div>
  )
}
