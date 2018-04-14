import React from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react';


const LandingPage = ({ mobile }) => (
  <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
  <Container text>
    <Header
      as='h1'
      content='CS Visuals'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Visualize Your Data.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
  </Segment>
);
export default LandingPage;

