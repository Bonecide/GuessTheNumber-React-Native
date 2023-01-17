import { Text, View,StyleSheet } from "react-native";
import colors from './../../constants/colors';

export default function NumberContainer({children}) {

    return (
        <View style={s.container}>
            <Text style={s.numberText}>
                {children}
            </Text>
        </View>
    )
}
const s = StyleSheet.create({
    container : {
        borderWidth : 4,
        borderColor : colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius : 8,
        alignItems: 'center',
        justifyContent : 'center',


    },
    numberText : {
        color : colors.accent500,
        fontSize : 36,
        fontFamily : 'open-sans-bold'


    }
})