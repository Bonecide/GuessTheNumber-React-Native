import { Text,StyleSheet } from "react-native";

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
        borderWidth : 2,
        borderColor : 'white',
        padding:12,

    }
})