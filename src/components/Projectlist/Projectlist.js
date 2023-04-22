import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/similarity-api.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Be-Dance.jpg'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Dashboard Panel"
                description="User Admin Dashboard created with React js, Selenium, WATS is an automated testing software for testing the security and performance of all categories of website, which covers different types of tests as per Developer needs."
                ghLink="https://github.com/shivanshum/WATS"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Similarity-API NextJs"
                description="A dynamic webapp made with Next-Js and Modern Full-Stack App that detects the similarity between two pieces of text.  we're building a complete full-stack API service website together. I chose this topic because it allows us to get a great feeling for how a frontend and backend work together in the new NextJS 13."
                ghLink="https://github.com/shivanshum/similarity-api"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Netflix-Clone"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink="https://github.com/shivanshum/Netflix-clone"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Dance Website"
                description="FireFlies is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://github.com/shivanshum/Dance-Academy-Static-WebPage"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Little Lemon"
                description="Little Lemon is a static website completely build with bootstrap with fully responsive with Table booking reservation system."
                ghLink="https://github.com/shivanshum/Little-Lemon"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todoappshiva.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist