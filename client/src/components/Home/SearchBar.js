import { View, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const SearchBar = () => {
    const [searchItem, setSearchItem] = useState("");

    const search = () => {
        console.log(searchItem);
    };

    return (
        <View className="flex flex-row gap-4 p-4 px-8 bg-bg-dark">
            <FontAwesome name="search" size={30} color="red" />
            <TextInput
                onSubmitEditing={search}
                returnKeyType="search"
                className="border w-5/6 rounded-xl pl-4 bg-slate-300 text-gray-800"
                placeholder="Search..."
                onChangeText={setSearchItem}
                value={searchItem}
            ></TextInput>
        </View>
    );
};

export default SearchBar;
