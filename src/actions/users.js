export const RECEIVE_USERS = "RECEIVE_USERS";
export const LINK_QUESTION = "LINK_QUESTION";
export const LINK_ANSWER = "LINK_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function linkQuestion({ authedUser, qid }) {
  return {
    type: LINK_QUESTION,
    authedUser,
    qid
  };
}

export function linkAnswer({ authedUser, qid, answer }) {
  return {
    type: LINK_ANSWER,
    authedUser,
    qid,
    answer
  };
}
