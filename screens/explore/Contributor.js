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
  View,
  Text,
  Row,
  Grid,
  Col,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

const Contributor = ({ navigation }) => {
  return (
    <Container>
      <ScrollView behaviour="height" style={styles.container}>
        <Header style={{ backgroundColor: "#ff6f00" }}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>CS Contributor</Title>
          </Body>
        </Header>
        <Content>
          <View></View>
          <WebView
            style={{ width: "100%", height: 230 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: "https://www.youtube.com/embed/svwZQ5NHmW4" }}
          />
          <Grid>
            <Row>
              <Col
                style={{
                  backgroundColor: "#feaa07",
                  borderRadius: 20,
                  margin: 5,
                }}
              >
                <Text style={styles.textBox}>Find CS club in your school</Text>
              </Col>
              <Col
                style={{
                  backgroundColor: "#feaa07",
                  borderRadius: 20,
                  margin: 5,
                }}
              >
                <Text style={styles.textBox}>
                  Hackathons for High School Students
                </Text>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  backgroundColor: "#feaa07",
                  borderRadius: 20,
                  margin: 5,
                }}
              >
                <Text style={styles.textBox}>Attend Workshops & Events</Text>
              </Col>
              <Col
                style={{
                  backgroundColor: "#feaa07",
                  borderRadius: 20,
                  margin: 5,
                }}
              >
                <Text style={styles.textBox}>ICS Sparks</Text>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  backgroundColor: "#feaa07",
                  borderRadius: 20,
                  margin: 5,
                }}
              >
                <Text style={styles.textBox}>
                  Hawaii Annual Code Challenge 2020
                </Text>
              </Col>
              <Col
                style={{
                  backgroundColor: "#feaa07",
                  borderRadius: 20,
                  margin: 5,
                }}
              >
                <Text style={styles.textBox}>
                  Post your projects and get feedback
                </Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Contributor;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
  },
  textBox: {
    color: "#fff",
    fontSize: 18,
    padding: 20,
    height: 120,
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
  WebViewStyle: {
    margin: 20,
  },
});
