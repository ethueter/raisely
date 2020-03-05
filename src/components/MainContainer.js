import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

const MainContainer = () => {
    
    return (
        <Container text textAlign="justified">
            <Header as='h2' textAlign="center">Customer Success Engineer Applicaiton</Header>
                <p>
                    Welcome to my application site! Please take a look around. The site is organized into several sections. The
                    Q & A section will provide answers to the questions posed in the job posting. Tasks will tackle the task list
                    requirement. The Resume section displays my current resume. And the About section discusses this site.
                    Here is just a little bit about me.
                </p>
            <Image src="sidewalk.jpg" size="large" floated='left'/>  
            <p>
                I love living in Charleston. I came to this city for a weekend...now I have been here for 20 years now.
                As one of the oldest cities in the country, you can find history around every corner. My second apartment here was build in 1740! (About 8 blocks from this photo)
                </p> 
            <Image src="cistern1.jpg" size='large' floated="right" />
            <p>
                There is always something going on. From the Charleston Wine + Food festival, Cooper River Bridge Run, Southeastern Wildlife Expo, countless oyster roasts to my favorite, Spoleto Festival USA, you can always find something to do.
                I worked for the Spoleto Festival for 9 years and made it a point to never miss a jazz concert on the Cistern (pictured right).
            </p>
            <Image src="follykayak.jpg" size="large" floated="left"/>
            <p>
                When I need to step away from the events or my computer, I head for the water. Kayaking through the countless waterways throughout the lowcountry is a great way to clear your head and refresh your soul.
            </p>
            <p>I hope you enjoy the site and I look forward to hearing from you all soon!</p>
        </Container>
    )
};

export default MainContainer;