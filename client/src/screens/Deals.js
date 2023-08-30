import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";

const Deals = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

    // TODO add in proepr search
    const submitSearch = () => {
        alert(searchQuery);
    };

    return (
        <View>
            <Text className="font-bold text-red-500 p-2 text-3xl">Deals</Text>
            <Searchbar
                onSubmitEditing={submitSearch}
                elevation={1}
                iconColor="red"
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    );
};

export default Deals;
