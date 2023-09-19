import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import BusinessList from "./BusinessList";
import SelectDropdown from "react-native-select-dropdown";
import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import axios from "axios";

const businessCategories = [
    "Bar",
    "Pub",
    "Restaurant",
    "NightClub",
    "EventVenue",
    "Festival",
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

const AllBusinesses = ({ navigation }) => {
    const [businesses, setBusinesses] = useState();
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

    // TODO fix this up to filter the venue location
    const selectLocation = (e) => {
        console.log(e);
        alert(e);
    };

    const handleAllBusinessesFetch = async () => {
        try {
            const response = await api.get("/businesses");

            if (response.data) {
                // console.log(response.data);
                setBusinesses(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleAllBusinessesFetch();
    }, []);

    // TODO the color of the text is not adjustable??? need to look closer, the inline css-js 'color' property not working
    return (
        <View className="flex flex-col gap-2 px-2">
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
                    data={businessCategories}
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
            {businesses && (
                <BusinessList navigation={navigation} businesses={businesses} />
            )}
        </View>
    );
};

export default AllBusinesses;
