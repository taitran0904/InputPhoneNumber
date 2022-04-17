import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import NumberInput from './components/NumberInput';

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState([
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
  ]);
  const [phoneNumber, setPhoneNumber] = React.useState(state);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'red',
          marginTop: 20,
          marginHorizontal: 20,
          height: 50,
          justifyContent: 'center',
        }}>
        <Text
          style={{fontSize: 20, backgroundColor: 'red', textAlign: 'center'}}>
          0{phoneNumber.slice(0, 3)} {phoneNumber.slice(3, 6)}{' '}
          {phoneNumber.slice(6, 9)}
        </Text>
      </TouchableOpacity>
      <NumberInput
        open={open}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        state={state}
        setState={setState}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
