import React, {useState} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import '../index.css';

const RightSide = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    function login(){
        
        console.log(email,password);
    }
    return (
        <div>
            <br />
            <br />
            <br />
            <Form style={{ width: "80%", marginTop: "10%", marginLeft:"10%" }}>
                <p style={{fontSize:"20px",}}>Sign in to SPACE-iZ Admin</p>
                <Form>
                    <Form.Row>
                        <Col> 
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Row>
                </Form>
                <Form.Group className="group" style={{ marginTop: "2%" }}>
                    <Form.Check type="checkbox" label="Remember me"  />
                    <a href="/" >Forgot Password?</a>
                </Form.Group>

                <Button type="submit"
                className="submit-btn"
                onClick={login}
                >Submit</Button>
            </Form>
        </div>
    )
}

export default RightSide;