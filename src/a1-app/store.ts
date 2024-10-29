import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';

import { TypedUseSelectorHook } from 'react-redux';

import certificateSlice from '@a5-entities/certificate/model/redux/slice';
import formDataSlice from '@a5-entities/form-data/model/redux/slice';

export const store = configureStore({
    reducer: {
        certificate: certificateSlice,
        form_data: formDataSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

import { INITIALSTATE as INITIALSTATE__CERTIFICATE } from '@a5-entities/certificate/model/redux/slice';
import { INITIALSTATE as INITIALSTATE__FORM_DATA } from '@a5-entities/form-data/model/redux/slice';

export interface STATE {
    form_data: INITIALSTATE__FORM_DATA;
    certificate: INITIALSTATE__CERTIFICATE;
}

export const useAppDispatch: () => RootDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore.withTypes<typeof store>();
