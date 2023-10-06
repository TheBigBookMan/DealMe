import { View, Text, TouchableOpacity, Image } from "react-native";
import { Marker } from "react-native-maps";
import { useState } from "react";

// ?? THis is where the markers for each building within radius can be made and then rendered through in a map or something to the MapViewer main component
const MarkerMaker = ({ data }) => {
    // console.log(data);
    const [selectedVenue, setSelectedVenue] = useState();
    const [selected, setSelected] = useState(false);
    const lat = data.latitude;
    const lon = data.longitude;

    // TODO THIS CAN BE DONE properly, need it so when user selects a different location icon it gets rid of the previous selected
    const selectMapIcon = (id) => {
        console.log(id);
        console.log(selectedVenue);
        if (id !== selectedVenue) {
            setSelected(true);
            setSelectedVenue(id);
        } else {
            setSelected(false);
        }
    };

    // return (
    //     <Marker
    //         onPress={() => selectMapIcon(data.id)}
    //         coordinate={{ latitude: lat, longitude: lon }}
    //         title={data.name}
    //         description={`${data.location}- ${data.openTime}-${data.closeTime}`}
    //     />
    // );

    // TODO when a user clicks on the description box then a small modal pops up with the next deal they have and you can click on a link to go to the business page
    const seeVenueInfo = (id) => {
        console.log(id);
    };

    return (
        <Marker
            onPress={() => selectMapIcon(data.id)}
            coordinate={{ latitude: lat, longitude: lon }}
            // icon={marker}
        >
            {!selected ? (
                <Image
                    source={require("../../../assets/marker.png")}
                    style={{ height: 35, width: 35 }}
                />
            ) : (
                <TouchableOpacity
                    onPress={() => seeVenueInfo(data.id)}
                    className="w-[100px] flex flex-col bg-red-500 rounded-xl p-2 text-slate-300"
                >
                    <Text className="text-slate-100 font-bold w-full truncate">
                        {data.name}
                    </Text>
                    <Text className="">{data.location}</Text>
                </TouchableOpacity>
            )}
        </Marker>
    );
};

export default MarkerMaker;
