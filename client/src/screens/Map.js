import { Text, View } from "react-native";
import MapViewer from "../components/Map/MapViewer";

// ? Have an interactive map where user can filter through all different types of places they want to see on the interactive google maps
// ? Could filter by distance, type, price range, date

// https://github.com/m-wrzr/populartime

const Map = ({navigation}) => {
    return (
        <View>
            <MapViewer navigation={navigation} />
        </View>
    );
};

export default Map;
