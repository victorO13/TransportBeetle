import { StyleSheet } from 'react-native';

//colors
import colors from './colors/Colors'

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundView,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  login__logomarca: {
    width: 210,
    height:210,
    alignItems:'center',
    justifyContent:"center",
    
  },
  login__msg: (text = 'none') => ({
    fontWeight: "bold",
    fontSize: 15,
    color:colors.alert,
    marginBottom: 15,
    display: text
  }),
  login__msg2: (text = 'none') => ({
    fontWeight: "bold",
    fontSize: 20,
    color: colors.success,
    marginBottom: 15,
    display: text
  }),
  login__form: {
    width: "85%",
    height:"15%"
  },
  login__input: {
    backgroundColor: colors.opacity__input,
    color:colors.colorText,
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
    borderRadius:20,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  login__button: {
    padding: 9,
    backgroundColor: colors.primary,
    alignSelf: "center",
    borderRadius: 20,
    width:"50%",
    alignItems:"center"
  },
  login__buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: colors.backgroundView
  },
  cadastro__button: {
    alignSelf: "center",
    alignItems:"center",
    marginTop:300
  },
  cadastro__buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: colors.primary
  },
  
});

export default style;