import * as actionType from './actionsType';
import { _getDecks, _addDeck , _saveDeckTitle } from '../../../utils/helpers';

//Action Creator
export const showResult = async () => {
    const updateResult = await _getDecks();
    return {
        type: actionType.RECEIVE_DECKS,
        availableDecks: updateResult
    };
}

//Add Card
export const addCardToDeckResult = async (title, card) => {
    // const updateResult = await _addDeck(title, card);
    return {
        type: actionType.ADD_CARD,
        title,
        card
    };
}

export const deleteCardFromResult = async () => {

}

// Deck Result
export const _deck_result = (decks) => {
    return async dispatch => {
        dispatch(await showResult(decks))
    }
}

//Add Deck
export const _save_deck = (title) => {
    return async dispatch => {
        const newdeck = await _saveDeckTitle(title)
        dispatch(await _deck_result(newdeck))
    }
}

//Add Card
export const _add_cardToDeck = (deckId, card) => {
    return async dispatch => {
        dispatch(await addCardToDeckResult(deckId, card))
    }
}

// Delete Deck
export const _delete_Deck = (deckId) => {
    return async dispatch => {
        dispatch(await deleteCardFromResult)
    };
}

//finishQuiz

export const finishQuiz = () => {
    return async dispatch => {

    };
}