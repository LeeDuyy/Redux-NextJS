import { UserAction, USER_SAVE_INFO } from "./userActionType";
import { UserState } from "./userType";

const initialState: UserState = {
    username: ""
}

export const USER_NAMESPACE = "user";

function userReducer(state = initialState, action: UserAction): UserState {
    switch(action.type) {
        case USER_SAVE_INFO:
            return {
                username: state.username
            }
        default:
            return state;
    }
}

export default userReducer;

