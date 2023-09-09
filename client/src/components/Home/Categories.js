import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../../utils/categorieslist";

const ListItem = ({ type, icon, navigation }) => {
    return (
        <TouchableOpacity
            className="flex flex-col items-center"
            onPress={() => navigation.navigate("Deals", { type })}
        >
            {icon}
            <Text className="w-[80px] text-center text-slate-200">{type}</Text>
        </TouchableOpacity>
    );
};

const Categories = ({ navigation }) => {
    return (
        // <ScrollView horizontal={true} class="">
        <View className=" h-[60px] py-1">
            <FlatList
                horizontal
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <ListItem
                        navigation={navigation}
                        type={item.type}
                        icon={
                            <item.icon name={item.name} size="30" color="red" />
                        }
                    />
                )}
            />
        </View>
        // </ScrollView>
    );
};
export default Categories;
