import { useState } from "react";
import { TextInput, View,StyleSheet, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import colors from './../constants/colors';

export default function StartGameScreen({onPickNumber}) {

    const [enteredNumber,setEnteredNumber] = useState('')


    const inputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetHandler = () => {
        setEnteredNumber('')
    }

    const confirmHandler =() => {

        const inputNumber = parseInt(enteredNumber)

        if(isNaN(inputNumber) || inputNumber < 1 || inputNumber > 99) {

            Alert.alert('Не правильное число!' , 
            'Введённое вами число должно быть не меньше 1 и не больше 99',
             [{text : 'Ok!',style: 'destructive',onPress: resetHandler}])
             return
        }

        onPickNumber(inputNumber)
    }
    return (

       <ScrollView style={s.screen}>
         <KeyboardAvoidingView behavior="position" style={s.screen}>
            <View style={s.rootContainer}>
                <Title>Guess my number</Title>
                <Card>
                    <InstructionText>
                        Enter a number
                    </InstructionText>
                    <TextInput
                    maxLength={2}
                    style={s.input} 
                    keyboardType='number-pad'
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={inputHandler}
                    value={enteredNumber}
                    />
                    <View style={s.buttonsContainer}>
                        <View style={s.buttonContainer}>
                            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={s.buttonContainer}>
                            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
        </KeyboardAvoidingView>
       </ScrollView> 
    )
}
const s = StyleSheet.create({
    screen : {
        flex:1
    },
    rootContainer : {
        flex : 1,
        marginTop : 100,
        alignItems: "center",


    },
    
    input : {   
        height: 50,
        width: 50,
        textAlign:'center',
        fontSize : 32,
        borderBottomColor : colors.accent500,
        borderBottomWidth : 2,
        color: colors.accent500,
        marginVertical : 8,
        fontWeight : 'bold'

    },
    buttonsContainer : {
        flexDirection : "row",
    },
    buttonContainer : {
        flex : 1,
    }
})