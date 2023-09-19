import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";

// TODO retreive the businessId in props and then call backend on page load to get that business info

const Business = ({ businessId, navigation, setAllBusiness }) => {
    const [businessData, setBusinessData] = useState();
    const [type, setType] = useState("deals");

    const fetchBusinessData = async () => {
        try {
            const response = await api.get(`/businesses/${businessId}`);
            console.log(response.data);
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
                                className=""
                                onPress={() => setType("deals")}
                            >
                                <Text
                                    className={`${
                                        type !== "deals"
                                            ? "text-white bg-black "
                                            : "bg-white text-red-500 "
                                    } w-[80px] h-[40px] text-2xl text-center rounded border-2  border-red-500
                                    `}
                                >
                                    Deals
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className=""
                                onPress={() => setType("events")}
                            >
                                <Text
                                    className={`${
                                        type !== "events"
                                            ? "text-white bg-black "
                                            : "bg-white text-red-500 "
                                    } w-[80px] h-[40px] text-2xl text-center rounded-lg border-2 border-red-500
                                    `}
                                >
                                    Events
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

export default Business;
