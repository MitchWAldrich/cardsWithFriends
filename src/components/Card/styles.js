import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottomContainer: {
    alignSelf: 'flex-end',
    height: '25%',
    transform: [{rotate: '180deg'}],
    width: '25%',
  },
  bottomSuit: {
    alignSelf: 'center',
    height: '40%',
    objectFit: 'contain',
    width: '100%',
  },
  bottomValue: {
    alignSelf: 'center',
    height: '60%',
    objectFit: 'contain',
    width: '100%',
  },
  centerContainer: {
    alignSelf: 'center',
    display: 'flex',
    height: '50%',
    justifyContent: 'center',
    width: '50%',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    height: 225,
    width: 150,
    zIndex: 1.5,
  },
  centerImage: {
    alignSelf: 'center',
    height: '50%',
    objectFit: 'contain',
    width: '100%',
  },
  topContainer: {
    height: '25%',
    width: '25%',
  },
  topSuit: {
    alignSelf: 'center',
    height: '40%',
    objectFit: 'contain',
    width: '100%',
  },
  topValue: {
    alignSelf: 'center',
    height: '60%',
    objectFit: 'contain',
    width: '100%',
  },
});

export {styles};
