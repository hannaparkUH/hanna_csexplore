import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  ListItem,
  List,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const Mypage = ({ navigation }) => {
  return (
    <Container>
      <ScrollView behaviour="height" style={styles.container}>
        <Header>
        <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Menu</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <List>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#5ecdf2" }}>
                <Icon active name="create" />
              </Button>
            </Left>
            <Body>
              <Text>Edit Profile</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
            <Button style={{ backgroundColor: "#5ecdf2" }}>
                <Icon active name="notifications" />
              </Button>
            </Left>
            <Body>
              <Text>Notifications</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#5ecdf2" }}>
                <Icon active name="bookmark" />
              </Button>
            </Left>
            <Body>
              <Text>Saved</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#5ecdf2" }}>
                <Icon active name="help-circle" />
              </Button>
            </Left>
            <Body>
              <Text>Help & Support</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#5ecdf2" }}>
                <Icon active name="settings" />
              </Button>
            </Left>
            <Body>
              <Text>Settings & Privacy</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#5ecdf2" }}>
                <Icon active name="log-out" />
              </Button>
            </Left>
            <Body>
              <Text>Log out</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </ScrollView>
    </Container>
  );
};

export default Mypage;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  profileHeader: {
    backgroundColor: "#71CA84",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
