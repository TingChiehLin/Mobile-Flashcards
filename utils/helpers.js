const DECK_STORAGE_KEY = '@flash_key';

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

//title -> deck title
// saveDeckTitle: take in a single title argument and add it to the decks.
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

// dispatch to get all of decks
export const _getAllDecks = () => async(dispatch) => {
  const decks = await getDecks(); 
  dispatch(receiveDecksAction(decks));
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export const _addDeck = (title) => async(dispatch) => {
  _saveDeckTitle(title)
  return dispatch(addDeckAction(title))
}

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
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
}