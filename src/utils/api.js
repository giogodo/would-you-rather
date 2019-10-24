import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

/**
 * @description Save question method for the fake api.
 * @param {Object} data - The question to save.
 * @param {string} data.optionOneText - The first option of the question.
 * @param {string} data.optionTwoText - The second option of the question.
 * @param {string} data.author - The authorId of the question creator.
 */
export function saveQuestion(data) {
  return _saveQuestion(data);
}

/**
 * @description Save question answer method for the fake api.
 * @param {Object} data - All the data to answer the question and do the two ways linking (User with question, question with user).
 * @param {string} data.authedUser - Id of the person that is answering the question.
 * @param {string} data.qid - Id of the question being answer.
 * @param {string} data.answer - The option selected, this can be: optionOne or optionTwo.
 */
export function saveQuestionAnswer(data) {
  return _saveQuestionAnswer(data);
}
