import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import DealsList from "../components/Deals/DealsList";
import SelectDropdown from "react-native-select-dropdown";

const dealCategories = [
    "Food",
    "Drinks",
    "Hot",
    "Events",
    "Combos",
    "Discount",
    "Specials",
    "Clearings",
];

const locationdata = [
    "Adelaide",
    "Mitcham",
    "Unley",
    "Marion",
    "Warradale",
    "Victor Harbor",
    "Port Elliot",
    "Glenelg",
    "Norwood",
];

const Deals = ({ route, navigation }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);
    const [searchType, setSearchType] = useState();

    // TODO add in proepr search
    const submitSearch = () => {
        alert(searchQuery);
    };

    // TODO fix this up to filter the venue type
    const selectType = (e) => {
        console.log(e);
        alert(e);
    };

    // TODO fix this up to filter the venue location
    const selectLocation = (e) => {
        console.log(e);
        alert(e);
    };

    useEffect(() => {
        if (route.params) {
            const { type } = route.params;
            setSearchType(type);
        }
    }, [route]);

    return (
        <View className="flex flex-col gap-2 p-1 px-2">
            <Text className="font-bold text-red-500 p-2 text-3xl">Deals</Text>
            <Searchbar
                onSubmitEditing={submitSearch}
                elevation={1}
                iconColor="red"
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <View className="flex flex-row mb-2">
                <SelectDropdown
                    data={dealCategories}
                    onSelect={(e) => selectType(e)}
                    defaultButtonText={"Type"}
                    rowTextStyle={{ color: "white" }}
                    dropdownStyle={{
                        borderBottomEndRadius: "20px",
                        borderBottomColor: "red",
                        backgroundColor: "black",
                        borderColor: "red",
                        color: "red",
                    }}
                    buttonStyle={{
                        borderRadius: "20px",
                        backgroundColor: "black",
                        borderWidth: "2px",
                        color: "red",
                        borderColor: "red",
                        width: "50%",
                    }}
                    selectedRowStyle={{ backgroundColor: "red" }}
                    buttonTextStyle={{ color: "white" }}
                />
                <SelectDropdown
                    data={locationdata}
                    onSelect={(e) => selectLocation(e)}
                    defaultButtonText={"Location"}
                    rowTextStyle={{ color: "white" }}
                    dropdownStyle={{
                        borderBottomEndRadius: "20px",
                        borderBottomColor: "red",
                        backgroundColor: "black",
                        borderColor: "red",
                        color: "red",
                    }}
                    buttonStyle={{
                        borderRadius: "20px",
                        backgroundColor: "black",
                        borderWidth: "2px",
                        color: "red",
                        borderColor: "red",
                        width: "50%",
                    }}
                    selectedRowStyle={{ backgroundColor: "red" }}
                    buttonTextStyle={{ color: "white" }}
                />
            </View>
            <DealsList navigation={navigation} />
        </View>
    );
};

export default Deals;
