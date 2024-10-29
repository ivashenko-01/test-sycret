import { useEffect } from 'react';
import { ChangeEvent } from 'react';

import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@a1-app/store';

import { get_List_Product__Thunk } from '@a5-entities/certificate/index';
import { set__Select_Certificate } from '@a5-entities/form-data/index';

import './page__select_certificate.scss';

export function Page__Select_Certificate() {
    const dispatch = useAppDispatch();

    const list_certificate = useAppSelector((state) => state.certificate.items);

    const selected_certificate_id = useAppSelector((state) => state.form_data.selected_certificate.ID);

    const handleSelectCertificate = (event: ChangeEvent<HTMLSelectElement>) => {
        // Получаем выбранный ID сертификата
        const selectedId = event.target.value;

        // Находим соответствующий сертификат по ID
        const certificate = list_certificate.find((cert) => cert.ID === selectedId);

        if (certificate) {
            dispatch(set__Select_Certificate(certificate));
        }
    };

    useEffect(() => {
        dispatch(get_List_Product__Thunk());
    }, [dispatch]);

    return (
        <>
            <div className="container">
                <section className="section-select-certificate">
                    <div className="section-select-certificate__block1">
                        <label htmlFor="certificates">Выберите сертификат:</label>
                        <select id="certificates" onChange={handleSelectCertificate} defaultValue="">
                            <option disabled hidden value="">
                                Выберите продукт
                            </option>
                            {list_certificate.map((certificate) => (
                                <option key={certificate.ID} value={certificate.ID}>
                                    {certificate.REC_NAME}
                                </option>
                            ))}
                        </select>
                    </div>
                    {selected_certificate_id && (
                        <NavLink to="/contact-form" className={`button`}>
                            Приобрести
                        </NavLink>
                    )}
                </section>
            </div>
        </>
    );
}
