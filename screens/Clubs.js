import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Card, CardItem, Title, Content, List, ListItem, Thumbnail, Text } from 'native-base';

class Clubs extends Component {
  render() {
    return (
      <Container>
        <Header>
        <Title style={{paddingTop: 15 }}>CS Clubs in Hawaii</Title>
        </Header>
        <Content>
          <Card>
            <CardItem header button >
              <Text>Start Your Club Today!</Text>
            </CardItem>
          </Card>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://picsum.photos/id/1/200/300' }} />
              </Left>
              <Body>
                <Text>Kapolei High School</Text>
                <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Body>
              <Right>
              <Button transparent>
                  <Text>view</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://picsum.photos/id/1/200/300' }} />
              </Left>
              <Body>
                <Text>Kapolei High School</Text>
                <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Body>
              <Right>
              <Button transparent>
                  <Text>view</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://picsum.photos/id/1/200/300' }} />
              </Left>
              <Body>
                <Text>Kapolei High School</Text>
                <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Body>
              <Right>
              <Button transparent>
                  <Text>view</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://picsum.photos/id/1/200/300' }} />
              </Left>
              <Body>
                <Text>Kapolei High School</Text>
                <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Body>
              <Right>
              <Button transparent>
                  <Text>view</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://picsum.photos/id/1/200/300' }} />
              </Left>
              <Body>
                <Text>Kapolei High School</Text>
                <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Body>
              <Right>
              <Button transparent>
                  <Text>view</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Clubs