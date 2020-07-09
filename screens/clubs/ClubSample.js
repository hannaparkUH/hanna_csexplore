import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  View,
  Text,
  Card,
  CardItem,
  H2,
  Grid,
  Col,
  Row,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const ClubSample = ({ navigation }) => {
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
            <Title>Kalani High School</Title>
          </Body>
        </Header>

        <Grid style={styles.clubHeader}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                style={styles.profile}
                source={require("../../assets/images/kalaniHS_logo.jpg")}
              />
            </View>
            <View>
              <H2 style={{ color: "#fff" }}>Kalani High School CS Club</H2>
              <Text note style={{ color: "#fff" }}>
                10 members
              </Text>
              <Button
                small
                light
                style={{ backgroundColor: "#eee", width: 110, marginTop: 5 }}
              >
                <Text> JOIN NOW </Text>
              </Button>
            </View>
          </View>
          <Body></Body>
        </Grid>
        <View style={styles.view}>
          <H2>About</H2>
          <Card transparent>
            <CardItem style={styles.about}>
              <Icon active name="globe" />
              <Text>htt://www.websitename.com</Text>
            </CardItem>
            <CardItem style={styles.about}>
              <Icon active name="home" />
              <Text>4680 Kalanianaʻole Hwy, Honolulu, HI 96821</Text>
            </CardItem>
            <CardItem style={styles.about}>
              <Icon active name="call" />
              <Text>808-000-0000</Text>
            </CardItem>
            <CardItem style={styles.about}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tincidunt felis sit amet molestie dictum. Cras tempus libero
                eget venenatis ultrices.
              </Text>
            </CardItem>
          </Card>
        </View>
        <View style={styles.view}>
          <H2>Members</H2>
          <Grid>
            <Row>
              <Col>
                <Image
                  style={styles.profile}
                  source={require("../../assets/images/profile1.jpg")}
                />
                <Text note>Student Name</Text>
              </Col>
              <Col>
                <Image
                  style={styles.profile}
                  source={require("../../assets/images/profile2.jpg")}
                />
                <Text note>Student Name</Text>
              </Col>
              <Col>
                <Image
                  style={styles.profile}
                  source={require("../../assets/images/profile3.jpg")}
                />
                <Text note>Student Name</Text>
              </Col>
            </Row>
          </Grid>
        </View>
        <View style={styles.view}>
          <H2>Projects</H2>
          <Grid>
            <Row>
              <Col>
                <Card style={styles.card}>
                  <CardItem style={styles.cardItemTop}>
                    <Body>
                      <Image
                        source={require("../../assets/images/project1.jpg")}
                        style={styles.cardImage}
                      />
                    </Body>
                  </CardItem>
                  <CardItem style={styles.cardItemBot}>
                    <Body>
                      <Text style={styles.title}>Project Two Sample</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card style={styles.card}>
                  <CardItem style={styles.cardItemTop}>
                    <Body>
                      <Image
                        source={require("../../assets/images/project2.jpg")}
                        style={styles.cardImage}
                      />
                    </Body>
                  </CardItem>
                  <CardItem style={styles.cardItemBot}>
                    <Body>
                      <Text style={styles.title}>Project One Sample</Text>
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
                        source={require("../../assets/images/project3.jpg")}
                        style={styles.cardImage}
                      />
                    </Body>
                  </CardItem>
                  <CardItem style={styles.cardItemBot}>
                    <Body>
                      <Text style={styles.title}>Project Three Sample</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card style={styles.card}>
                  <CardItem style={styles.cardItemTop}>
                    <Body>
                      <Image
                        source={require("../../assets/images/project4.jpg")}
                        style={styles.cardImage}
                      />
                    </Body>
                  </CardItem>
                  <CardItem style={styles.cardItemBot}>
                    <Body>
                      <Text style={styles.title}>Project Four Sample</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
          </Grid>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ClubSample;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  clubHeader: {
    backgroundColor: "#c00000",
    height: 130,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    width: 100,
    height: 100,
    backgroundColor: "#ffffff",
    borderRadius: 100 / 2,
    marginRight: 20,
  },
  about: {
    marginLeft: -10,
    marginBottom: -10,
  },
  view: {
    borderBottomColor: "#c8c8c8",
    borderBottomWidth: 1,
    margin: 10,
    paddingBottom: 10,
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
});
