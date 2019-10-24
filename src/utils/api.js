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

export function saveQuestionAnswer(data) {
  return _saveQuestionAnswer(data);
}
