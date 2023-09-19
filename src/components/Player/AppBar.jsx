import { StyleSheet, TouchableOpacity, View } from 'react-native';
import reusable from '../Reusable/reusable.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
import React from 'react';

const AppBar = ({ onPress }) => {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 50 }}>
      <View style={reusable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
          <Ionicons 
            name='chevron-back'
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer}>
          <Ionicons 
            name='volume-mute'
            size={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.white,
    padding: 5,
    borderRadius: 10
  }
})