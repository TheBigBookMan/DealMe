import { View, Text, Pressable, Image } from "react-native";

const DealItem = ({ data }) => {
    return (
        <View className="flex-row justify-between h-[140px]  py-4 ">
            <View className="flex flex-col">
                <Text className="font-bold text-slate-200 text-lg">
                    {data.venue}
                </Text>
                <Text className="text-red-400">{data.special}</Text>
                <Text className="text-white">{data.location}</Text>
                <Text className="text-white">{data.time}</Text>
                <Pressable
                    onPress={() => goToDeal(data.venue)}
                    className="bg-slate-200 flex justify-center items-center rounded-xl w-[120px] h-[40px]"
                >
                    <Text className="text-blue-500 font-bold">See Map</Text>
                </Pressable>
            </View>
            <Image
                source={data.img}
                className="w-[100px] h-[100px] rounded-xl"
            />
        </View>
    );
};

export default DealItem;
