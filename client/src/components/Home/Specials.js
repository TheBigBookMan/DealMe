import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import { specialshard } from "../../utils/deals";

// ? Maybe a "special offers" section where companies can pay us to promote even more on the homepage
// ? What's on tonight section?????

const Description = ({ data, navigation }) => {
    const { businessId } = data;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Businesses", { businessId })}
        >
            <View>
                <Text className="text-slate-200">{data.venue}</Text>
                <Text className="text-slate-200 text-sm">{data.location}</Text>
                <Text className="text-slate-200 text-sm">{data.time}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Specials = ({ navigation }) => {
    return (
        <View className=" h-[400px] bg-gray-800 p-2">
            <Text className="font-bold text-2xl text-red-500">Specials</Text>
            <ScrollView className="flex flex-col overflow-y-auto">
                {specialshard.map((deal) => (
                    <List.Item
                        title={deal.special}
                        description={() => (
                            <Description navigation={navigation} data={deal} />
                        )}
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

export default Specials;
