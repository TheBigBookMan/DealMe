import { View, Text, StatusBar, SafeAreaView } from "react-native";
import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Home from "./screens/Home";
import Businesses from "./screens/Businesses";
import Deals from "./screens/Deals";
import Settings from "./screens/Settings";
import {
    MaterialCommunityIcons,
    Entypo,
    FontAwesome,
} from "@expo/vector-icons";

// * no user sign up for first version, just a read and find deals, can add in user sign up with things like booking and favourites

// TODO refactor as a navbar in components common

// TODO combos should encourage other venues to partner with each other. For example go to Bar A first and get 20% off Bar B.
// TODO combos to stay longer after ordering meal to stay for event
// TODO could o location percent off
// ? incentivise people to go to areas etc and other lcoations

const Tab = createMaterialBottomTabNavigator();

const App = () => {
    const theme = useTheme();

    return (
        <View className="h-screen pt-10 bg-black">
            <StatusBar barStyle="light-content" />
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
        </View>
    );
};

export default App;
