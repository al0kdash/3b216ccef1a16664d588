import React from 'react';
import { View } from 'react-native';




function capitial({ navigation, route }) {
    const { capitailName } = route.params;


    console.log("country name ", CountryName);



    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current? access_key={{c69860258a71124201932630318001d0}}&query =${capitailName}`)
            .then(res => {
                console.log("response================", res);
            }).catch(error => console.log(err))


    }, []);

    return (
        <View>

        </View>

    )
}

export default capitial;