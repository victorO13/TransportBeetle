import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//colors
import colors from '../style/colors/Colors';
//css
import css from '../style/Style_cadastro';

export default function Cadastro({navigation, route}) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setUser(json);
            setName(json.name);
            setEmail(json.email);
            setPhone(json.phone);
            setPassword(json.password);
            setId(json.id);
        }
        getUser();
    }, []);

    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);

    //Envio do formulário de login
    async function sendForm() {
        let response = await fetch('http://10.0.0.157:3000/update', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
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
            AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('Menu');
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={css.container}>
            <View style={css.view__logo}>
                <Image style={css.cadastro__logomarca} source={require('../../assets/logo3.png')} />
                <Text style={css.cadastro__txt}>Edit Data</Text>
            </View>
            
            {user && <View style={css.cadastro__form}>
                <TextInput style={[css.cadastro__input]} value={name} placeholderTextColor={colors.colorText}  onChangeText={text => setName(text)}/>
                <TextInput style={css.cadastro__input} value={phone} placeholderTextColor={colors.colorText} onChangeText={text => setPhone(text)}/>
                <TextInput style={css.cadastro__input} value={email} placeholderTextColor={colors.colorText} onChangeText={text => setEmail(text)}/>
                <TextInput style={css.cadastro__input} value={password} placeholderTextColor={colors.colorText} onChangeText={text => setPassword(text)} secureTextEntry={true} />
                <TouchableOpacity style={css.cadastro__button} onPress={()=>sendForm()}>
                    <Text style={css.cadastro__buttonText}>Save</Text>
                </TouchableOpacity>
            </View>}
        </KeyboardAvoidingView>
    );
}