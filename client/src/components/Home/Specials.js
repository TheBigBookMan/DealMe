import { FlatList, Text, View, Image, Pressable, Alert } from "react-native";
import parmi from "../../images/parmi.png";
import cocktail from "../../images/cocktail.png";

// ? Maybe a "special offers" section where companies can pay us to promote even more on the homepage
// ? What's on tonight section?????

const specialshard = [
    {
        venue: "Torrens Arms",
        special: "2 for 1 Parmis",
        time: "6-10pm",
        location: "Mitcham, 5062, Adelaide",
        img: parmi,
    },
    {
        venue: "Marion Hoten",
        special: "$10 pints",
        time: "8-10pm",
        location: "Marion, 5362, Adelaide",
        img: parmi,
    },
    {
        venue: "The Bar",
        special: "Free cocktails",
        time: "6-7pm",
        location: "Norwood, 5060, Adelaide",
        img: cocktail,
    },
];

const ListItem = ({ data }) => {
    const goToDeal = (deal) => {
        Alert.alert(deal);
    };

    return (
        <View className="flex-row justify-between h-[140px]  py-4 border-b">
            <View className="flex flex-col">
                <Text className="font-bold">{data.venue}</Text>
                <Text className="text-red-400">{data.special}</Text>
                <Text className="">{data.location}</Text>
                <Text>{data.time}</Text>
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

const Specials = () => {
    return (
        <View className="p-4 border-2 border-orange-400 bg-slate-100 rounded-xl flex flex-col">
            <Text className="font-bold text-xl">What's Hot Tonight?</Text>
            <FlatList
                data={specialshard}
                renderItem={({ item }) => <ListItem data={item} />}
            />
        </View>
    );
};

export default Specials;
