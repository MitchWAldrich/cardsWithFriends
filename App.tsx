import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Deck from './src/components/Deck/Deck';
import DiscardPile from './src/components/DiscardPile/DiscardPile';
import Hand from './src/components/Hand/Hand';

import {basicDeck} from './src/decks/first';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /* WILL NEED TO GET REQ DECK */
  const [drawPile, setIsDrawPile] = useState(Object.keys(basicDeck.cards));
  const [discardPile, setIsDiscardPile] = useState([]);

  const hydrateHand = size => {
    const hand = [];

    while (size > 0) {
      const deal = Math.floor(Math.random() * drawPile.length);
      let index = drawPile.indexOf(drawPile[deal]);

      hand.push(drawPile[deal]);
      if (index != -1) {
        drawPile.splice(index, 1); // remove 1 element from index
      }
      // setIsDrawPile(drawPile);
      size--;
    }
    return hand;
  };

  const [handOne, setIsHandOne] = useState(hydrateHand(5));
  const [handTwo, setIsHandTwo] = useState(hydrateHand(5));

  const drawCard = card => {
    const updatedDrawPile = drawPile.filter(elem => elem !== card);
    setIsDrawPile(updatedDrawPile);

    discardPile.push(card);
    setIsDiscardPile(discardPile);
  };

  const discardCard = (cardId, hand, player) => {
    const updatedHand = hand.filter(elem => elem !== cardId);

    player === 'playerOne'
      ? setIsHandOne(updatedHand)
      : setIsHandTwo(updatedHand);

    setIsDiscardPile(discardPile);
  };

  let selectedCard = null;

  const handleCardPress = card => {
    selectedCard = card ? null : card;
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button
          disabled={selectedCard ? false : true}
          onPress={() => discardCard(selectedCard, handTwo, 'playerTwo')}
          title={'Player Two'}
        />
        <Hand
          cardId={selectedCard}
          deckName={basicDeck.name}
          hand={handTwo}
          handlePress={handleCardPress}
        />
        {/* <Button title={'Start'} onPress={deal} /> */}
        <Button
          onPress={() => drawCard(drawPile[drawPile.length - 1])}
          title={'Draw'}
        />
        <View style={{flexDirection: 'row'}}>
          <Deck deck={drawPile} deckName={basicDeck.name} />
          <DiscardPile deck={discardPile} deckName={basicDeck.name} />
        </View>
        <Button
          disabled={selectedCard ? false : true}
          onPress={() => discardCard(selectedCard, handOne, 'playerOne')}
          title={'Player One'}
        />
        <Hand
          cardId={selectedCard}
          deckName={basicDeck.name}
          hand={handOne}
          handlePress={handleCardPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
