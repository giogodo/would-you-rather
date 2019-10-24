export const RECEIVE_USERS = "RECEIVE_USERS";
export const LINK_QUESTION = "LINK_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function linkQuestion({authedUser, qid}) {
  return {
    type: LINK_QUESTION,
    authedUser,
    qid
  }
}
