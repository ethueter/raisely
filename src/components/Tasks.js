import React from 'react';
import { Container, Header, Item } from 'semantic-ui-react';


const Tasks = () => {
    
    return (
      <div>
        <Container text textAlign="justified">
          <Header size="large" textAlign="center">
            You Must Choose...But Choose Wisely
          </Header>
          <p>
            After reading over the{" "}
            <a href="https://gist.github.com/jamiemling/66ed83e1d0abc07290ca0c7a8dd81c31">
              Task List
            </a>{" "}
            provided, I have decided that I would really like this job. But that
            was not what was asked of me so here are my selections:
          </p>
       
        <Item.Group>
          <Header as="h3">Two things I am excited about:</Header>
          
            <Item relaxed="very">
                <Item.Content>
                    <Item.Header>
                        Work with developers to debug and resolve a product issue
                    </Item.Header>
                    <Item.Description>
                        I love to get to the root of a problem and figure out a
                        solution. It is one of the main reasons I chose to pursue a
                        career in software development. The opportunity to work with
                        developers and to learn from them while solving real world
                        problems is very exciting to me.
                    </Item.Description>
                </Item.Content>
            </Item>
            <Item>
                <Item.Content>
                    <Item.Header>
                        Running a training session with a customer to set up their
                        unique campaign
                    </Item.Header>
                    <Item.Description>
                        It is exciting for me to help someone get set up and started on
                        a the right foot. By getting set up correcting in the beginning
                        helps limit issues down the road and increases customer
                        satisfaction.
                    </Item.Description>
                </Item.Content>
            </Item>
          <Header as="h3">Two things I want to learn to do:</Header>
            <Item>
                <Item.Content>
                    <Item.Header>
                        Plan new product features based on feedback from customers
                    </Item.Header>
                    <Item.Description>
                        I am eager to learn and take part in the lifecycle of new
                        features. This would help me achieve two goals, improving
                        customer experience with the products and my experience with
                        software development.
                    </Item.Description>
                </Item.Content>
            </Item>
            <Item>
                <Item.Content>
                    <Item.Header>
                        Create engaging content for social media and digital marketing
                    </Item.Header>
                    <Item.Description>
                        While I have experience creating content for social platforms, I
                        would like to learn how to improve in that area. Also interested
                        to learn about tools to coordinate campaigns across different
                        platforms.
                    </Item.Description>
                </Item.Content>
            </Item>
          <Header as="h3">Two things I don't want to do: </Header>
            <Item>
                <Item.Content>
                    <Item.Header>
                        Create a video tutorial on how to set up a campaign element
                    </Item.Header>
                    <Item.Description>
                        I feel each customer’s situation is unique and that I would
                        prefer to train them individually. That said if there is a
                        significant amount of boilerplate set up that could speed up
                        training then I would interested in putting that together.
                    </Item.Description>
                </Item.Content>
            </Item>
            <Item>
                <Item.Content>
                    <Item.Header>
                        Handle an upset customer worried about a missing feature
                    </Item.Header>
                    <Item.Description>
                        I am not sure anyone really wants to engage with angry/upset
                        people much less your customers. But I have, extensive
                        experience doing it and I am confident in my ability to calm
                        people and help guide them to a solution.
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
        </Container>
      </div>
    );
};

export default Tasks;