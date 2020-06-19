import React, { Component } from "react";
import { StyleSheet, Image} from "react-native";
import { Container, Header, Content, Body, Title, Text, Card, CardItem, Left, Icon, StyleProvider, Grid, Col, List, ListItem, Right} from 'native-base';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Constants from 'expo-constants';
//import * as Font from 'expo-font'

class Explore extends Component {
    render() {
        return (
          <Container>
        <Header>
          <Title style={{paddingTop: 15 }}>Explore CS Opportunities</Title>
        </Header>
        <ScrollView behaviour = "height" style= {{ margin: 10, flex: 1}}> 
        <Content>
        <Text style={styles.title}>Why Choose Computer Science?</Text>
        <Grid>
          <Col>
        <Card style={{flex: 1, padding: 5}}>
            <CardItem>
              <Body>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{height: 100, width: null, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          </Col>
          <Col>
          <Card style={{flex: 1, padding: 5}}>
            <CardItem>
              <Body>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{height: 100, width: null, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          </Col>
          </Grid>
          <Grid>
          <Col>
        <Card style={{flex: 1, padding: 5}}>
            <CardItem>
              <Body>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{height: 100, width: null, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          </Col>
          <Col>
          <Card style={{flex: 1, padding: 5}}>
            <CardItem>
              <Body>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{height: 100, width: null, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          </Col>
          </Grid>

          <Text style={styles.title}>Choose Your Interest</Text>  
          <List>
            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
              <Left>
                <Text>Data Science</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
             <Left>
                <Text>Web Development</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Game Design</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Software Engineering</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Machine Learning</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          <Text style={styles.title}>Recommended Resources</Text>
        <Card style={{flex: 1, padding: 5}}>
            <CardItem>
              <Body>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{height: 50, width: null, flex: 1}}/>
                <Text>
                 Learn Programming Online
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 1, padding: 5}}>
            <CardItem>
              <Body>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{height: 50, width: null, flex: 1}}/>
                <Text>
                  RadGrad
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        </ScrollView>
        </Container>

        );
    }
}
export default Explore;

const styles = StyleSheet.create({

  title: {
    fontWeight:"bold",
    fontSize:17,
    paddingTop:10,
    paddingBottom:10,
  },

});