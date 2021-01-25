import * as actionType from '../actions/actionsType';
import { updateObject } from '../../../utils/utility';

const initialState = {
    availableDecks:[],
    question:[]
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

            })
        case actionType.DELETE_DECK:
            return updateObject(
                state, {

            })
        default:
            return state;
    }
};

export default decksReducer;