import { Appbar } from 'react-native-paper';
import { StyleSheet } from "react-native";
import SwitchOption from '../switch/SwitchOption';

const HeaderBar = ({switchState, switchTheme}) => {
  console.log(switchState)
  return (
    <Appbar.Header style={style.container}>
      <Appbar.Content title="Calculadora" />
      <SwitchOption isSwitchOn={switchState} onToggleSwitch={switchTheme}/>
      <Appbar.Action icon="weather-night"/>
    </Appbar.Header>
  )
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    marginTop: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})

export default HeaderBar