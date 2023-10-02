import { View, Text, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState, useEffect } from "react";
import Categories from "../components/Home/Categories";
import Specials from "../components/Home/Specials";
import Map from "../components/Home/Map";
import { api } from "../utils/api";

// TODO use react native asyncstorage as the localstorage and could save stuff like favourites without needin to sign in, or have some sort of history

// *** Google maps API- AIzaSyAC8a0LYMYh_-ufu-y7YX5_i6dUoRXM224

const Home = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

    // TODO add in proepr search
    const submitSearch = () => {
        alert(searchQuery);
    };

    // ? This can be triggered by a useeffect and state change that will be the longitue and latitude coorindations from the geolcoation request
    // TODO this can then get the data from BE and filter it to be suburbs that are close by
    const getReverseGeocodingRequest = async () => {
        try {
            const response = await api.post(
                "https://maps.googleapis.com/maps/api/geocode/json?latlng=-34.920288,138.628874&key=AIzaSyAC8a0LYMYh_-ufu-y7YX5_i6dUoRXM224"
            );
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {}, []);

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
            <Categories navigation={navigation} />
            <Specials navigation={navigation} />
            <Map navigation={navigation} />
        </View>
    );
};

export default Home;
