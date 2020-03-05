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
            provided, I have decided I would really like this job. But that was
            not what was asked of me so here are my selections.
          </p>

          <Item.Group>
            <Header size="large">Two things I am excited about:</Header>

            <Item>
              <Item.Content>
                <Item.Header>
                  Work with developers to debug and resolve a product issue
                </Item.Header>
                <Item.Description className="padd-left">
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
                <Item.Description className="padd-left">
                  It is exciting for me to help someone get set up and started
                  down the right path. This helps limit issues down the road and
                  increases customer satisfaction. Also, specific customer needs
                  help test the boundaries of a program and can lead to the
                  development of new features.
                </Item.Description>
              </Item.Content>
            </Item>
            <Header size="large">Two things I want to learn to do:</Header>
            <Item>
              <Item.Content>
                <Item.Header>
                  Plan new product features based on feedback from customers
                </Item.Header>
                <Item.Description className="padd-left">
                  I am eager to learn and take part in the lifecycle of new
                  features. This would help me achieve two goals; improving
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
                <Item.Description className="padd-left">
                  I have experience creating content for social platforms but I feel this is an area where there is a lot to learn. 
                  The trends, platforms and tools are constantly changing and will provide endless opportunites for me to learn new skills.
                </Item.Description>
              </Item.Content>
            </Item>
            <Header size="large">Two things I don't want to do: </Header>
            <Item>
              <Item.Content>
                <Item.Header>
                  Create a video tutorial on how to set up a campaign element
                </Item.Header>
                <Item.Description className="padd-left">
                  I feel each customer’s situation is unique and I would
                  prefer to train them individually. That said if there is a
                  significant amount of boilerplate set up that could speed up
                  training, then I would be interested in putting that together.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content>
                <Item.Header>
                  Handle an upset customer worried about a missing feature
                </Item.Header>
                <Item.Description className="padd-left">
                                I am not sure anyone really <strong>wants</strong> to engage with angry/upset
                  customers. But I have extensive
                  experience in this area and I am confident in my ability to calm
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