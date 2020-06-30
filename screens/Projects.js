import React, { Component } from 'react';
import { Image } from 'react-native';
import { Tabs, Tab, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title  } from 'native-base';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Card style={{ borderRadius: 15}}>

<CardItem cardBody>
  <Image source={require('../assets/images/ocean.jpg')} style={{height: 150, width: null, flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15}}/>
</CardItem>
<CardItem bordered style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
  <Left>
    <Body>
      <Text>What is Computer Science?</Text>
      <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id fringilla ligula. Maecenas felis nisl, elementum vel justo ac, suscipit pretium orci. In consectetur iaculis magna.</Text>
    </Body>
  </Left>
</CardItem>
</Card>
      </Container>
    );
  }
}
export default Projects