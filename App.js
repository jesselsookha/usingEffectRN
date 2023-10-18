import {useState, useEffect} from 'react'; 
import {View, Button, Text, StyleSheet} from 'react-native'; 

function App(){
	const [count, setCount] = useState(0);
	const [dispText, setDispText] = useState('');

  useEffect(() => {
		// Whatever code we want to execute without user interaction 
		setDispText('USE EFFECT - The count is : ' + count);

    console.log(count); 
		// return - optional 
		//return () => {setCount(0)};
	}, [count]);

	return(
		<View style={styles.container}>
			<Text style={styles.textDisp}>Count: {count}</Text>
			<View style={styles.buttons}>
				<Button
					onPress={() => setCount(count - 1)}
					title='Decrement'
				/>
			</View>

			<View style={styles.buttons}>
				<Button
					onPress={() => setCount(count + 1)}
					title='Increment'
				/>
			</View>
			<Text style={styles.textDisp}>{dispText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		padding: 10, 
	}, 
	buttons: {
		margin: 5, 
		padding: 5, 	
	}, 
	textDisp: {
		fontSize: 36, 
		fontWeight: 'bold',
	},
});

export default App; 