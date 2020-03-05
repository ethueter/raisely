import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';


const Answers = () => {
    
    return (
      <div>
        <Segment vertical>
          <Header as="h3">
            Why would you be a good fit for the Customer Success Engineer role?
          </Header>
          <Container textAlign="justified" text="true">
            <p>
                My past experience and my current passion make me an excellent fit
                for the Customer Success Engineer position. In my past careers every
                role had its basis in customer service. At each company I have
                started on the front lines before rising to a management role.
                Beginning with selling tickets for a performing arts festival, to
                going door to door to talk to voters and then driving a taxi 50hrs a
                week, I have always focused on customers having the best experience.
                As my position rose, so did my responsibilities. I was charged with
                handling large scale problems such as, refunding thousands of
                tickets due to a performers injury, calming and attempting to retain
                customers after a software platform failure with loss of data, to
                the sorted problems that cab drivers face that may not be fit to
                print. I have faced angry voters who were not happy about my
                candidate being gay and I have been able to provide a ride to safety
                for someone fleeing a domestic violence situation. I have had the
                responsibility to handle these situations and many more with calm,
                respect and the knowledge that my actions are the face of the
                company for that customer.
            </p>
            <p>
                A short while ago I sold my stake in a small business and gave up my
                role as General Manager to pursue a new passion. I attended the
                Flatiron School for their 15 week, Full Stack Web Development
                course. We focused on several different languages and technologies,
                such as Ruby, Rails, SQL, JavaScript, React and Redux. We worked
                with HTML, CSS and several CSS libraries to complete the course work
                and bring our ideas to life. My focus since completion of the course
                has been on frontend development, with a heavy focus on React and
                React Native, while always working with HTML and CSS. My extensive
                customer service background, paired with a desire to get “under the
                hood” and code to solve problems, makes the role of Customer Success
                Engineer a perfect fit for me.
            </p>
          </Container>
        </Segment>
        <Segment vertical>
          <Header as="h3">
            Why do you want to work here over somewhere else?
          </Header>
          <Container textAlign="justified" text="true">
            <p>
                I have always had a close connection to non-profits, starting with
                my very first job. I have seen and been a part of small teams with
                big goals. Most non-profits and charities at least started with a
                small staff, sometimes of just one. The passion of these people,
                their goals of helping others and making the world a better place
                are inspiring to be around. Providing a tool (or series of tools) to
                help them achieve their goals is incredibly important. I want to
                work with Raisely to help charities get the most out of the products
                you offer.
            </p>
          </Container>
        </Segment>
        <Segment vertical>
          <Header as="h3" size="medium">
            Tell us about a platform you believe has solved a complex problem
            really well, and why. Would you change anything in their approach?
          </Header>
          <Container textAlign="justified" text="true">
            <p>
                When I started with Charleston Green Taxi there was no uber or Lyft.
                There were no apps at all for the taxi industry. We saw an industry
                that was reliant on radios and map books and we knew we could do
                better. We took on the tasks of tracking vehicles, communicating
                with drivers, tying reservations to digital navigation, and taking
                and storing reservations, just to name a few. We did so using a
                combination of free or low cost apps. We continued this approach
                until we found TaxiCaller. TaxiCaller created a dispatching system
                that took and stored reservations, automated pricing, handled
                sending reservations to drivers, tracked vehicles, provided an
                Android and iOS app for customers, processed payments and provided
                reporting on it all. There were many other features of this system
                but as someone that had attempted to create their own system from
                scratch, I appreciated their level of detail and ability to contain
                all the aspects of the taxi industry in one application. As we
                worked with them I respected their customer feedback driven approach
                of adding or adjusting features we needed which also help guide
                changes to their system as it evolved.
            </p>
          </Container>
        </Segment>
      </div>
    );
};

export default Answers;