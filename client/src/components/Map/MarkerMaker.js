import { View, Text, TouchableOpacity, Image } from "react-native";
import { Marker } from "react-native-maps";
import { useEffect, useState } from "react";

// ?? THis is where the markers for each building within radius can be made and then rendered through in a map or something to the MapViewer main component
const MarkerMaker = ({ data }) => {
    // console.log(data);
    const [selectedVenue, setSelectedVenue] = useState();
    const [selected, setSelected] = useState(false);
    const [latestDeal, setLatestDeal] = useState();
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

    // TODO this will sort through that businesses deals and find th soonest so it can put that deal on the marker as the closest one to the date (could be for that night) and clicking on it will redirect the user to that businesses page to see more info about deals
    const sortLatestDeal = () => {
        if (data.deals.length === 0) {
            return;
        } else if (data.deals.length === 1) {
            setLatestDeal(data.deals[0]);
        } else {
            // TODO
            // TODO THIS IS BROKEN and doesnt properly return the latest deal, just leaving while in dev doing styling, needs FIXING
            // !!!!!!!
            const currentDate = new Date();
            let closestDateObject = null;
            let closestDateDifference = Number.MAX_SAFE_INTEGER;

            data.deals.forEach((obj) => {
                const objDate = new Date(obj.date);

                const timeDifference = Math.abs(currentDate - objDate);

                if (closestDateObject === null) closestDateObject = obj;

                if (timeDifference < closestDateDifference) {
                    closestDateObject = obj;
                    closestDateDifference = timeDifference;
                }
            });
            console.log(closestDateObject);
            setLatestDeal(closestDateObject);
        }
    };

    useEffect(() => {
        sortLatestDeal();
    }, [data]);

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
                    className="w-[200px] flex flex-col bg-red-500 rounded-xl  text-slate-300"
                >
                    {latestDeal && (
                        <View className="bg-red-400 w-full h-[180px] text-white rounded-lg flex flex-col p-2">
                            <Text className="text-lg font-bold ">
                                Closest Deal:
                            </Text>
                            <Text className="text-white font-bold">
                                {latestDeal.title}
                            </Text>
                            <Text className="text-white">
                                {latestDeal.date}
                            </Text>
                            <Text className="text-white">
                                {latestDeal.startTime}-{latestDeal.endTime}
                            </Text>
                            <Text className="text-white">
                                {latestDeal.description}
                            </Text>
                        </View>
                    )}

                    <View className="p-2 flex flex-col">
                        <Text className="text-slate-100 font-bold w-full truncate">
                            {data.name}
                        </Text>
                        <Text className="">{data.location}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </Marker>
    );
};

export default MarkerMaker;
