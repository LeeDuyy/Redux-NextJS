import { UserSaveInfo, USER_SAVE_INFO } from "./userActionType";
import { UserState } from "./userType";

export function saveUser(userState: UserState): UserSaveInfo {
    return {
        type: USER_SAVE_INFO,
        user: userState,
    }
}