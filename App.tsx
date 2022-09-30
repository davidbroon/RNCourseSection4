import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './util/color';
import GameOverScreen from './screens/GameOverScreen';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [userNumber, setUserNumber] = useState<number|null>();
	const [gameIsOver, setGameIsOver] = useState<boolean>(true);
	const [guessRounds, setGuessRounds] = useState<number>(0);
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await Font.loadAsync({
					'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
					'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
				});
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	const pickedNumberHandler = (pickedNumber: number) => {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	};

	const gameOverHandler = (numberOfRounds:number) => {
		setGameIsOver(true);
		setGuessRounds(numberOfRounds);
	};

	const startNewGameHandler = () => {
		setUserNumber(null);
		setGuessRounds(0);
	};

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	}

	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				roundsNumber={guessRounds}
				onStartNewGame={startNewGameHandler}
			/>
		);
	}

	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.accent500]}
			style={styles.rootContainer}
		>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode='cover'
				resizeMethod='auto'
				style={styles.rootContainer}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView onLayout={onLayoutRootView} style={styles.rootContainer}>
					{screen}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.2,
	},
});
