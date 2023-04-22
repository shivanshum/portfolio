import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm an Indian self-taught Front End developer. I create websites with the goal of giving a positive user experience and responsiveness. I'm interested in learning more about designing scalable distribution systems, I enjoy problem solving, and I care about writing maintainable code. A responsive design allows all users, regardless of device, to visit your website.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>SQL</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage