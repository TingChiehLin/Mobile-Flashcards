// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

export async function _getDecks () {
    try {
        const data  = await AsyncStorage.getItem(DECK_STORAGE_KEY);

        if (data  === null) {
          AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(defaultDecks));
        }
        
        return data  === null ? defaultDecks : JSON.parse(data);
    } catch (err) {
        console.log(err);
    }
}

export async function _getDeck () {

}

export async function _saveDeckTitle () {
    
}

export async function _addCardToDeck () {
    
}