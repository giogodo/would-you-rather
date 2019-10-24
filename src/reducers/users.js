import { RECEIVE_USERS, LINK_QUESTION, LINK_ANSWER } from "../actions/users";

export default function users(state = {}, action) {
  const { qid, answer, authedUser } = action;
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case LINK_QUESTION:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([qid])
        }
      };
    case LINK_ANSWER:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
}
