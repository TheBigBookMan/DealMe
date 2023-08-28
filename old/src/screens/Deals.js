import { SafeAreaView, View, Text, StatusBar, FlatList } from "react-native";
import { specialshard } from "../utils/deals";
import DealItem from "../components/Deals/DealItem";

// ? THis will list all the deals and have a search bar with also a categories section where tey can select based on type (food, drink, event), what type of that (food- hamburgers, parmi, chips; drink- beer, wine, spirits; event- dance, theater)
// ? clicking on the deal will take you to the businesses page and then can view it on there

const Deals = () => {
    return (
        <SafeAreaView
            nestedScrollEnabled={true}
            className="bg-bg-dark text-slate-300"
        >
            <StatusBar barStyle="light-content" />
            <View className="w-full h-full bg-bg-dark text-white p-4">
                <Text className="text-red-500 text-2xl font-bold">Deals</Text>
                <FlatList
                    className="w-full h-full overflow-y-auto"
                    data={specialshard}
                    renderItem={({ item }) => <DealItem data={item} />}
                ></FlatList>
            </View>
        </SafeAreaView>
    );
};

export default Deals;
