import {
    View,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
    StatusBar,
} from "react-native";
import SearchBar from "../components/Home/SearchBar";
import Categories from "./../components/Home/Categories";
import Maps from "./../components/Home/Maps";
import Specials from "./../components/Home/Specials";

// ? Can have multple components, maybe a search bar at top

const Home = () => {
    return (
        <SafeAreaView
            nestedScrollEnabled={true}
            className="bg-bg-dark text-slate-300"
        >
            <StatusBar barStyle="light-content" />
            <SearchBar />
            <Categories />
            <ScrollView className="w-full h-full bg-bg-dark text-white">
                <Specials />
                <Maps />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
