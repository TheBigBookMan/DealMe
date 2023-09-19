import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

// TODO retreive the businessId in props and then call backend on page load to get that business info

const Business = ({ businessId, navigation, setAllBusiness }) => {
    console.log(businessId);
    return (
        <View className="flex flex-col h-full w-full">
            <TouchableOpacity
                onPress={() => setAllBusiness(true)}
                className="border-red-500 border-2 active:bg-red-500 w-[180px] h-[50px] flex justify-center items-center rounded-lg"
            >
                <Text className="text-white">Back to All Businesses</Text>
            </TouchableOpacity>
            <Text className="text-white font-bold">{businessId}</Text>
        </View>
    );
};

export default Business;
