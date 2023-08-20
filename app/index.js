import {View , Text , Button ,  StyleSheet} from "react-native"
import React, { useState } from "react"
function CounterApp() {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
    
    const reset = () => {
        setCount(0);
      };
    return (
        <View style={styles.container}>
        <Text style={styles.countText}>{count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Increment" onPress={increment} style={styles.button} />
          <Button
            title="Decrement"
            onPress={decrement}
            disabled={count === 0}
            style={[styles.button, count === 0 && styles.disabledButton]}
          />
          <Button title="Reset" onPress={reset} style={styles.resetButton} />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    countText: {
      fontSize: 48,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },
    button: {
      width: 120,
      paddingVertical: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
    },
    disabledButton: {
      backgroundColor: '#d3d3d3',
    },
  });
  
  
  export default CounterApp;