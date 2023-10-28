import React,{useState} from 'react'
import "./App.css";
import "./Style.css"
import style from "./Style.module.css"
import User from './components/User';
import Student from './components/Student';
import { Button,Card,Dropdown  } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export default function App() {
  // const [show,setShow] = useState(true);
  const [count,setCount] = useState(100);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <h1 className='type1'>App Style type - 1</h1>
      <h1 style={{color:"red",fontSize:'500',backgroundColor:'black'}}>App Style type - 2</h1>
      <h1 className={style.type3}>App Style type - 3</h1>

      <Student count={count}/>
      <div>
      {show? <User/>:<h1>component remove!!</h1>}
      </div>
      
      {/* <button onClick={()=>{setShow(!show)}}>Click to show/hide</button> */}
      <button  onClick={()=>{setCount(count+1)}}>Student count</button><br/>
      
      <div>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>

      <div>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>

      <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>



    </div>
  )
}

