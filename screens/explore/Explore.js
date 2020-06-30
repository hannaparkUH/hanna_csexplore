import React from "react";
import { StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  Container,
  Content,
  Body,
  Card,
  View,
  CardItem,
  Left,
  Text,
} from "native-base";
//import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const Explore = ({navigation}) => {
    return (
      <Container>
        <ScrollView behaviour="height" style={styles.container}>
          <Content>
            <Card>
              <CardItem cardBody>
                <Image
                  style={styles.headerImage}
                  source={require("../../assets/images/explore_home.png")}
                />
              </CardItem>
            </Card>
            <Card>
              <CardItem cardBody>
                <TouchableHighlight
                  style={styles.imageBtn}
                  onPress={() => navigation.navigate("Observer")}>
                  <View style={styles.view}>
                    <Image
                      style={styles.theImage}
                      source={require("../../assets/images/ocean.png")}
                    ></Image>
                  </View>
                </TouchableHighlight>
              </CardItem>
              <CardItem>
                <Left>
                  <Body>
                    <Text>What is Computer Science?</Text>
                    <Text note>
                      The world of Computer Science is like the ocean, vast and
                      deep. See what you could be with the power of programming.
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem cardBody>
              <TouchableHighlight
                  style={styles.imageBtn}
                  onPress={() => navigation.navigate("Learner")}>
                  <View style={styles.view}>
                    <Image
                      style={styles.theImage}
                      source={require("../../assets/images/mountain.png")}
                    ></Image>
                  </View>
                </TouchableHighlight>
              </CardItem>
              <CardItem>
                <Left>
                  <Body>
                    <Text>I am Ready to Learn Computer Science. </Text>
                    <Text note>
                      Get connected to various educational opportunities in and
                      outside of school. Learn how to make websites, apps and
                      games.{" "}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem cardBody>
                <Image
                  style={styles.theImage}
                  source={require("../../assets/images/surfer.png")}
                ></Image>
              </CardItem>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Take Action! </Text>
                    <Text note>
                      Go out there and make a difference. Use your skills to
                      solve real world problems and get matched with mentors and
                      opportunities.{" "}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem cardBody>
                <Image
                  style={styles.theImage}
                  source={require("../../assets/images/college.png")}
                ></Image>
              </CardItem>
              <CardItem>
                <Left>
                  <Body>
                    <Text>What Can a Computer Science Degree Get You?</Text>
                    <Text note>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus id fringilla ligula.{" "}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
      </Container>
    );
  }

export default Explore;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#dcf0fb",
  },
  //imageWrapper: {
  //textAlign: 'center',
  // height: 130,
  // width: "93%",
  // overflow : "hidden",
  // color: "white",
  // marginTop: 15,
  // marginLeft: 15,
  // marginRight: 15,
  //borderTopLeftRadius: 15,
  //borderTopRightRadius: 15,
  //},
  headerImage: {
    width: "100%",
    height: 130,
  },
  theImage: {
    width: "100%",
    height: 120,
  },
  theText: {
    fontSize: 18,
    color: "white",
    textAlign: "left",
    paddingLeft: 15,
    paddingTop: 40,
  },
  imageBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  view: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
});
