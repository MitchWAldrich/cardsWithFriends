import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import Card from '../Card/Card';
import Animated from 'react-native-reanimated';
import {basicDeck} from '../../decks/first';

const Hand = props => {
  const {cardId, deckName, hand, handlePress} = props;
  let updatedHand = [...hand];

  const renderItem = ({item, index}) => {
    const bottom = basicDeck.cards[item].id === cardId ? 10 : 0;

    return (
      <>
        <Animated.View
          style={[
            {
              left: index * -100,
              zIndex: index + 1,
            },
          ]}>
          <Card
            bottom={bottom}
            card={item}
            deckName={deckName}
            // handlePress={handlePress}
            onPress={() => handlePress(basicDeck.cards[item].id)}
          />
        </Animated.View>
      </>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.FlatList
        data={updatedHand}
        renderItem={renderItem}
        extraData={cardId}
        horizontal
      />
    </ScrollView>
  );
};

export default Hand;
