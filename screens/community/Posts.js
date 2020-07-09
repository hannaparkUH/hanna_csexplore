import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Tabs,
  Tab,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

class Posts extends Component {
  render() {
    return (
      <Container>
        <ScrollView behaviour="height" style={styles.container}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require("../../assets/images/profile1.jpg")}
                />
                <Body>
                  <Text>Full Name</Text>
                  <Text note>July 04, 2020</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={require("../../assets/images/project1.jpg")}
                  style={{ height: 200, width: "100%", flex: 1 }}
                />
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer laoreet non magna sed mattis. Vivamus dolor nisl,
                  rhoncus ornare enim vitae...
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="heart" />
                  <Text>1,926 likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require("../../assets/images/profile2.jpg")}
                />
                <Body>
                  <Text>Full Name</Text>
                  <Text note>July 04, 2020</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={require("../../assets/images/project2.jpg")}
                  style={{ height: 200, width: "100%", flex: 1 }}
                />
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer laoreet non magna sed mattis. Vivamus dolor nisl,
                  rhoncus ornare enim vitae...
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="heart" />
                  <Text>1,926 likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require("../../assets/images/profile3.jpg")}
                />
                <Body>
                  <Text>Full Name</Text>
                  <Text note>July 04, 2020</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={require("../../assets/images/project3.jpg")}
                  style={{ height: 200, width: "100%", flex: 1 }}
                />
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer laoreet non magna sed mattis. Vivamus dolor nisl,
                  rhoncus ornare enim vitae...
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="heart" />
                  <Text>1,926 likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </ScrollView>
      </Container>
    );
  }
}
export default Posts;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
