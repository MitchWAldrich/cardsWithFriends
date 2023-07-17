import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Card from '../Card/Card';
import Animated from 'react-native-reanimated';
import {basicDeck} from '../../decks/first';

const DiscardPile = props => {
  const {deck, deckName} = props;

  return (
    <View style={styles.container}>
      {deck.map((single, index) => {
        return (
          <>
            <Animated.View
              key={basicDeck.cards[single].id}
              style={[styles.card, {left: index, zIndex: index + 1}]}>
              <Card card={single} deckName={deckName} />
            </Animated.View>
          </>
        );
      })}
    </View>
  );
};

export default DiscardPile;
