import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
// import { businesses } from "../../utils/businesses";

const Description = ({ data, navigation }) => {
    const businessId = data.id;

    return (
        <TouchableOpacity
            key={data.name}
            onPress={() => navigation.navigate("Businesses", { businessId })}
        >
            <View className="flex flex-col w-full border border-red-500 p-4 rounded-xl">
                <Text className="text-red-500 text-xl">{data.name}</Text>
                <Text className="text-slate-200">{data.location}</Text>
                <Text className="text-slate-200">
                    , {data.openTime}-{data.closeTime}
                </Text>
                <View className="flex flex-row gap-1">
                    {data.categories &&
                        data.categories.map((cat, idx) => (
                            <Text key={cat + idx} className="text-slate-200">
                                {cat}
                                {idx === data.categories.length - 1 ? "" : ","}
                            </Text>
                        ))}
                </View>
            </View>
        </TouchableOpacity>
    );
};

// TODO make the list.item gaps smaller as they are too far--- need to check react native paper for that

const BusinessList = ({ navigation, businesses }) => {
    return (
        <ScrollView className="flex flex-col overflow-y-auto">
            {businesses.map((business) => (
                <List.Item
                    style={{ marginVertical: 0, paddingVertical: 0 }}
                    key={business.name}
                    description={() => (
                        <Description navigation={navigation} data={business} />
                    )}
                />
            ))}
        </ScrollView>
    );
};

export default BusinessList;
