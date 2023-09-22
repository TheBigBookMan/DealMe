import { ScrollView, View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import { List } from "react-native-paper";
import IMG from "../../images/parmi.png";

const Description = ({ data }) => {
    const { date, description, startTime, endTime, id, price, title } = data;

    return (
        <View
            key={id}
            className="h-[160px] flex flex-row gap-2 items-center w-full border-2 border-red-500 rounded-xl"
        >
            <Image source={IMG} className="w-[100px] h-[80px] rounded-xl" />
            <View className="flex flex-col">
                <Text className="text-red-500 text-lg">{title}</Text>
                <Text className="text-slate-300">{date}</Text>
                <Text className="text-slate-200 text-sm w-[240px] ">
                    {description}
                </Text>
                <Text className="text-slate-200 text-sm">${price}</Text>
                <View className="flex flex-row gap-2">
                    <Text className="text-slate-200 text-sm">{startTime}</Text>
                    <Text className="text-slate-200 text-sm">{endTime}</Text>
                </View>
            </View>
        </View>
    );
};

const BusinessData = ({ type, data }) => {
    const [typeDealData, setTypeDealData] = useState();

    useEffect(() => {
        if (data && type === "events") {
            setTypeDealData(data.events);
        } else if (data && type === "deals") {
            setTypeDealData(data.deals);
        }
    }, [data, type]);

    return (
        <ScrollView className="flex flex-col overflow-y-auto h-full w-full">
            {typeDealData &&
                typeDealData.map((typeDeal) => (
                    <List.Item
                        style={{ marginVertical: 0, paddingVertical: 0 }}
                        key={typeDeal.id}
                        description={() => <Description data={typeDeal} />}
                    />
                ))}
        </ScrollView>
    );
};

export default BusinessData;
