// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

const DECK_STORAGE_KEY = '@flash_key';

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
export async function _saveDeckTitle(title) {
  await AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  );
}
// actions/decks.js
export const _getAllDecks = () => async(dispatch) => {
  const decks = await getDecks(); 
  dispatch(receiveDecksAction(decks));
}
export const _addDeck = (title) => async(dispatch) => {
  saveDeckTitle(title)
  return dispatch(addDeckAction(title))
}
// utils/data.js
export const decksList = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    }
  };