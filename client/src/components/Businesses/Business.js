import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import BusinessData from "./BusinessData";

// TODO retreive the businessId in props and then call backend on page load to get that business info

const Business = ({ businessId, navigation, setAllBusiness }) => {
    const [businessData, setBusinessData] = useState();
    const [type, setType] = useState("deals");

    const fetchBusinessData = async () => {
        try {
            const response = await api.get(`/businesses/${businessId}`);
            if (response.data) {
                setBusinessData(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (businessId) {
            fetchBusinessData();
        }
    }, [businessId]);

    return (
        <View className="flex flex-col gap-1 h-full w-full">
            <TouchableOpacity
                onPress={() => setAllBusiness(true)}
                className="border-red-500 border-2 active:bg-red-500 w-[180px] h-[50px] flex justify-center items-center rounded-lg"
            >
                <Text className="text-white">Back to All Businesses</Text>
            </TouchableOpacity>
            {businessData && (
                <View className="flex flex-col gap-2 p-1">
                    <View className="flex flex-row justify-between">
                        <Text className="font-bold text-3xl text-red-500">
                            {businessData.name}
                        </Text>

                        <View className="flex flex-row gap-4 pr-2">
                            <TouchableOpacity
                                className={`${
                                    type !== "deals"
                                        ? "text-red-500 bg-black "
                                        : "bg-white text-red-500 "
                                } w-[80px] h-[40px] text-2xl flex justify-center items-center rounded border-2  border-red-500
                                `}
                                onPress={() => setType("deals")}
                            >
                                <Text
                                    className={`${
                                        type !== "deals"
                                            ? "text-red-500"
                                            : "text-black"
                                    }`}
                                >
                                    Deals
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className={`${
                                    type !== "events"
                                        ? "text-red-500 bg-black "
                                        : "bg-white text-red-500 "
                                } w-[80px] h-[40px] text-2xl flex justify-center items-center rounded-lg border-2 border-red-500
                                `}
                                onPress={() => setType("events")}
                            >
                                <Text
                                    className={`${
                                        type !== "events"
                                            ? "text-red-500"
                                            : "text-black"
                                    }`}
                                >
                                    Events
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <BusinessData type={type} data={businessData} />
                </View>
            )}
        </View>
    );
};

export default Business;
