import { StyleSheet, View, Text } from 'react-native';
import { AppSwitch } from './CustomSwitch';
import {
  EyeIcon,
  CloseIcon,
  EyeClosedIcon,
  EmailIcon,
  PasswordIcon,
  PhoneIcon,
} from '../../assets/icons/icons';

export const CustomSwitchScreen = () => {
  return (
    <View style={styles.container}>
      <EyeIcon strokeWidth={0.2} size={140} color="cyan" />
      <CloseIcon />
      <EyeClosedIcon />
      <EmailIcon />
      <PasswordIcon />
      <PhoneIcon size={100} />
      <Text style={styles.text}>Custom Switch</Text>
      <View style={styles.switchContainer}>
        <AppSwitch activeColor={'#FFA901'} inActiveColor={'#F2F5F7'} />
      </View>
      <View style={styles.switchContainer}>
        <AppSwitch activeColor={'#92d7ef'} inActiveColor={'#F2F5F7'} />
      </View>
      <View style={styles.switchContainer}>
        <AppSwitch activeColor={'#e3e5b3'} inActiveColor={'#F2F5F7'} />
      </View>
      <View style={styles.switchContainer}>
        <AppSwitch activeColor={'#107980'} inActiveColor={'#1071b1'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchContainer: {
    marginVertical: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
