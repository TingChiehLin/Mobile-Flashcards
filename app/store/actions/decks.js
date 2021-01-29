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

export const addCardToDeckResult = async (deckId, card) => {
    const updateResult = await _addDeck(deckId, card);
    return {
        type: actionType.ADD_CardToDECK,
        deckId,
        card
    };
}

export const deleteCardFromResult = async () => {

}


export const _deck_result = (res) => {
    return async dispatch => {
        dispatch(await showResult(res))
    }
}

export const _save_deck = (title) => {
    return async dispatch => {
        const newdeck = await _saveDeckTitle(title)
        dispatch(await _deck_result(newdeck))
    }
}

export const _add_cardToDeck = (deckId, card) => {
    return async dispatch => {
        dispatch(await addCardToDeckResult(deckId, card))
    }
}

export const _delete_Deck = (deckId) => {
    return async dispatch => {
        dispatch(await deleteCardFromResult)
    };
}

// type: DELETE_DECK,
// deckId

