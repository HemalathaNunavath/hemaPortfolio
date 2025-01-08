import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import withdrawal from "../../Assets/Projects/withdrawal.png";
import planet from "../../Assets/Projects/planet.png";
import Moneymanager from "../../Assets/Projects/Moneymanager.png";
import Events from "../../Assets/Projects/Events.png";
import nh from "../../Assets/Projects/nh.png";
import Appoinment from "../../Assets/Projects/Appoinment.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Events}
              isBlog={false}
              title="Events"
              description="This event registration app, developed using ReactJS and styled with CSS, 
              enables users to register for events seamlessly. The app's dynamic interface, powered by React's 
              component-based architecture, ensures smooth interaction and real-time updates. 
              CSS is used to enhance the user experience with an intuitive design, clear forms, and responsive layouts."
              ghLink="https://eventshemalatha.ccbp.tech/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Appoinment}
              isBlog={false}
              title="Appointment-App"
              description="This appointment app, built using ReactJS and styled with CSS, allows users to easily schedule and manage their appointments. 
              The user-friendly interface enables seamless interaction, while the responsive design ensures it works smoothly across devices. With React's component-based structure,
               each appointment section is modular, making it easy to update and maintain. The app leverages CSS to create a clean, modern look with interactive elements, offering a pleasant user experience"
              ghLink="https://hemalathaapp.ccbp.tech/"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Moneymanager}
              isBlog={false}
              title="Money Manager"
              description="This money manager app, built using ReactJS and styled with CSS, provides users with a simple yet effective way to
               track their expenses and income. The app features a clean, intuitive interface where users can easily add, categorize, 
               and view transactions. React's component-based structure ensures smooth performance and easy updates,
                while CSS enhances the design with responsive elements and clear visuals. " 
              ghLink="https://managerweb.ccbp.tech/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={withdrawal}
              isBlog={false}
              title="Cash Withdrawal"
              description="This cash withdrawal app, developed using ReactJS and styled with CSS, offers a straightforward solution 
              for managing and processing cash withdrawals. The app provides an intuitive user interface where users can securely 
              request and monitor their withdrawal transactions. 
              With React's powerful component-based structure, the app offers real-time updates and smooth user interactions."
              ghLink="https://hemacash.ccbp.tech/"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> 

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nh}
              isBlog={false}
              title="Github Popular Repos"
              description="These popular GitHub repositories showcase projects built with ReactJS and styled with CSS, 
              highlighting the power and flexibility of these technologies. Each repository features well-structured React components, 
              allowing for modular and efficient code. 
              The use of CSS ensures a visually appealing and responsive design, making the applications user-friendly across different devices."
              ghLink=" https://gvjhgjk.ccbp.tech/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> 

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={planet}
              isBlog={false}
              title="Planet App"
              description="This planet app, built using ReactJS and styled with CSS, offers an interactive and visually engaging experience for users 
              to explore planets and celestial bodies. With React's component-based structure, the app efficiently displays detailed information about each planet, 
              allowing users to easily navigate through various features. 
              The CSS styling enhances the user interface with a modern, space-themed design, providing smooth transitions and responsive layouts. "
              ghLink="https://hemaplanet.ccbp.tech/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
