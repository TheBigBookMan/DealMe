import { SafeAreaView, View, Text, StatusBar, FlatList } from "react-native";
import BusinessItem from "../components/Businesses/BusinessItem";
import { businesses } from "../utils/businesses";

// ? This will just list all the businesses

const Businesses = () => {
    return (
        <SafeAreaView
            nestedScrollEnabled={true}
            className="bg-bg-dark text-slate-300"
        >
            <StatusBar barStyle="light-content" />
            <View className="w-full h-full bg-bg-dark text-white p-4">
                <Text className="text-red-500 text-2xl font-bold">
                    Businesses
                </Text>
                <Text className="text-slate-400">
                    Select a Business to view more...
                </Text>
                <FlatList
                    className="w-full h-full overflow-y-auto"
                    data={businesses}
                    renderItem={({ item }) => <BusinessItem data={item} />}
                ></FlatList>
            </View>
        </SafeAreaView>
    );
};

export default Businesses;
