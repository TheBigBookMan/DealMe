import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../../utils/categorieslist";

const ListItem = ({ type, icon }) => {
    return (
        <View className="flex flex-col items-center">
            {icon}
            <Text className="w-[80px] text-center text-slate-200">{type}</Text>
        </View>
    );
};

const Categories = () => {
    return (
        // <ScrollView horizontal={true} class="">
        <View className=" h-[60px] py-1">
            <FlatList
                horizontal
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <ListItem
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
