import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {useAnimatedStyle} from 'react-native-reanimated';
import {styles} from './styles';
import {basicDeck} from '../../decks/first';

// *** Will need to make call to get deck/import from props

const Card = props => {
  const {
    bottomContainer,
    bottomSuit,
    bottomValue,
    container,
    centerContainer,
    centerImage,
    topContainer,
    topSuit,
    topValue,
  } = styles;
  const {bottom, card, onPress} = props;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      bottom: bottom,
    };
  });

  return (
    <Pressable onPress={onPress} style={[container, animatedStyle]}>
      <View style={topContainer}>
        <Image source={basicDeck.cards[card]?.cornerText} style={topValue} />
        <Image source={basicDeck.cards[card]?.cornerSuit} style={topSuit} />
      </View>
      <View style={centerContainer}>
        <Image source={basicDeck.cards[card]?.cornerSuit} style={centerImage} />
      </View>
      <View style={bottomContainer}>
        <Image source={basicDeck.cards[card]?.cornerText} style={bottomValue} />
        <Image source={basicDeck.cards[card]?.cornerSuit} style={bottomSuit} />
      </View>
    </Pressable>
  );
};

export default Card;
