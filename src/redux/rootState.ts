import { AppReducerStateType } from "./type";
import userReducer from "./user/userReducer";

export interface RootState {
    version: number;
    user: AppReducerStateType<typeof userReducer>
}