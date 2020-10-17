import React,{useState}from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';



function homeScreen({ navigation }) {
    const [Country, setCountry] = useState('')
    return (
        <>
            <TextInput
                placeholder={"Enter Country"}
                 style={{borderWidth:1,margin:5,alignContent:"center"}}
                onChangeText={value => setCountry(value)}
            >

            </TextInput>
            <Button title="Submit" onPress={() => navigation.navigate('details',{ CountryName: Country })}
           ></Button>
        </>
    );

}






export default homeScreen;