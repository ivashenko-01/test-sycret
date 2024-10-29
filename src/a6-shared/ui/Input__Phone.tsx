import { FC, ChangeEvent } from 'react'; // Импортируем FC и ChangeEvent
import InputMask from 'react-input-mask';

interface Props {
    onChange?: (value: string) => void; // Типизируем коллбэк-функцию onChange
}

export const Input__Phone: FC<Props> = ({ onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value); // Передаем значение из события
        }
    };

    return (
        <InputMask
            mask="+7 (999) 999-99-99"
            id="phone"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            onChange={handleChange} // Используем нашу функцию-обработчик
            className="input"
        />
    );
};
