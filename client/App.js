import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
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

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar></StatusBar>
            <Tab.Navigator activeColor="#1CB2A4">
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Deals" component={Deals} />
                <Tab.Screen name="Businesses" component={Businesses} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
