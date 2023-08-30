import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import BusinessList from "../components/Businesses/BusinessList";
import SelectDropdown from "react-native-select-dropdown";

const businessCategories = [
    "Bar",
    "Pub",
    "Restaurant",
    "NightClub",
    "EventVenue",
    "Festival",
];

const Businesses = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

    // TODO add in proepr search
    const submitSearch = () => {
        alert(searchQuery);
    };

    // TODO fix this up to filter the venue type
    const selectType = (e) => {
        console.log(e);
        alert(e);
    };

    // TODO the color of the text is not adjustable??? need to look closer, the inline css-js 'color' property not working
    return (
        <View className="flex flex-col gap-2 p-1 px-2">
            <Text className="font-bold text-red-500 p-2 text-3xl">
                Businesses
            </Text>
            <Searchbar
                onSubmitEditing={submitSearch}
                elevation={1}
                iconColor="red"
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <SelectDropdown
                data={businessCategories}
                onSelect={(e) => selectType(e)}
                defaultButtonText={"Type"}
                dropdownStyle={{
                    borderBottomEndRadius: "20px",
                    backgroundColor: "black",
                    borderColor: "red",
                }}
                buttonStyle={{
                    borderRadius: "20px",
                    backgroundColor: "black",
                    borderWidth: "2px",
                    color: "red",
                    borderColor: "red",
                }}
                selectedRowStyle={{ backgroundColor: "tomato" }}
            />
            <BusinessList />
        </View>
    );
};

export default Businesses;
