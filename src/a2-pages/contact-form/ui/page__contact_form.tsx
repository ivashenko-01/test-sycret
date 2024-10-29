import { NavLink, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import './page__contact_form.scss';

import { useAppDispatch, useAppSelector } from '@a1-app/store';

import {
    set__Contact_Form__FullName,
    set__Contact_Form__Email,
    set__Contact_Form__Phone,
    set__Contact_Form__MsgText,
} from '@a5-entities/form-data';

import { send_Select_Product__Thunk } from '@a5-entities/certificate';

import { Input__Phone } from '@a6-shared/ui/Input__Phone';

export function Page__Contact_Form() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onChange__FullName = (value: string) => {
        dispatch(set__Contact_Form__FullName(value));
    };
    const onChange__Email = (value: string) => {
        dispatch(set__Contact_Form__Email(value));
    };
    const onChange__Phone = (value: string) => {
        dispatch(set__Contact_Form__Phone(value));
    };
    const onChange__MsgText = (value: string) => {
        dispatch(set__Contact_Form__MsgText(value));
    };

    const fullName = useAppSelector((state) => state.form_data.contact_form.fullName);
    const email = useAppSelector((state) => state.form_data.contact_form.email);
    const phone = useAppSelector((state) => state.form_data.contact_form.phone);
    const message = useAppSelector((state) => state.form_data.contact_form.MsgText);

    const selected_certificate = useAppSelector((state) => state.form_data.selected_certificate);
    const selected_certificate_id = useAppSelector((state) => state.form_data.selected_certificate.ID);

    const handleOnClickPaymentOrder = () => {
        dispatch(
            send_Select_Product__Thunk({
                Id: selected_certificate.ID,
                TableName: selected_certificate.TABLENAME,
                PrimaryKey: selected_certificate.PRIMARYKEY,
                Price: selected_certificate.PRICE,
                Summa: selected_certificate.SUMMA,
                ClientName: fullName,
                Email: email,
                Phone: phone,
                PaymentTypeId: 2,
                UseDelivery: 0,
                DeliveryAddress: 0,
                IsGift: 0,
                MsgText: message,
            }),
        );

        navigate(`/payment-order`);
    };

    useEffect(() => {
        if (!selected_certificate_id || selected_certificate_id === '') {
            return navigate('/');
        }
    });

    return (
        <>
            <div className="container">
                <section className="section-contact-form">
                    <input
                        type="text"
                        placeholder="ФИО*"
                        className="input"
                        onChange={(event) => onChange__FullName(event.target.value)}
                    />
                    <Input__Phone onChange={onChange__Phone}></Input__Phone>
                    <textarea
                        name=""
                        id=""
                        placeholder="Сообщение"
                        className="input"
                        onChange={(event) => onChange__MsgText(event.target.value)}
                    ></textarea>
                    <input
                        type="text"
                        placeholder="Почта*"
                        className="input"
                        onChange={(event) => onChange__Email(event.target.value)}
                    />
                    <div className="section-contact-form__buttons">
                        <NavLink to="*" className="button">
                            Вернуться обратно
                        </NavLink>
                        {fullName && email && phone && (
                            <NavLink to="/payment-order" className="button" onClick={() => handleOnClickPaymentOrder()}>
                                Перейти к оплате
                            </NavLink>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}
