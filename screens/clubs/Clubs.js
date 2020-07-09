import React from "react";
import { StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  View,
  Button,
  Title,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
} from "native-base";

//import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const Clubs = ({ navigation }) => {
  return (
    <Container>
      <ScrollView behaviour="height" style={styles.container}>
        <Header>
          <Title style={{ paddingTop: 10 }}>CS Clubs in Hawaii</Title>
          <Right>
            <Button transparent>
              <Text> REGISTER</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <TouchableHighlight
            style={styles.imageBtn}
            onPress={() => navigation.navigate("Steps")}
          >
            <View style={styles.view}>
              <Image
                style={{ height: 80, width: null, flex: 1 }}
                source={require("../../assets/images/steps.png")}
              ></Image>
            </View>
          </TouchableHighlight>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require("../../assets/images/kapoleiHS_logo.jpg")}
                />
              </Left>
              <Body>
                <Text>Kapolei High School</Text>
                <Text note numberOfLines={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text onPress={() => navigation.navigate("ClubSample")}>
                    VIEW
                  </Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require("../../assets/images/kaiserHS_logo.jpg")}
                />
              </Left>
              <Body>
                <Text>Kaiser High School</Text>
                <Text note numberOfLines={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>VIEW</Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require("../../assets/images/kalaniHS_logo.jpg")}
                />
              </Left>
              <Body>
                <Text>Kalani High School</Text>
                <Text note numberOfLines={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>VIEW</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require("../../assets/images/kapoleiHS_logo.jpg")}
                />
              </Left>
              <Body>
                <Text>Kapolei High School</Text>
                <Text note numberOfLines={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text onPress={() => navigation.navigate("ClubSample")}>
                    VIEW
                  </Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require("../../assets/images/kaiserHS_logo.jpg")}
                />
              </Left>
              <Body>
                <Text>Kaiser High School</Text>
                <Text note numberOfLines={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>VIEW</Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require("../../assets/images/kalaniHS_logo.jpg")}
                />
              </Left>
              <Body>
                <Text>Kalani High School</Text>
                <Text note numberOfLines={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>VIEW</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Clubs;

const styles = StyleSheet.create({
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
  },
});
