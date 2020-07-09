import React, { Component } from "react";
import { StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  View,
  Text,
  Card,
  CardItem,
  H1,
  H2,
  H3,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const Steps = ({ navigation }) => {
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
            <Title>CS Clubs in Hawaii</Title>
          </Body>
        </Header>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Body>
                <Image
                  source={require("../../assets/images/students.jpg")}
                  style={{ height: 200, width: "100%", flex: 1 }}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <H1>Steps to Start a Computer Science Club in your School</H1>
                <H2>{"\n"}1. Gauge Interest For Your Club</H2>
                <H3>
                  {"\n"}2. Find an advisor and a group of interested students
                </H3>
                <H3>
                  {"\n"}3. Figure Out the Application Process for Starting a
                  Club at Your School
                </H3>
                <H3>
                  {"\n"}4. Register for your Club on CSExplore{"\n"}
                </H3>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Steps;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#dcf0fb",
  },
});
