import { StyleSheet } from 'react-native';

//colors
import colors from './colors/Colors'

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundView,
    justifyContent: 'center',
  },
  containerTop: {
    justifyContent: "flex-start"
  },
  mapa: {
    height: '60%',

  },
  pesquisar: {
    height: '40%',

  },
  txt: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.colorText,
    marginTop: 70,
    marginLeft: 10
  },
  distance: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 85
  },
  distance_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.colorText
  },
  price: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    padding: 7,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  price_text: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20
  },
  //Checkout
  checkoutmp: {
    flex: 1,
    marginTop: 30
  },
  //Tracking
  motorista: {
    alignItems: 'center',
    backgroundColor: '#222'
  },
  motorista__image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  motorista__text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.colorText
  },
  inicio: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    padding: 7,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  inicio__text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20
  },
  //menu
  area__tab: {
    backgroundColor: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.backgroundView,
  }

});

export default style;