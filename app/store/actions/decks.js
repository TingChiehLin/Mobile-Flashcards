import * as actionType from './actionsType';
import { _getDecks, _addDeck, _saveDeckTitle } from '../../../utils/helpers';

//Action Creator
export const showResult = async () => {
    const updateResult = await _getDecks();
    return {
        type: actionType.RECEIVE_DECKS,
        availableDecks: updateResult
    };
}

export const addCardToDeckResult = async () => {
    const updateResult = await _addDeck();
    return {
        type: actionType.ADD_CardToDECK,
        
    };
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

export const _add_cardtodeck = (res) => {
    return async dispatch => {
        dispatch(await addCardToDeckResult)
    }
}


