import { View, Text, FlatList, ScrollView } from "react-native";
import { CATEGORIES } from "./categorieslist";

const ListItem = ({ type, icon }) => {
    return (
        <View className="flex flex-col items-center">
            {icon}
            <Text className="w-[80px] text-center">{type}</Text>
        </View>
    );
};

const Categories = () => {
    return (
        // <ScrollView horizontal={true} class="">
        <View className=" h-[60px] ">
            <FlatList
                horizontal
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <ListItem
                        type={item.type}
                        icon={
                            <item.icon
                                name={item.name}
                                size="30"
                                color="tomato"
                            />
                        }
                    />
                )}
            />
        </View>
        // </ScrollView>
    );
};

export default Categories;
