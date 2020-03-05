import React from 'react';
import { Container, Divider, Header, Image, List } from 'semantic-ui-react';

const Resume = () => {
    
    return (
      <div>
        <Container text>
          <Header size="large">E. Tyler Hueter</Header>
          <p>
            <strong>Full Stack Web Developer</strong> and{" "}
            <strong>Software Engineer </strong>
            inspired to solve today’s challenges and seize new opportunities via
            tech. Authentic, curious and highly motivated about technology and
            emerging trends. Relentless about exploring, adapting and developing
            solutions and tools that get the job done. Also skilled in program
            development, systems integration, reporting and account management.
          </p>
          <Header size="medium">Technical Skills</Header>
                <Image src='resume-logos.jpg' size="medium" centered/>
          <p>Ruby | Rails | JavaScript | React | React Native | Redux</p>
          <Header size="medium">Technical Projects</Header>
          <Container textAlign="justified">
            <strong>The Analyst |</strong>{" "}
            <a href="the-analyst.heroduapp.com">Working App</a>
            <a href="https://github.com/ethueter/the-analyst-client">
              {" "}
              Frontend
            </a>
            <a href="https://github.com/ethueter/the-analyst"> Backend</a>
            <a href="https://youtu.be/TPaO07B1IDc"> Demo</a>
            <p>
              Crowdsourcing political bias by masking the source of news
              articles until users provide their own rating.
            </p>
            <List bulleted>
              <List.Item>
                {" "}
                Developed Rails API back-end with endpoints for users, articles,
                sources, and ratings.
              </List.Item>
              <List.Item>
                Utilized Bcrypt and JSON web tokens for secure password storage
                and authentication.
              </List.Item>
              <List.Item>
                Used Create React App and Redux to develop application
                front-end.
              </List.Item>
              <List.Item>
                Employed Semantic UI React for styling and incorporated news
                article data from webhose.io News API.
              </List.Item>
            </List>
          </Container>
          <Divider />
          <Container textAlign="justified">
            <strong>Flatiron, The Game |</strong>{" "}
            <a href="https://github.com/ethueter/FlatironGameFrontend">
              {" "}
              Frontend
            </a>
            <a href="https://github.com/ethueter/FlatironGameBackend">
              {" "}
              Backend
            </a>
            <p>
              Board game-style app with questions based on Flatiron bootcamp
              course materials.
            </p>
            <List bulleted>
              <List.Item>
                {" "}
                Utilized JavaScript to implement front-end and process game
                logic.
              </List.Item>
              <List.Item>Implemented Rails API backend.</List.Item>
              <List.Item>
                Application relied on inline CSS styling and Canvas.
              </List.Item>
            </List>
          </Container>
          <Header size="medium">Professional Experience</Header>
          <Container textAlign="justified">
            <div>
              <p className="align-left">
                <strong>Charleston Green Taxi LLC</strong>, Charleston, SC
              </p>
              <p className="align-right">
                <strong> March 2009 - December 2018</strong>
              </p>
            </div>{" "}
            <div style={{ clear: "both" }}></div>
            <p>
              <strong>Partner / General Manager</strong>
            </p>
            <p>
              Managed daily operations for metropolitan transportation service
              with 50+ drivers and 25 vehicles serving Greater Charleston.
              Complied with local and state regulations set by SCORS and the
              City of Charleston.
            </p>
            <List bulleted>
              <List.Item>
                {" "}
                Hired and trained all drivers and dispatchers, growing from team
                of 8 in 2009 to 50+ within five years.
              </List.Item>
              <List.Item>
                Implemented and maintained the TaxiCaller dispatch system,
                enabling company to utilize multiple fare types, process
                payments, input and dispatch reservations, and track all ride
                data.
              </List.Item>
              <List.Item>
                Strategized use of multiple no-cost technical applications prior
                to the advent of dispatching software.
              </List.Item>
              <List.Item>
                Supported asset purchasing and disposal, procuring 25 vehicles,
                100 cell phones and equipment.
              </List.Item>
              <List.Item>
                Built business still in operation today, reaching $2M in annual
                revenues by 2014.
              </List.Item>
            </List>
            <Divider />
            <div>
              <p className="align-left">
                <strong>Ketner for Congress</strong>, Mt. Pleasant, SC
              </p>
              <p className="align-right">
                <strong> March 2008 - December 2008</strong>
              </p>
            </div>{" "}
            <div style={{ clear: "both" }}></div>
            <p>
              <strong>Director of Operations</strong>
            </p>
            <p>
              Planned and managed day-to-day operations of 15 paid staff and 50+
              volunteers across two campaign offices. Oversaw field, intern, and
              phone banking programs by setting outreach goals, developing
              scripts, conducting training and providing necessary networks
              (phone, IT, transportation).
            </p>
            <List bulleted>
              <List.Item>
                {" "}
                Started as Scheduler and assumed Director-level responsibilities within three months on the job.
            
              </List.Item>
              <List.Item>
                Liaised with local and national government, party officials and donors to establish candidate schedule.
            
              </List.Item>
              <List.Item>
                Purchased and distributed campaign assets for branding and communications.
            
              </List.Item>
              <List.Item>
                Set up and maintained office LAN, including email accounts and firewall security.
            
              </List.Item>
            </List>
            <Divider />
            <p style={{ fontStyle: "italic"}}>Served as Box Office Manager for Spoleto Festival USA 1998-2006</p>
          </Container>
          <Divider />
          <Header size="medium">Education</Header>
          <Container textAlign="justified">
            <List >
              <List.Item>
                {" "}
                <strong>Flatiron School</strong> - Atlanta, GA 2019| Full Stack Web Development, Ruby on Rails, JavaScript, React           
              </List.Item>
              <List.Item>
                <strong>Trident Technical College</strong> - Charleston, SC | Associate of Arts (AA)          
              </List.Item>
              <List.Item>
                <strong>College of Charleston</strong> - Charleston, SC | Undergraduate Studies, Communications         
              </List.Item>
            </List>
          </Container>
        </Container>
      </div>
    );
};

export default Resume;