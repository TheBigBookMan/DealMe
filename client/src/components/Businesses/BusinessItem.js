import { View, Text, Pressable, Image, FlatList } from "react-native";

const ListItem = ({ name }) => {
    return <Text className="text-slate-200">{name}, </Text>;
};

const BusinessItem = ({ data }) => {
    return (
        <View className="flex-row justify-between h-[140px]  py-4 ">
            <View className="flex flex-col">
                <View className="flex flex-row items-center gap-2">
                    <Text className="font-bold text-slate-200 text-lg">
                        {data.name}
                    </Text>
                    <Text className="text-sm text-red-500">
                        {data.venueType}
                    </Text>
                </View>
                <Text className="text-sm text-red-400">{data.location}</Text>
                <View className="flex flex-row gap-2">
                    <Text className="text-slate-200">{data.openTime}</Text>
                    <Text className="text-slate-200">{data.closeTime}</Text>
                </View>
                <FlatList
                    horizontal
                    keyExtractor={(item) => item}
                    data={data.categories}
                    renderItem={({ item }) => <ListItem name={item}></ListItem>}
                />
            </View>
        </View>
    );
};

export default BusinessItem;
