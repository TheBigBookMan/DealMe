import MapView from "react-native-maps";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Text } from "react-native";
import MarkerMaker from "./MarkerMaker";

// TODO need to make it so the lattitude and longitude initialRegion for the MapViewer is the users phone geolocations
// TODO could probably have the phone indicator move with the user as they move becase they would be walking to the location???

// TODO MapViewer initialregion can be the state of the location of the user, ORRR maybe we dont need a constantly updating map for the MVP because we can just have the initial region be gathered from the current location and then other screens can have their filters automatically set to a area based on the coordinates as well

const MapViewer = () => {
    const [businessData, setBusinessData] = useState();

    const getAllBusinesses = async () => {
        try {
            const response = await api.get("/businesses");
            if (response.status === 200) {
                // !!!! testing with just colonist for dev
                const colonise = response.data.filter(
                    (bus) => bus.name === "The Colonist"
                );
                // console.log(colonise);
                // setBusinessData(response.data);
                setBusinessData(colonise);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllBusinesses();
    }, []);

    if (!businessData) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <MapView
                style={{ width: "100%", height: "100%" }}
                provider="google"
                initialRegion={{
                    latitude: -34.9236189,
                    longitude: 138.6313699,
                    latitudeDelta: 0.0422,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                showsCompass={true}
                showsScale={true}
            >
                {businessData.map((business) => (
                    <MarkerMaker key={business.name} data={business} />
                ))}
            </MapView>
        );
    }
};

export default MapViewer;
