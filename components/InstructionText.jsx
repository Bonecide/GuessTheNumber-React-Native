import { Text,StyleSheet } from "react-native";
import colors from './../constants/colors';

export default function InstructionText({children,style}) {

    return (
        <Text style={[s.InstructionText,style]}>
            {children}
        </Text>
    )
}
const s = StyleSheet.create({
    InstructionText : {
        fontFamily : "open-sans",
        color: colors.accent500,
        fontSize : 24,

    },
})