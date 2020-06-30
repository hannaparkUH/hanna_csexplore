import React from "react";
import {} from "react-native";
import { Spinner } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
//import Home from './screens/Home'
import Explore from "./screens/explore/Explore";
import Observer from "./screens/explore/Observer";
import Learner from "./screens/explore/Learner";

import Community from "./screens/Community";
import Clubs from "./screens/Clubs";
import Mypage from "./screens/Mypage";
import Rewards from "./screens/rewards/Rewards";

const ExploreStack = createStackNavigator();

function ExploreScreen() {
  return (
      <ExploreStack.Navigator headerMode="none">
        <ExploreStack.Screen name="Explore" options={{headerShown: false}}  component={Explore}/> 
        <ExploreStack.Screen name="Observer" component={Observer}/>
        <ExploreStack.Screen name="Learner" component={Learner}/>
      </ExploreStack.Navigator>
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
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Clubs" component={Clubs} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Rewards" component={Rewards} />
        <Tab.Screen name="Me" component={Mypage} />
        
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <Spinner />
  );
}
