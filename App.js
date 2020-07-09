import React from "react";
import {} from "react-native";
import { Spinner } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Explore from "./screens/explore/Explore";
import Observer from "./screens/explore/Observer";
import Learner from "./screens/explore/Learner";
import Contributor from "./screens/explore/Contributor";
import DegreePlanner from "./screens/explore/DegreePlanner";

import Clubs from "./screens/clubs/Clubs";
import Steps from "./screens/clubs/Steps";
import ClubSample from "./screens/clubs/ClubSample";

import Community from "./screens/community/Community";

import Mypage from "./screens/mypage/Mypage";
import MypageMenu from "./screens/mypage/MypageMenu";
import Rewards from "./screens/rewards/Rewards";

const ExploreStack = createStackNavigator();

function ExploreScreen() {
  return (
    <ExploreStack.Navigator headerMode="none">
      <ExploreStack.Screen
        name="Explore"
        options={{ headerShown: false }}
        component={Explore}
      />
      <ExploreStack.Screen name="Observer" component={Observer} />
      <ExploreStack.Screen name="Learner" component={Learner} />
      <ExploreStack.Screen name="Contributor" component={Contributor} />
      <ExploreStack.Screen name="DegreePlanner" component={DegreePlanner} />
    </ExploreStack.Navigator>
  );
}

const ClubStack = createStackNavigator();

function ClubScreen() {
  return (
    <ClubStack.Navigator headerMode="none">
      <ClubStack.Screen
        name="Clubs"
        options={{ headerShown: false }}
        component={Clubs}
      />
      <ClubStack.Screen name="Steps" component={Steps} />
      <ClubStack.Screen name="ClubSample" component={ClubSample} />
    </ClubStack.Navigator>
  );
}

const MypageStack = createStackNavigator();

function MypageScreen() {
  return (
    <MypageStack.Navigator headerMode="none">
      <MypageStack.Screen
        name="Mypage"
        options={{ headerShown: false }}
        component={Mypage}
      />
      <MypageStack.Screen
        name="MypageMenu"
        options={{ headerShown: false }}
        component={MypageMenu}
      />
    </MypageStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  React.useEffect(async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    setFontLoaded(true);
  }, []);
  return fontLoaded ? (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={focused ? "ios-home" : "ios-home"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Clubs") {
              return (
                <Ionicons
                  name={focused ? "ios-people" : "ios-people"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Me") {
              return (
                <Ionicons
                  name={focused ? "ios-person" : "ios-person"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Explore") {
              return (
                <Ionicons
                  name={focused ? "ios-compass" : "ios-compass"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Community") {
              return (
                <Ionicons
                  name={focused ? "ios-planet" : "ios-planet"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Rewards") {
              return (
                <Ionicons
                  name={focused ? "ios-star" : "ios-star"}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#507ee5",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Clubs" component={ClubScreen} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Rewards" component={Rewards} />
        <Tab.Screen name="Me" component={MypageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <Spinner />
  );
}
