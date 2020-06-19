import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
           <Body><Title>Home</Title></Body>
        </Left>
        </Header>
      </Container>
    );
  }
}

export default Home