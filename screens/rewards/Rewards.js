import React, { Component } from "react";
import { StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Content,
  Text,
  Card,
  CardItem,
  H3,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";

const Rewards = ({ navigation }) => {
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
            <Title>Rewards</Title>
          </Body>
        </Header>
        <Content>
          <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/ipad.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <H3>Post your project and Win an iPad!</H3>
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="person" />
                  <Text>50 participants</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/magazine.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <H3>
                  Register your club and receive “Careers with Code” magazine.
                </H3>
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="person" />
                  <Text>50 participants</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/amazon.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <H3>Win $100 Amazon Gift Card!</H3>
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="person" />
                  <Text>50 participants</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/codingBooks.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <H3>Five lucky winners will receive Computer Science Books.</H3>
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="person" />
                  <Text>50 participants</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#dcf0fb",
  },
  cardImage: {
    height: 150,
    width: "100%",
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardItemTop: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#dcf0fb",
  },
  cardItemBot: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: -10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  card: {
    flex: 0,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 20,
  },
});
