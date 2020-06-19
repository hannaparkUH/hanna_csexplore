import React, { Component } from 'react';
import { Image } from 'react-native';
import { Tabs, Tab, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title  } from 'native-base';

class Rewards extends Component {
  render() {
    return (
      <Container>
        <Header>
        <Title style={{paddingTop: 15 }}>Rewards</Title>
        </Header>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://picsum.photos/200/300'}} />
                <Body>
                  <Text>Title goes here</Text>
                  <Text note>by Firstname Lastname</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://picsum.photos/200/300'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4</Text>
                </Button></Left>
              <Right>
                <Text note>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
      </Container>
    );
  }
}
export default Rewards