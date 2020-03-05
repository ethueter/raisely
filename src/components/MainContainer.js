import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const MainContainer = () => {
    
    return (
        <Container text textAlign="justified">
            <Header as='h2' textAlign="center">Customer Success Engineer Applicaiton</Header>
                <p>
                    Welcome to my application site! Please take a look around. The site is organized into several sections. The
                    Q & A section will provide answers to the questions posed in the job posting. Tasks will tackle the task list
                    requirement. The Resume section displays my current resume. And the About section discusses this site.
                    Let me know what you think!
                </p>
                
        </Container>
    )
};

export default MainContainer;