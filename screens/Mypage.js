import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class Mypage extends Component {
  render() {
    return (
      <Container>
        <Header>
        <Title style={{paddingTop: 15 }}>My Page</Title>
        </Header>
      </Container>
    );
  }
}

export default Mypage