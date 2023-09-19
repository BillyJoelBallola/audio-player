import { TouchableOpacity, View } from 'react-native';
import reusable from '../Reusable/reusable.style';
import WidthSpacer from '../Reusable/WidthSpacer';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, TEXT } from '../../theme';
import styles from './song.style';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import AssetImage from '../Reusable/AssetImage';

const SongTile = ({ song, onPress }) => {
  return (
    <TouchableOpacity style={styles.songContainer} onPress={onPress}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <AssetImage 
            source={song.image}
            width={60}
            height={60}
            radius= {10}
          />
          <WidthSpacer width={20} />
          <View>
            <ReusableText 
              text={song.title}
              family={'medium'}
              size={TEXT.medium}
              color={COLORS.black}
            />
            <ReusableText 
              text={song.author}
              family={'regular'}
              size={TEXT.small}
              color={COLORS.gray}
            />
          </View>
        </View>
        <Ionicons 
          name='play'
          size={20}
        />
      </View>
    </TouchableOpacity>
  )
}

export default SongTile;

