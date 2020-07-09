import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Card,
  CardItem,
  Text,
  Body,
  Grid,
  Row,
  Col,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

class Projects extends Component {
  render() {
    return (
      <Container>
        <ScrollView behaviour="height" style={styles.container}>
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
        </ScrollView>
      </Container>
    );
  }
}
export default Projects;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#ffffff",
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
