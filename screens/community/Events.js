import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

class Events extends Component {
  render() {
    return (
      <Container>
        <ScrollView behaviour="height" style={styles.container}>
          <List>
            <ListItem thumbnail>
              <Left>
                <Image
                  source={require("../../assets/images/calendar_icon.png")}
                  style={{ height: 60, width: 60 }}
                />
              </Left>
              <Body>
                <Text>Event One</Text>
                <Text note>
                  Month Date, 2020 at 6:00 PM {"\n"}Address goes here
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Image
                  source={require("../../assets/images/calendar_icon.png")}
                  style={{ height: 60, width: 60 }}
                />
              </Left>
              <Body>
                <Text>Event Two</Text>
                <Text note>
                  Month Date, 2020 at 6:00 PM {"\n"}Address goes here
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Image
                  source={require("../../assets/images/calendar_icon.png")}
                  style={{ height: 60, width: 60 }}
                />
              </Left>
              <Body>
                <Text>Event Three</Text>
                <Text note>
                  Month Date, 2020 at 6:00 PM {"\n"}Address goes here
                </Text>
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

export default Events;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
