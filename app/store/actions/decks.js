import * as actionType from './actionsType';
import { _getDecks, _addDeck , _saveDeckTitle, removeDeck } from '../../../utils/helpers';

//Action Creator
export const showResult = async () => {
    const updateResult = await _getDecks();
    return {
        type: actionType.RECEIVE_DECKS,
        availableDecks: updateResult
    };
}

//Add Card
export const addCardToDeckResult = (title, card) => {
    return {
        type: actionType.ADD_CARD,
        title: card.title,
        card: card.answerName
    };
}

//delete
export const deleteCardFromResult = (deckId) => {
    return { 
        type: actionType.DELETE_DECK,
        deckId
    };
}

//QuizDone
export const _quiz_done = (isquizeDone) => {
    return {
        type: actionType.QUIZ_DONE,
        isquizeDone
    };
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
        await removeDeck(deckId)
        dispatch(await deleteCardFromResult(deckId))
        dispatch(_deck_result())
    };
}

//finishQuiz
export const _finishQuiz = (isquizeDone) => {
    return async dispatch => {
        await dispatch(_quiz_done(isquizeDone));
    };
}