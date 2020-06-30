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
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const ObserverList = ({ navigation }) => {
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
        <Right>
        <Button transparent iconLeft>
            <Icon name='list' />
            <Text>View All</Text>
          </Button>
        </Right>
      </Header>
      <Content>
        <TouchableHighlight
          style={styles.imageBtn}
          onPress={() => navigation.navigate("Observer")}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={styles.bg}
              source={require("../../assets/images/deepocean.png")}
            ></Image>
          </View>
        </TouchableHighlight>
      </Content>
      </ScrollView>
    </Container>
  );
};

export default ObserverList;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imageBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  bg: {
    width:null,
    flex: 1,
    height: 800,
  },
});