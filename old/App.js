import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import {
    MaterialCommunityIcons,
    Entypo,
    FontAwesome,
} from "@expo/vector-icons";
import { useState } from "react";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
import Deals from "./src/screens/Deals";
import Businesses from "./src/screens/Businesses";
import Business from "./src/screens/Business";
import Events from "./src/screens/Events";
import Favourites from "./src/screens/Favourites";
import AddBusiness from "./src/screens/AddBusiness";
import AddDeal from "./src/screens/AddDeal";
import AddEvent from "./src/screens/AddEvent";
import BusinessLogin from "./src/screens/BusinessLogin";
import Map from "./src/screens/Map";

// * no user sign up for first version, just a read and find deals, can add in user sign up with things like booking and favourites

// TODO refactor as a navbar in components common

// TODO combos should encourage other venues to partner with each other. For example go to Bar A first and get 20% off Bar B.
// TODO combos to stay longer after ordering meal to stay for event
// TODO could o location percent off
// ? incentivise people to go to areas etc and other lcoations

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar></StatusBar>
            <Tab.Navigator
                activeColor="red"
                inactiveColor="white"
                barStyle={{ backgroundColor: "#212121" }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Entypo
                                name="home"
                                size={25}
                                color={focused ? "red" : "white"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Deals"
                    component={Deals}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons
                                name="food-fork-drink"
                                size={24}
                                color={focused ? "red" : "white"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Businesses"
                    component={Businesses}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name="list-ul"
                                size={24}
                                color={focused ? "red" : "white"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name="cog"
                                size={24}
                                color={focused ? "red" : "white"}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
