import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';


const About = () => {
    
    return (
        <Container text>
            <Header as='h2'>About This Site</Header>
                <p>
                     This site was created by Tyler Hueter using the Create React App scaffolding.
                </p>
                <h3 className="About-text">Language</h3>
                <ul>
                    <p>JavaScript</p>
                </ul>
            <h3 className="About-text">Framework and Libraries</h3>
            <ul>
                <p>React</p>
                <p>React DOM</p>
                <p>React-Router DOM</p>
                <p>Semantic UI React</p>
            </ul>
                
    </Container>
    )
}

export default About;