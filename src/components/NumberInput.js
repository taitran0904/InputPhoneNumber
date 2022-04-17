import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

export default function NumberInput(props) {
  const {open, setPhoneNumber, phoneNumber, state, setState} = props;
  const windowWidth = Dimensions.get('window').width;

  const dataNumber = [
    {
      data: [
        {
          type: 'number',
          text: '7',
        },
        {
          type: 'number',
          text: '8',
        },
        {
          type: 'number',
          text: '9',
        },
      ],
    },
    {
      data: [
        {
          type: 'number',
          text: '4',
        },
        {
          type: 'number',
          text: '5',
        },
        {
          type: 'number',
          text: '6',
        },
      ],
    },
    {
      data: [
        {
          type: 'number',
          text: '1',
        },
        {
          type: 'number',
          text: '2',
        },
        {
          type: 'number',
          text: '3',
        },
      ],
    },
    {
      data: [
        {
          type: 'clear',
          text: 'C',
        },
        {
          type: 'del',
          text: 'DEL',
        },
        {
          type: 'hide',
          text: 'X',
        },
      ],
    },
  ];

  const handlePress = i => {
    if (i.type === 'number') {
      let arr = state;
      let arrString = arr.join('');
      let found = arrString.indexOf('_');
      if (found !== -1) {
        arr[found] = i.text.toString();
        setState(arr);
      } else return;
    } else if (i.type === 'del') {
      let arr = state;
      let arrString = arr.join('');
      let found = arrString.indexOf('_');
      if (found !== -1) {
        arr[found - 1] = '_';
        setState(arr);
      } else {
        arr[8] = '_';
        setState(arr);
      }
    } else if (i.type === 'clear') {
      let arr = state;
      arr.fill('_');
      setState(arr);
    }

    // setState(arr);
    setPhoneNumber(state.join(''));
    console.log(state.join(''));
  };

  return (
    <Modal animationType="slide" visible={open} transparent={true}>
      <View
        style={[
          {
            flex: 1,
            position: 'absolute',
            backgroundColor: 'blue',
            width: '100%',
            height: 400,
            zIndex: 10,
            bottom: 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            // flexWrap: 'wrap',
            // flexDirection: 'row',
            padding: 5,
          },
        ]}>
        {dataNumber.map((item, index) => {
          return (
            <View key={index} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {item.data.map((i, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(i)}
                  style={{
                    width: (windowWidth - 40) / 3,
                    height: 85,
                    margin: 5,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{i.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        })}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
