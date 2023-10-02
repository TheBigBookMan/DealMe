import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../utils/api";

const LocationContext = createContext();

// *** Google maps API- AIzaSyAC8a0LYMYh_-ufu-y7YX5_i6dUoRXM224

export const LocationProvider = ({ children }) => {
    const [coordinates, setCoordinates] = useState({
        latitude: "",
        longitude: "",
    });

    // TODO maybe have the google api in here called for gelocation on app load
    // TODO the coordinates are a little bit too far off and this may cause a bit of a problem, need to get it a little closer atleast same street would be good, its around same suburb but few streets away
    const getGeoLocationOfUser = async () => {
        try {
            const response = await api.post(
                "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAC8a0LYMYh_-ufu-y7YX5_i6dUoRXM224"
            );
            if (response.status === 200) {
                const { lat, lng } = response.data.location;
                console.log(response.data);
                setCoordinates({ latitude: lat, longitude: lng });
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getGeoLocationOfUser();
    }, []);

    return (
        <LocationContext.Provider value={{ coordinates }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error("useLocation must be used within a LocationProvider");
    }
    return context;
};
