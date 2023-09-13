import {
    View,
    Text,
    Image,
    Pressable,
    Alert,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { List } from "react-native-paper";
import { specialshard } from "../../utils/deals";

const Description = ({ data, navigation }) => {
    const { businessId } = data;

    return (
        <TouchableOpacity
            key={data.venue}
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

const DealsList = ({ navigation }) => {
    return (
        <ScrollView className="flex flex-col overflow-y-auto bg-gray-800 p-2">
            {specialshard.map((deal) => (
                <List.Item
                    key={deal.venue}
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
    );
};

export default DealsList;
