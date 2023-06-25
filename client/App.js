import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function App() {
    const [colorIcon, setColorIcon] = useState("green");

    const changeColor = (color) => {
        if (color === "green") {
            setColorIcon("blue");
        } else {
            setColorIcon("green");
        }
    };

    return (
        <SafeAreaView>
            <View className="h-full flex justify-center items-center">
                <Text className="font-bold bg-blue-400 text-xl">
                    OHey there baby!
                </Text>
                <Text className="text-green-300 font-bold">LETSSS GOOOD</Text>
                <Ionicons
                    name="md-checkmark-circle"
                    size={100}
                    color={colorIcon}
                    onPress={() => changeColor(colorIcon)}
                />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}
