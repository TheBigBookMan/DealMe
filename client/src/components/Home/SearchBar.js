import { View, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const SearchBar = () => {
    const [searchItem, setSearchItem] = useState("");

    const search = () => {
        console.log(searchItem);
    };

    return (
        <View className="flex flex-row gap-4 p-4 px-8">
            <FontAwesome name="search" size={30} color="tomato" />
            <TextInput
                onSubmitEditing={search}
                returnKeyType="search"
                className="border w-5/6 rounded-xl pl-4"
                placeholder="Search for Deals"
                onChangeText={setSearchItem}
                value={searchItem}
            ></TextInput>
        </View>
    );
};

export default SearchBar;
