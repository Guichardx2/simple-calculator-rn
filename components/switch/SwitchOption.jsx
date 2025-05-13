import { Switch } from 'react-native-paper';

const SwitchOption = ({isSwitchOn, onToggleSwitch}) => {
    console.log(isSwitchOn)
    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
}

export default SwitchOption