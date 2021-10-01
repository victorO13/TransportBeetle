import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//colors
import colors from '../style/colors/Colors';
//css
import css from '../style/Style_cadastro';

export default function Cadastro({navigation, route}) {

    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);

    //Envio do formulário de login
    async function sendForm() {
        let response = await fetch('http://10.0.0.157:3000/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: password,
                phone: phone,
                email: email
            })
        });
        let json = await response.json();
        if (json === 'error') {
            console.log('error');
        } else {
            let success = "success";
            navigation.navigate('Login',success);
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={css.container}>
            <View style={css.view__logo}>
                <Image style={css.cadastro__logomarca} source={require('../../assets/logo3.png')} />
                <Text style={css.cadastro__txt}>WELCOME</Text>
            </View>
            
            <View style={css.cadastro__form}>
                <TextInput style={[css.cadastro__input]} placeholder='Name:' placeholderTextColor={colors.colorText}  onChangeText={text => setName(text)}/>
                <TextInput style={css.cadastro__input} placeholder='Phone:' placeholderTextColor={colors.colorText} onChangeText={text => setPhone(text)}/>
                <TextInput style={css.cadastro__input} placeholder='Email:' placeholderTextColor={colors.colorText} onChangeText={text => setEmail(text)}/>
                <TextInput style={css.cadastro__input} placeholder='Password:' placeholderTextColor={colors.colorText} onChangeText={text => setPassword(text)} secureTextEntry={true} />
                <TouchableOpacity style={css.cadastro__button} onPress={()=>sendForm()}>
                    <Text style={css.cadastro__buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}