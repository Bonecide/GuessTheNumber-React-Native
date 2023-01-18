import { Text,StyleSheet,Platform } from "react-native";

export default function Title({children}) {

    return(
        <Text style={s.title}>
            {children}
        </Text>
    )
}
const s = StyleSheet.create({
    title : {
        fontFamily : 'open-sans-bold',
        fontSize:24,
        color: 'white',
        textAlign: 'center',
        // borderWidth : Platform.OS === 'android' ? 2 : 0,
        borderWidth : 0,
        borderColor : 'white',
        padding:12,

    }
})