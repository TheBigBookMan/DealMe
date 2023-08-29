import * as React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider, MD3DarkTheme, MD2DarkTheme } from "react-native-paper";
import { name as appName } from "./app.json";
import App from "./src/App";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function Main() {
    const theme = {
        ...MD2DarkTheme,
        colors: {
            ...MD2DarkTheme.colors,
        },
    };

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
