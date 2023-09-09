import {
    MaterialCommunityIcons,
    Entypo,
    FontAwesome,
} from "@expo/vector-icons";
import { View } from "react-native";
import Home from "../../screens/Home";
import Businesses from "../../screens/Businesses";
import Deals from "../../screens/Deals";
import Settings from "../../screens/Settings";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
    return (
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
    );
};

export default BottomNav;
