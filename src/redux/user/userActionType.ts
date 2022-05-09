import { UserState } from "./userType";

export const USER_SAVE_INFO = "USER_SAVE_INFO";

export interface UserSaveInfo {
    type: typeof USER_SAVE_INFO;
    user: UserState
}

export type UserAction = UserSaveInfo;