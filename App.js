import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { useState } from "react";

//Components
import HeaderBar from "./components/appbar/HeaderBar";
import NumPad from "./components/pad/NumPad";

//Layouts
import ScreenLayout from "./layout/ScreenLayout";

export default function App() {
  const [theme, setTheme] = useState(MD3DarkTheme);
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const handleThemeChange = () => {
    setTheme((prevTheme) =>
      prevTheme === MD3DarkTheme ? MD3LightTheme : MD3DarkTheme
    );
    setIsSwitchOn((prevState) => !prevState);
  };

  return (
    <PaperProvider theme={theme}>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
       <ScreenLayout
          switchState={isSwitchOn}
          switchTheme={handleThemeChange}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
