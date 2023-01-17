import { View,StyleSheet } from "react-native";
import colors from './../constants/colors';

export default function Card({children}) {
    return (
        <View style={s.inputContainer}>
            {children}
        </View> 
    )
}
const s = StyleSheet.create({
    inputContainer : {
        marginTop: 36,
        marginHorizontal : 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: colors.primary800,
        shadowColor : 'black',
        shadowOffset :  {width :0 ,height:2 },
        shadowRadius : 6,
        shadowOpacity : 0.25,
        elevation : 8,
        alignItems : 'center',
        justifyContent: 'center'
    },
})