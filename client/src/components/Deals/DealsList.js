import { View, Text, Image, Pressable, Alert, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { specialshard } from "../../utils/deals";

const Description = ({ data }) => {
    const goToDeal = (deal) => {
        Alert.alert(deal);
    };
    return (
        <Pressable onPress={() => goToDeal(data.venue)}>
            <View>
                <Text className="text-slate-200">{data.venue}</Text>
                <Text className="text-slate-200 text-sm">{data.location}</Text>
                <Text className="text-slate-200 text-sm">{data.time}</Text>
            </View>
        </Pressable>
    );
};

const DealsList = () => {
    return (
        <View className="  bg-gray-800 p-2">
            <ScrollView className="flex flex-col overflow-y-auto">
                {specialshard.map((deal) => (
                    <List.Item
                        title={deal.special}
                        description={() => <Description data={deal} />}
                        left={(props) => (
                            <Image
                                source={deal.img}
                                className="w-[100px] h-[80px] rounded-xl"
                            />
                        )}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default DealsList;
