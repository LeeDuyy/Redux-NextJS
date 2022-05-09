/* eslint-disable react-hooks/rules-of-hooks */
import { useAppAction, useAppSelector } from "../hook";
import { saveUser } from "./userAction";

export const useUser = () => useAppSelector((state) => state.user)
export const userSaveUser = () => useAppAction(saveUser);