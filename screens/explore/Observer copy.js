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
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";

const Observer = ({ navigation }) => {
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
            <Title>CS Observer</Title>
          </Body>
        </Header>
        <Content>
          <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/hawaiiCS.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
              <Text style={styles.title}>
                Why Hawaii needs more CS experts
              </Text>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/piano.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
              <Text style={styles.title}> CS in other subjects</Text>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Body>
                <Image
                  source={require("../../assets/images/careers.png")}
                  style={styles.cardImage}
                />
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemBot}>
              <Text style={styles.title}> CS Careers</Text>
            </CardItem>
          </Card>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Observer;

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
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
});
