import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

//icon
import Icon from 'react-native-vector-icons/FontAwesome';
//css
import css from "../style/Style_logout";

export default function Logout(props)
{
    async function logout()
    {
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }
    return (
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home2} onPress={()=>props.navigation.navigate('Edit')}>
                <Icon name={props.icon} size={20} color="#f58634" />
            </TouchableOpacity>

            <Text style={css.area__title}>{props.title}</Text>

            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <Icon name="sign-out" size={20} color="#f58634" />
            </TouchableOpacity>
        </View>
    );
}