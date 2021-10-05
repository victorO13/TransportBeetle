import React, { useState, useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Home, Profile } from '../pages/Index';

//icons
import { FontAwesome} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
//css
import css from '../style/Style'
//colors
import colors from '../style/colors/Colors';

export default function Menu(props) {
    const Tab = createMaterialBottomTabNavigator();

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
        <Tab.Navigator
            activeColor= {colors.colorText}
            inactiveColor={colors.backgroundView}
            barStyle={css.area__tab}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    size = 25;

                    if (route.name === 'Map') {
                        iconName = focused ? 'map' : 'map';
                       
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'users' : 'users';
                    }

                    if (iconName == "FontAwesome") {
                        return < FontAwesome name={iconName} size={size} color={color} />;
                    } else {
                        return < Icon name={iconName} size={size} color={color} />;
                    }
                },

            })}
        >
            <Tab.Screen name="Map" component={Home} initialParams={{user}}/>
            <Tab.Screen name="Profile" component={Profile} initialParams={{user}}/>
        </Tab.Navigator>
    );
}