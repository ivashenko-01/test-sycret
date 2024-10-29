import { createSlice } from '@reduxjs/toolkit';

import { get_List_Product__Thunk } from './thunk';

type CERTIFICATE = {
    ID: string;
    TABLENAME: string;
    PRIMARYKEY: string;
    NAME: string;
    DESCRIPTION: '';
    PRICE: number;
    SUMMA: number;
    DISCOUNT: number;
    IMAGEURL: string;
    REC_SNO: string;
    REC_NAME: string;
    REC_SUM: number;
    REC_QUANTITY: number;
    REC_PAYMENT_METHOD: string;
    REC_PAYMENT_OBJECT: string;
    REC_TAX: string;
};

export interface INITIALSTATE {
    isLoading: boolean;
    status: string;
    items: CERTIFICATE[];
}

const initialState: INITIALSTATE = {
    isLoading: false,
    status: 'Начальное состояние.',
    items: [],
};

export const certificateSlice = createSlice({
    name: 'certificate',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(get_List_Product__Thunk.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(get_List_Product__Thunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = `Загрузка товаров успешно завершена.`;
            state.items = action.payload.data;
        });
        builder.addCase(get_List_Product__Thunk.rejected, (state) => {
            state.isLoading = false;
            state.status = 'Ошибка во время загрузки товаров.';
        });
    },
});

// export const {} = certificateSlice.actions;

export default certificateSlice.reducer;
