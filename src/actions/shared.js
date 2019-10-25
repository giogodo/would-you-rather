import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, linkQuestion, linkAnswer } from "../actions/users";
import { receiveQuestions, addQuestion, addAnswer } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = null;

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

/**
 * @description Handle for add question.
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

export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const data = {
      authedUser,
      qid,
      answer
    };
    dispatch(showLoading());
    return saveQuestionAnswer(data)
      .then(() => {
        dispatch(addAnswer(data));
        dispatch(linkAnswer(data));
      })
      .then(() => dispatch(hideLoading()));
  };
}
