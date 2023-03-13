import React, { useState } from 'react'
import User from '../User'
import { Button, Form, Modal } from 'react-bootstrap';
import './sign.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Sign = () => {
  const [EmailId, setEmailId] = useState("");
  const [password, setPasswords] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [getStatus, setGetStatus] = useState("");
  const [modalsShow, setModalsShow] = useState(false);

  const getEmaiil = (e) => {
    setEmailId(e.target.value);
  }
  const getPasswords = (e) => {
    setPasswords(e.target.value);
  }

  // 5t73d$66t

  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    const loginData = {
      username: EmailId,
      password: password
    }

    axios.post("https://paul.blueboxonline.com/api/v1/users/login", loginData).then((res) => {
      console.log(res);

      if (res.status === 200) {
        history.push("/Home");
      }

    }).catch((error) => {
      setGetStatus(error.response.status);
      setErrorMessages(error.response.data.error)
      if (getStatus === 400) {
        setModalsShow(true)
      } else {
        setModalsShow(false)
      }
    })
  }

  const handleClosebtn = () => {
    setModalsShow('')
  }

  return (
    <>
      <User />

      {
        modalsShow ? <div
          className="modal show"
          style={{ display: 'block', position: 'absolute', top: "265px" }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Error - Sign-in Faild</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p style={{ textAlign: "center" }}>{errorMessages}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosebtn}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div> : ""
      }



      <div >
        <Form className='sing-main'>
          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Control type="email" placeholder="Enter email" className='input-field' onChange={getEmaiil} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Control type="password" placeholder="Password" className='input-field' onChange={getPasswords} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleClick}>
            Sign In
          </Button>

        </Form>
      </div>
    </>
  )
}

export default Sign