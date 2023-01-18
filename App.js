
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Keyboard, Pressable, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState, useCallback  } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import  { useFonts }  from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
export default function App() {


  const [pickedNumber,setPickedNumber] = useState()
  const [isGameOver,setIsGameOver] = useState(false)
  const [rounds, setRounds] = useState(0)
  const [fontsLoaded] = useFonts(
    {
      'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
    }
    )
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }
 
  let screen = <StartGameScreen onPickNumber = {setPickedNumber}/>
  const startNewGame = () => {
    setIsGameOver(false)
    setPickedNumber(null)
    screen = <StartGameScreen/>
  }
  if(pickedNumber) {
    
    screen = <GameScreen setRounds={setRounds} onGameOver= {setIsGameOver} userNumber={pickedNumber}/>
  }
  if (isGameOver) {
    screen = <GameOverScreen onRestart={startNewGame} roundsNumber={rounds} userNumber={pickedNumber}/> 
  }
  return (
    <>
      <StatusBar hidden/>
      <LinearGradient
        colors={[colors.primary700,colors.accent500]}
        style = {styles.rootScreen}>
          
        <ImageBackground
          source={require('./assets/background.png')}
          resizeMode={'cover'}
          style={styles.rootScreen}
          imageStyle={styles.backgtoundImage}
          
          >
            
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
        </ImageBackground>
      
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen : {
    flex:1,
  },
  backgtoundImage : {
    opacity : 0.15
  }
});
