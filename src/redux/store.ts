// store.ts
import { Store } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import version from './version';
import rootReducer from './rootReducer';
import { RootState } from './rootState';
import { configureStore } from '@reduxjs/toolkit';

// Lưu dữ liệu từ redux vào Localstorage.
export const save = (state: any) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

// Lấy dữ liệu từ redux vào Localstorage.
export const load = () => {
    if (!process.browser) {
        return undefined;
    }

    let state;

    try {
        state = localStorage.getItem('state');

        if (typeof state === 'string') {
            state = JSON.parse(state);
        }

        if (state && state.version !== version) {
            state = undefined;
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }

    return state || undefined;
};

// create a makeStore function
const makeStore: MakeStore<Store<RootState>> = () => (
    configureStore({
        reducer: rootReducer,
        devTools: true,
    })
);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore);