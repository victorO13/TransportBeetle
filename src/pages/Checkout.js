import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import config from '../config/index.json'
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';


//css
import css from '../style/Style'

export default function Checkout(props) {

    const [url, setUrl] = useState(null);
   
    //mudança de estado de navegação
    async function stateChange(state) {
        console.log(state);
        let url = state.url;
        if (state.canGoBack == true && !url.includes('mercadopago')) {
            if (url.includes("approved")) {
                props.navigation.navigate('Tracking');
            } else {
                props.navigation.navigate('Home');
            }
        }
    }

    useEffect(() => {
        async function sendServer() {
            let response = await fetch(config.urlRoot, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    price: props.route.params.price,
                    address: props.route.params.address,
                    name: props.route.params.name,
                    email: props.route.params.email
                })
            });
            let json = await response.json();
            setUrl(json);
        }
        sendServer();
    }, []);

    return (
        <View style={css.container}>
            {url &&
                <WebView
                    originWhitelist={['*']}
                    source={{ uri: url }}
                    style={css.checkoutmp}
                    startInLoadingState={true}
                    onNavigationStateChange={state => stateChange(state)}
                />
            }

        </View>
    );
}