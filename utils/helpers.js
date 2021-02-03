const DECK_STORAGE_KEY = '@flash_key';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decksList } from './Api';

//Get all cards
export async function _getDecks () {
  const data  = await AsyncStorage.getItem(DECK_STORAGE_KEY);
  
  if (data  === null) {
     AsyncStorage.setItem(
       DECK_STORAGE_KEY,
       JSON.stringify(decksList)
     );
     return decksList;
    }
    
  return JSON.parse(data);  
}

//
// saveDeckTitle: take in a single title argument and add it to the decks.
export async function _saveDeckTitle(title) {

  try {
    await AsyncStorage.mergeItem(
      DECK_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        } 
      })
    );
  } catch(err) {
    console.log(err);
  }
}

// dispatch to get all of decks
export const _getAllDecks = () => async(dispatch) => {
  const decks = await _getDecks(); 
  dispatch(receiveDecksAction(decks));
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export const _addDeck = (title) => async(dispatch) => {
  _saveDeckTitle(title)
  return dispatch(addDeckAction(title))
}

export async function removeDeck(deckId) {
  const results = await AsyncStorage.getItem(DECK_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    const { [deckId]: remove, ...rest } = data;
    await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(rest));
    return data;
  }
  return {};
}

// getDeck by title, and add new question
// save new question in decks
export async function addCardToDeckStorage(title, question) {
  let decks = await _getDecks();
// get the deck questions by using title
  let deck = await getDeck(title);
  let updatedDeck = {
    title,
    questions: [
      ...deck.questions,
      question
    ]
  }
  let updatedDecks = {
    ...decks,
    [title]: updatedDeck
  }
  await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(updatedDecks));
  return updatedDecks;
 }