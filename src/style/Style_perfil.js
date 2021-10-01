import { StyleSheet } from 'react-native';

//colors
import colors from './colors/Colors'

const style = StyleSheet.create({
    view:{
        width:'85%',
        height:'100%',
        margin:'8%',
        
    },
    txt:{
        fontSize:16,
        fontWeight:"bold",
        color: colors.primary,
        padding:5,
        paddingBottom:0
    },
    input:{
    backgroundColor: colors.opacity,
    color:colors.colorText,
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
    borderBottomColor: colors.primary,
    borderBottomWidth:2
  }

});

export default style;