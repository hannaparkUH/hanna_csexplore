import React, { Component } from "react";
import { StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  Container,
  Header,
  Body,
  Right,
  Left,
  Button,
  Icon,
  Title,
  Tab,
  Tabs,
  ScrollableTab,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import Tab1 from "./Projects";
import Tab2 from "./Posts";
import Tab3 from "./Events";
import Tab4 from "./Mentors";
const Community = ({ navigation }) => {
  return (
    <Container>
      <ScrollView behaviour="height" style={styles.container}>
        <Header hasSegment>
          <Left></Left>
          <Body>
            <Title>Community</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Projects">
            <Tab1 />
          </Tab>
          <Tab heading="Posts">
            <Tab2 />
          </Tab>
          <Tab heading="Events">
            <Tab3 />
          </Tab>
          <Tab heading="Mentors">
            <Tab4 />
          </Tab>
        </Tabs>
      </ScrollView>
    </Container>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  clubHeader: {
    backgroundColor: "#c00000",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
  },
  profile: {
    width: 100,
    height: 100,
    backgroundColor: "#ffffff",
    borderRadius: 100 / 2,
  },
});
