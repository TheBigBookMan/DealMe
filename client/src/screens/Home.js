import { View, Text, SafeAreaView, Image } from "react-native";

// ? Can have multple components, maybe a search bar at top
// ? A map with nearby locations with maybe little red dots on them on the map close by where something is on and maybe yellow dots fr favourites places that have things on for that night
// ? Maybe a "special offers" section where companies can pay us to promote even more on the homepage
// ? What's on tonight section?????

const Home = () => {
    return (
        <SafeAreaView>
            <View>
                <Image
                    className="w-full h-16"
                    source={require("../images/logo.png")}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
