import { View, Text, StatusBar, SafeAreaView } from "react-native";

import BottomNav from "./components/Nav/BottomNav";

// * no user sign up for first version, just a read and find deals, can add in user sign up with things like booking and favourites

// TODO refactor as a navbar in components common

// TODO combos should encourage other venues to partner with each other. For example go to Bar A first and get 20% off Bar B.
// TODO combos to stay longer after ordering meal to stay for event
// TODO could o location percent off
// ? incentivise people to go to areas etc and other lcoations

const App = () => {
    return (
        <View className="h-screen pt-10 bg-black">
            <StatusBar barStyle="light-content" />
            <BottomNav />
        </View>
    );
};

export default App;
