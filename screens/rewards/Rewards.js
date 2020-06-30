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
  Grid,
  Row,
  Col
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
        <Grid>
          <Row>
            <Col>
            <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/ipad.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
            <Body>
              <Text style={styles.title}>Win an iPad!</Text>
                  <Text note>sponsored by RadGrad</Text>
                </Body>
            </CardItem>
          </Card>
            </Col>
            <Col>
            <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/magazine.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
              <Body>
              <Text style={styles.title}>Win CS magazines!</Text>
                  <Text note>sponsored by RadGrad</Text>
                </Body>
            </CardItem>
          </Card>
            </Col>
          </Row>

          <Row>
            <Col>
            <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/amazon.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
            <Body>
              <Text style={styles.title}>Win $100 Amazon Gift Card!</Text>
                  <Text note>sponsored by RadGrad</Text>
                </Body>
            </CardItem>
          </Card>
            </Col>
            <Col>
            <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/codingBooks.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
              <Body>
              <Text style={styles.title}>Win CS Books!</Text>
                  <Text note>sponsored by RadGrad</Text>
                </Body>
            </CardItem>
          </Card>
            </Col>
          </Row>
        </Grid>

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
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
  title: {
    fontSize: 15,

  }
  
});
