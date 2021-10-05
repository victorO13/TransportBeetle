import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//css
import css from '../style/Style_login';
// colors
import colors from '../style/colors/Colors';
//icons
import { Foundation } from '@expo/vector-icons';

export default function Login({ navigation, route }) {

    const [display, setDisplay] = useState('none');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(null);
   
    //Envio do formulário de login
    async function sendForm() {
        let response = await fetch('http://10.0.0.157:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        let json = await response.json();
        if (json === 'error') {
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 5000);
        } else {
           await AsyncStorage.setItem('userData', JSON.stringify(json));
           setEmail(null);
           setPassword(null);
            navigation.navigate('Menu');
        }
    }

    
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={css.container}>
            <View style={css.login__logomarca}>
                <Image style={css.login__logomarca} source={require('../../assets/logo1.png')} />
            </View>
            <View>
                <Text style={css.login__msg(display)}>
                    <Foundation name="alert" size={20} color={colors.alert} /> Username or password is invalid!
                </Text>
            </View>

            {route.params == "success" && 
            <View>
                <Text style={css.login__msg2('flex')}>
                    <Foundation name="check" size={25} color={colors.success} /> registration performed successfully!
                </Text>
            </View>}

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='E-mail:' value={email} placeholderTextColor={colors.colorText} onChangeText={text => setEmail(text)} />
                <TextInput style={css.login__input} placeholder='password:' value={password} placeholderTextColor={colors.colorText} onChangeText={text => setPassword(text)} secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={() => sendForm()}>
                    <Text style={css.login__buttonText}>sing in</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={css.cadastro__button} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={css.cadastro__buttonText}> Create an account</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}