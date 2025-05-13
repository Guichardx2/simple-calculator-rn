import { View } from 'react-native';
import HeaderBar from '../components/appbar/HeaderBar';
import NumPad from '../components/pad/NumPad';

const ScreenLayout = ({ switchState, switchTheme }) => {
    
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar switchState={switchState} switchTheme={switchTheme} />
      <NumPad />
    </View>
  );
};

export default ScreenLayout;