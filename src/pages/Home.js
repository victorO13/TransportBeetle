import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import config from '../config/index.json';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import AsyncStorage from '@react-native-async-storage/async-storage';
//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

//componentes
import Logout from '../components/Logout';

//estilo 
import css from '../style/Style'

//color
import colors from '../style/colors/Colors';



export default function Home({ route, navigation }) {

  const [user, setUser] = useState(null);
  const mapEl = useRef(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(null);
  const [address, setAddress] = useState(null);
  const [name, setName] = useState(null);



  async function LoadLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
    console.log(location);
    setOrigin({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.000922,
      longitudeDelta: 0.000421
    });
  }
  async function LoadUser() {
    let response = await AsyncStorage.getItem('userData');
    let json = JSON.parse(response);
    setUser(json);
    //setName(user.name);
  }


  useEffect(() => {
    if (origin == null) { LoadLocation(); }
    setTimeout(() => {
      LoadUser();
    }, 5000);

  }, [user]);

  function Checkout() {
    setDistance(null);
    setAddress('');
    navigation.navigate('Checkout', { price: price.toFixed(2), address: address, name: user.name, email: user.email })
  }

  return (
    <View style={[css.container, css.containerTop]}>
      <Logout title="Map" navigation={navigation} />
      <MapView
        style={css.mapa}
        initialRegion={origin}
        showsUserLocation={true}
        loadingEnabled={true}
        // zoomEnabled={false}
        ref={mapEl}
      >
        {destination &&
          <MapViewDirections
            lineDashPattern={[0]}
            origin={origin}
            destination={destination}
            apikey={config.googleApi}
            strokeWidth={3}
            onReady={result => {
              console.log(result);
              setDistance(result.distance);
              setPrice(result.distance * 0.50);
              mapEl.current.fitToCoordinates(
                result.coordinates, {
                edgePadding: {
                  top: 50,
                  bottom: 50,
                  left: 50,
                  right: 50
                }
              }
              );
            }
            }
          />}
      </MapView>

      <View style={css.pesquisar}>
        <GooglePlacesAutocomplete
          placeholder='where are we going?'
          placeholderTextColor={colors.secondary}
          onPress={(data, details = null) => {
            setAddress(data.description);
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421
            });
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{
            listView: { backgroundColor: colors.secondary, zIndex: 10 },
            container: { position: 'absolute', width: '100%' }
          }}
        />
        {user && <Text style={css.txt}>
          <FontAwesome name="map-marker" size={24} color={colors.colorText} /> Welcome {user.name}!
        </Text>}
        {distance &&
          <View style={css.distance}>
            <Text style={css.distance_text}>
              <MaterialCommunityIcons name="map-marker-distance" size={30} color={colors.colorText} /> Distance: {distance.toFixed(2).replace('.', ',')}KM
            </Text>
            <TouchableOpacity style={css.price} onPress={() => Checkout()}>
              <Text style={css.price_text}>
                <MaterialIcons name="payment" size={30} color={colors.secondary} />
                Pay R${price.toFixed(2).replace('.', ',')}
              </Text>
            </TouchableOpacity>
          </View>
        }

      </View>
    </View>
  );
}


