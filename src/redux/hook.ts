import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "./rootState";
import { Fn } from './type';

export function useAppAction<T extends Fn>(action: T): (...args: Parameters<T>) => (
    ReturnType<T>
) {
    const dispatch = useDispatch();
    console.log("oke")

    return useCallback((...args: Parameters<T>) => (
        dispatch(action(...args))
    ), [action, dispatch]);
}

export function useAppSelector<T extends (state: RootState) => any>(selector: T): ReturnType<T> {
    return useSelector(selector);
}