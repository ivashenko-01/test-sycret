import { createAsyncThunk } from '@reduxjs/toolkit';

import { get_List_Product, send_Select_Product } from '@a6-shared/api/certificate';

// --- Получение списка товаров
export const get_List_Product__Thunk = createAsyncThunk(
    'certificate/get_List_Product',
    async (_, { rejectWithValue }) => {
        const { data, response } = await get_List_Product();

        if (data) {
            return data;
        } else if (response) {
            return rejectWithValue(response.data);
        }
    },
);

// --- Сохранение выбранного продукта
export const send_Select_Product__Thunk = createAsyncThunk(
    'certificate/send_Select_Product',
    async (props, { rejectWithValue }) => {
        const { data, response } = await send_Select_Product(props);

        if (data) {
            return data;
        } else if (response) {
            return rejectWithValue(response.data);
        }
    },
);
