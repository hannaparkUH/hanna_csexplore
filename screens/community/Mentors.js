import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

class Mentors extends Component {
  render() {
    return (
      <Container>
        <ScrollView behaviour="height" style={styles.container}>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require("../../assets/images/profile1.jpg")}
                />
              </Left>
              <Body>
                <Text>Jennifer Geis</Text>
                <Text note>IT Specialist, UH</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require("../../assets/images/profile2.jpg")}
                />
              </Left>
              <Body>
                <Text>Robert Brewer</Text>
                <Text note>Software Engineer, Tableau</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require("../../assets/images/profile3.jpg")}
                />
              </Left>
              <Body>
                <Text>Aaron Kagawa</Text>
                <Text note>Software Engineer, LiveAction</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </ScrollView>
      </Container>
    );
  }
}

export default Mentors;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
