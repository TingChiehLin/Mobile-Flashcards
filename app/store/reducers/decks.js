import * as actionType from '../actions/actionsType';
import { updateObject } from '../../../utils/utility';

const initialState = {
    availableDecks:[],
    quizDone: false
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
            const {deckID, questionTitle, answer} = action; 
            const decksList = state.availableDecks;
            console.log("action>>>>>>>>>>>>>>>", action)
            console.log("state.availableDecks", state.availableDecks)
            const questionToBeUpdated = decksList[deckID];
            console.log("questionToBeUpdated", questionToBeUpdated)
            const newQuestion = {
                question: questionTitle,
                answerName: answer
            }

            questionToBeUpdated.questions = [...questionToBeUpdated.questions,newQuestion];
            //let newUpdated = questionToBeUpdated.questions.concat(newQuestion);
            return updateObject(
                state, {
                    // availableDecks: decksList
                    ...questionToBeUpdated
                    // ...newUpdated
            })
    
        case actionType.DELETE_DECK:
            const removeProp = action.deckId;
            const newDeck =  Object.keys(state.availableDecks).filter(e => e === removeProp)
            //const { [removeProp]: remove, ...rest } = state.availableDecks;
            return updateObject(
                state, {
                    availableDeck: newDeck
            })
        case actionType.QUIZ_DONE:
            return updateObject(
                state, {
                    quizDone: action.isquizeDone
            })
        default:
            return state;
    }
};

export default decksReducer;