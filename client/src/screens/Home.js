import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import SearchBar from "../components/Home/SearchBar";
import Categories from "./../components/Home/Categories";
import Maps from "./../components/Home/Maps";
import Specials from "./../components/Home/Specials";

// ? Can have multple components, maybe a search bar at top

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView className="w-full h-full">
                <SearchBar />
                <Categories />
                <Maps />
                <Specials />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
