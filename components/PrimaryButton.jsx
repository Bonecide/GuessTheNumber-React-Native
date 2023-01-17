import { Text, View,Pressable,StyleSheet } from "react-native";
import colors from './../constants/colors';


export default function PrimaryButton({children,onPress}) { 
    
    return(
        <View style={s.container}>
            <Pressable style={({pressed}) => pressed? [s.pressed,s.buttonPressContainer]: s.buttonPressContainer }
             onPress={onPress}>
                
                    <Text style={s.buttonText}>{children}</Text>
                
            </Pressable>
        </View>
    )
}
const s = StyleSheet.create({
    container : {
        borderRadius : 28,
        margin:4,
        overflow: "hidden",


    },
    buttonPressContainer : {
        backgroundColor : colors.primary500,
        paddingVertical : 8,
        paddingHorizontal : 16,
        elevation : 2,
    },  
    pressed : {
        opacity: 0.5,
    },
    buttonText : {
        color: 'white',
        textAlign: 'center',

    }
})