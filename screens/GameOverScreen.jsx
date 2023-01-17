import { Image, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import colors from './../constants/colors';


export default function GameOverScreen({roundsNumber,userNumber, onRestart}) {

    return(
        <View style={s.screen}>
            <Title>GAME OVER</Title>
           <View style={s.imageContainer}>
             <Image style={s.image} source={require('../assets/success.png')} />
           </View>
           <Text style={s.summaryText}>
                Your Phone needed  <Text style={s.highlight}>{roundsNumber}</Text> rounds to gues the number {" "}
                 <Text style={s.highlight}>{userNumber}</Text>
           </Text>
           <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
        </View>
    )
}
const s = StyleSheet.create({
    screen : {
        flex: 1,
        padding:24,
        alignItems : 'center',
        justifyContent: 'center',
    },
    imageContainer : {
        width:300,
        height:300,
        borderRadius: 150,
        overflow:"hidden",
        borderWidth: 3,
        borderColor : colors.primary800,
        margin : 36,


    },
    image : {
        width: '100%',
        height:'100%',
    },
    summaryText : {
        fontFamily : 'open-sans',
        fontSize : 24,
        textAlign : "center",
        marginBottom : 24,

    },
    highlight : {
        fontFamily : 'open-sans-bold',
        color: colors.primary500,
    }
})