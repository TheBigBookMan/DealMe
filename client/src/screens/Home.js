import { View, Text, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import Categories from "../components/Home/Categories";
import Specials from "../components/Home/Specials";
import Map from "../components/Home/Map";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

    // TODO add in proepr search
    const submitSearch = () => {
        alert(searchQuery);
    };

    return (
        <View className="flex flex-col gap-1 p-1">
            <Text className="font-bold text-red-500 p-2 text-3xl">
                DealMe🔥
            </Text>
            <Searchbar
                onSubmitEditing={submitSearch}
                elevation={1}
                iconColor="red"
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Categories />
            <Specials />
            <Map />
        </View>
    );
};

export default Home;
