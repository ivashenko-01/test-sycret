import { createSlice } from '@reduxjs/toolkit';

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
    contact_form: {
        fullName: string;
        email: string;
        phone: string;
        MsgText: string;
    };
    selected_certificate: CERTIFICATE;
}

const initialState: INITIALSTATE = {
    isLoading: false,
    status: 'Начальное состояние.',
    contact_form: {
        fullName: ``,
        email: ``,
        phone: ``,
        MsgText: ``,
    },
    selected_certificate: {
        ID: '',
        TABLENAME: '',
        PRIMARYKEY: '',
        NAME: '',
        DESCRIPTION: '',
        PRICE: 0,
        SUMMA: 0,
        DISCOUNT: 0,
        IMAGEURL: '',
        REC_SNO: '',
        REC_NAME: '',
        REC_SUM: 0,
        REC_QUANTITY: 0,
        REC_PAYMENT_METHOD: '',
        REC_PAYMENT_OBJECT: '',
        REC_TAX: '',
    },
};

export const formDataSlice = createSlice({
    name: 'form-data',
    initialState: initialState,
    reducers: {
        set__Select_Certificate: (state, action) => {
            state.selected_certificate = action.payload;
        },
        set__Contact_Form__FullName: (state, action) => {
            state.contact_form.fullName = action.payload;
        },
        set__Contact_Form__Phone: (state, action) => {
            state.contact_form.phone = action.payload;
        },
        set__Contact_Form__Email: (state, action) => {
            state.contact_form.email = action.payload;
        },
        set__Contact_Form__MsgText: (state, action) => {
            state.contact_form.MsgText = action.payload;
        },
    },
    extraReducers: () => {},
});

export const {
    set__Select_Certificate,
    set__Contact_Form__FullName,
    set__Contact_Form__Email,
    set__Contact_Form__Phone,
    set__Contact_Form__MsgText,
} = formDataSlice.actions;

export default formDataSlice.reducer;
