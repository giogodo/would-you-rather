import { saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

//TEMPORAL
import { linkQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

/**
 * @description Handle for add question. PERHAPS TEMPORAL HERE
 * @param {string} optionOne - First option.
 * @param {string} optionTwo - Second option.
 */
export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    })
      .then(question => {
        dispatch(addQuestion(question));
        dispatch(
          linkQuestion({
            authedUser,
            qid: question.id
          })
        );
      })
      .then(() => dispatch(hideLoading()));
  };
}
