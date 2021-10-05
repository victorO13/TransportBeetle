import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//componente
import Logout from '../components/Logout';
//icon
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//css
import css from '../style/Style';
import css__logout from '../style/Style_logout'
import css__perfil from '../style/Style_perfil'
//colors
import colors from '../style/colors/Colors';

export default function Profile({ navigation }) {

    const [user, setUser] = useState(null);

    async function LoadUser() {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUser(json);
      }
    
    
      useEffect(() => {
          LoadUser();
      }, [user]);

    return (
        <View style={[css.container, css__logout.containerTop]}>
            <Logout icon='edit' title='Profile' navigation={navigation} />

            {user &&
                <View style={css__perfil.view}>
                    <Text style={css__perfil.txt}>Name:</Text>
                    <Text style={css__perfil.input}>
                        <FontAwesome name="user" size={20} color={colors.primary} /> {user.name}
                    </Text>
                    <Text style={css__perfil.txt}>Phone:</Text>
                    <Text style={css__perfil.input}>
                        <FontAwesome name="phone" size={20} color={colors.primary} /> {user.phone}
                    </Text>
                    <Text style={css__perfil.txt}>E-mail:</Text>
                    <Text style={css__perfil.input}>
                        <MaterialIcons name="email" size={20} color={colors.primary} /> {user.email}
                    </Text>
                </View>}


        </View>
    );
}