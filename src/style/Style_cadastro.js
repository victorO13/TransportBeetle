import { StyleSheet } from 'react-native';

//colors
import colors from './colors/Colors'

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundView,
    justifyContent: 'center',
    alignItems: 'center',

  },
  view__logo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: "20%",
    width: "90%",
  },
  cadastro__logomarca: {
    height: "45%",
    width: "25%",
    marginLeft: 45,
  },
  cadastro__txt: {
    width: "80%",
    color: colors.primary,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 20
  },
  cadastro__form: {
    width: "80%",
    height: "80%",
  },
  cadastro__input: {
    backgroundColor: colors.opacity__input,
    color: colors.colorText,
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
    borderRadius: 20,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  cadastro__button: {
    padding: 9,
    backgroundColor: colors.primary,
    alignSelf: "center",
    borderRadius: 20,
    width: "50%",
    alignItems: "center"
  },
  cadastro__buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: colors.backgroundView
  },
});

export default style;