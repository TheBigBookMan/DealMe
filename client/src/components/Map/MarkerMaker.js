import { View } from "react-native";
import { Marker } from "react-native-maps";

// ?? THis is where the markers for each building within radius can be made and then rendered through in a map or something to the MapViewer main component
const MarkerMaker = ({ data }) => {
    console.log(data);
    const lat = data.latitude;
    const lon = data.longitude;

    return (
        <Marker
            coordinate={{ latitude: lat, longitude: lon }}
            title={data.name}
            description={data.location}
        />
    );
};

export default MarkerMaker;
