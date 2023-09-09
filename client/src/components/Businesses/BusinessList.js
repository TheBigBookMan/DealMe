import { View, Text, Image, Pressable, Alert, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { businesses } from "../../utils/businesses";

const Description = ({ data }) => {
    const goToBusiness = (business) => {
        Alert.alert(business);
    };

    return (
        <Pressable key={data.name} onPress={() => goToBusiness(data.name)}>
            <View>
                <Text className="text-slate-200">{data.location}</Text>
                <Text className="text-slate-200">
                    {data.venueType}, {data.openTime}-{data.closeTime}
                </Text>
                <View className="flex flex-row gap-1">
                    {data.categories.map((cat, idx) => (
                        <Text className="text-slate-200">
                            {cat}
                            {idx === data.categories.length - 1 ? "" : ","}
                        </Text>
                    ))}
                </View>
            </View>
        </Pressable>
    );
};

const BusinessList = () => {
    return (
        <ScrollView className="flex flex-col overflow-y-auto">
            {businesses.map((business) => (
                <List.Item
                    key={business.name}
                    title={business.name}
                    description={() => <Description data={business} />}
                />
            ))}
        </ScrollView>
    );
};

export default BusinessList;
