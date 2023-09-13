import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import AllBusinesses from "../components/Businesses/AllBusinesses";
import Business from "../components/Businesses/Business";

const Businesses = ({ route, navigation }) => {
    const [allBusiness, setAllBusiness] = useState(true);
    const [businessIdToView, setBusinessIdToView] = useState();

    const checkRoute = () => {
        const { businessId } = route.params;
        if (businessId) {
            console.log(businessId);
            setBusinessIdToView(businessId);
            setAllBusiness(false);
        }
    };

    useEffect(() => {
        if (route.params) {
            checkRoute();
        }
    }, [route]);

    return (
        <View className="flex flex-col p-1 px-2">
            <Text className="font-bold text-red-500 p-2 text-3xl">
                Businesses
            </Text>
            {allBusiness ? (
                <AllBusinesses navigation={navigation} />
            ) : (
                <Business
                    navigation={navigation}
                    businessId={businessIdToView}
                    setAllBusiness={setAllBusiness}
                />
            )}
        </View>
    );
};

export default Businesses;
