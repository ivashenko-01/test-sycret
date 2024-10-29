import { FC } from 'react'; // Импортируем FC для создания функциональных компонентов
import InputMask from 'react-input-mask';

interface Props {
    onChange?: (value: string) => void; // Типизируем коллбэк-функцию onChange
}

export const Input__Phone: FC<Props> = ({ onChange }) => {
    return (
        <InputMask
            mask="+7 (999) 999-99-99"
            id="phone"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            onChange={onChange}
            className="input"
        />
    );
};
