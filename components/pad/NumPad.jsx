import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import { Button, Text } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const numColumns = 4;
const spacing = 12;
const buttonSize = (screenWidth - spacing * (numColumns + 1)) / numColumns;

const NumPad = () => {
   const [value, setValue] = useState('');	

   const numPadButtons = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["C", "0", "=", "/"],
   ]
  return (
      <SafeAreaView style={styles.container}>
      <Text variant="headlineLarge" style={styles.display}>
        {value ? value : "0"}
      </Text>
      <View style={styles.grid}>
        {numPadButtons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item, colIndex) => (
              <Button
                key={colIndex}
                mode="contained"
                style={styles.button}
                contentStyle={styles.buttonContent}
                labelStyle={{ fontSize: 25}}
                onPress={() => {
                  if (item === "C") {
                    setValue('');
                  } else if (item === "=") {
                    try {
                      setValue(eval(value).toString());
                    } catch (error) {
                      setValue('Erro');
                    }
                  } else {
                    setValue((prev) => prev + item);
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  display: {
    marginBottom: 30,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 45,
    fontWeight: 'bold',
  },
  grid: {
    width: '100%',
    paddingHorizontal: spacing,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NumPad