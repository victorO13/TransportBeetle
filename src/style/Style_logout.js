import { StyleSheet } from 'react-native';

//colors
import colors from './colors/Colors'

const style = StyleSheet.create({
    containerTop:{
        justifyContent:"flex-start"
    },
    area__menu: {
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: '100%',
        backgroundColor: colors.backgroundView,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button__home: {
        textAlign: 'left'
    },
    area__title: {
        width: '80%',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.primary,
        textAlign: 'center'
    },
    button__logout: {
        textAlign: 'right'
    }
});

export default style;