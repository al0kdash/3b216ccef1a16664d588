import React, { useState, useEffect } from 'react';
import { FlatList, Button, View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';





function details({ navigation, route }) {
    const { CountryName } = route.params;
    const [datasource, setdatasource] = useState([])
    const [datacapitial, setdatadatacapitial] = useState([])

    console.log("country name ", CountryName);



    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/name/${CountryName}`)
            .then(res => {
                console.log("response================", res);
                setdatasource(res.data)
                // setdatadatacapitial(res.data.capital)
            }).catch(error => console.log(err))


    }, []);

    return (
        <>
            <FlatList
                data={datasource}
                renderItem={renderData}
            >

            </FlatList>
            <Button title="Capital Weather" onPress={capitialweather}  ></Button>
        </>
    )

}


const renderData = ({ item }) => {


    return (
        <View style={{ alignContent: "center" }}>


            <Text>{item.capital}</Text>
            <Text>{item.population}</Text>
            <Text>{item.latlng}</Text>
            <Image source={{ uri: `${item.flag}` }}
                style={{ width: 150, height: 150 }} />


        </View>

    )
}


function capitialweather(){

    // axios.get(`http://api.weatherstack.com/current?access_key=c69860258a71124201932630318001d0&query=${datacapitial}`)
    //         .then(res => {
    //             console.log("Capitail weather response================", res);
    //         }).catch(error => console.log(err))
}


const styles = StyleSheet.create({

})

export default details;