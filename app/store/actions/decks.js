import * as actionType from './actionsType';
import { _getDecks } from '../../../utils/helpers';

//Action Creator
export const showResult = async () => {
    const updateResult = await _getDecks();
    return {
        type: actionType.RECEIVE_DECKS,
        availableDecks: updateResult
    };
}

//Middleware

export const _deck_result = (res) => {
    return async dispatch => {
        dispatch(await showResult(res))
    }
}