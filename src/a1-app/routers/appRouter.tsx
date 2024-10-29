import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Page__Select_Certificate, Page__Contact_Form, Page__Payment_Order } from '@a2-pages/index';

const PAGES_PATH = {
    select_certificate: '/',
    contact_form: '/contact-form',
    payment_order: '/payment-order',
};

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${PAGES_PATH.select_certificate}`} element={<Page__Select_Certificate />} />
                <Route path={`${PAGES_PATH.contact_form}`} element={<Page__Contact_Form />} />
                <Route path={`${PAGES_PATH.payment_order}`} element={<Page__Payment_Order />} />
            </Routes>
        </BrowserRouter>
    );
};
