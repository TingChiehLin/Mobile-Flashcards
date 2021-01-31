import * as actionType from '../actions/actionsType';
import { updateObject } from '../../../utils/utility';

const initialState = {
    availableDecks:[]
};

const decksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.RECEIVE_DECKS:
            return updateObject(
                state, {
                    availableDecks: action.availableDecks
            })
        case actionType.ADD_DECK:
            return updateObject(
                state, {
                    availableDecks: action.availableDecks
            })
        case actionType.ADD_CARD:
            const {title, question} = action.cards; 
            const questions = state.availableDecks;
            const questionToBeUpdated = questions[title];
            questionToBeUpdated[answer].value = questionToBeUpdated[answer].value.concat(question);

            return updateObject(
                state, {
                   ...questions
            })
    
        case actionType.DELETE_DECK:
            const removeProp = action.deckId;
            const { [removeProp]: remove } = state.availableDecks;
            return updateObject(
                state, {
                   ...availableDecks
            })
        default:
            return state;
    }
};

export default decksReducer;