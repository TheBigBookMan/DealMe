import { View, Text, Image, Pressable, Alert, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { specialshard } from "../../utils/deals";

const Description = ({ data }) => {
    const goToDeal = (deal) => {
        Alert.alert(deal);
    };

    return (
        <Pressable key={data.venue} onPress={() => goToDeal(data.venue)}>
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
        <ScrollView className="flex flex-col overflow-y-auto bg-gray-800 p-2">
            {specialshard.map((deal) => (
                <List.Item
                    key={deal.venue}
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
    );
};

export default DealsList;
