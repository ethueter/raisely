import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';


const About = () => {
    
    return (
        <Container text>
            <Header as='h2'>About This Site</Header>
                <p>
                     This site was created by Tyler Hueter using the Create React App package. Site navigation enabled through the React-Router-DOM library. Styling theme provided through the Semantic UI React CSS library.
                </p>
                <Image.Group size="tiny">
                  <Image src="favicon.ico" />
                  <Image src="semantic.png" />

                </Image.Group>
                
    </Container>
    )
}

export default About;