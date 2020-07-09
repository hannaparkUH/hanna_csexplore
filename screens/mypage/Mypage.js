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

const Mypage = ({ navigation }) => {
  return (
    <Container>
      <ScrollView behaviour="height" style={styles.container}>
        <Header>
          <Left></Left>
          <Body>
            <Title>First Lastname</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => navigation.navigate("MypageMenu")}
              />
            </Button>
          </Right>
        </Header>

        <Grid style={styles.profileHeader}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Image
                style={styles.profile}
                source={require("../../assets/images/profile3.jpg")}
              />
            </View>
            <View>
              <H2 style={{ color: "#fff", paddingTop: 25 }}>First Lastname</H2>
              <Text note style={{ color: "#fff" }}>
                Kaiser High School CS Club
              </Text>
            </View>
          </View>
          <Body></Body>
        </Grid>
        <View style={styles.view}>
          <Card transparent>
            <CardItem style={styles.about}>
              <Icon active name="globe" />
              <Text>htt://www.websitename.com</Text>
            </CardItem>
            <CardItem style={styles.about}>
              <Icon active name="school" />
              <Text>Kaiser High School</Text>
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
});
