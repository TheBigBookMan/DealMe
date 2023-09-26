import MapView, { Marker } from "react-native-maps";

// TODO need to make it so the lattitude and longitude initialRegion for the MapViewer is the users phone geolocations
// TODO could probably have the phone indicator move with the user as they move becase they would be walking to the location???

const MapViewer = () => {
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
            <Marker
                coordinate={{
                    latitude: -34.9236189,
                    longitude: 138.6313699,
                }}
                title="Current user"
                description="Where you currently are"
            />
        </MapView>
    );
};

export default MapViewer;
