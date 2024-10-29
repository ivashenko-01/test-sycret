import React, { ChangeEvent, FC } from 'react'; // Импортируем FC для создания функциональных компонентов

interface Props {
    onChange?: (value: string) => void; // Типизируем коллбэк-функцию onChange
}

export const Input__Phone: FC<Props> = ({ onChange }) => {
    const [value, setValue] = React.useState<string>(''); // Указываем тип состояния как строковый

    // Функция для обработки изменения значения в инпуте
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newValue = event.target.value.replace(/\D/g, ''); // Убираем все нецифровые символы

        if (newValue.length > 10) {
            newValue = newValue.substring(0, 10); // Ограничиваем длину до 10 символов
        }

        // Если значение пустое, то просто очищаем строку
        if (newValue.length === 0) {
            newValue = '';
        } else {
            // Применяем маску только тогда, когда длина нового значения изменилась
            if (newValue.length <= 3) {
                newValue = `+7 (${newValue})`;
            } else if (newValue.length <= 6) {
                newValue = `+7 (${newValue.slice(0, 3)}) ${newValue.slice(3)}`;
            } else if (newValue.length <= 8) {
                newValue = `+7 (${newValue.slice(0, 3)}) ${newValue.slice(3, 6)}-${newValue.slice(6)}`;
            } else {
                newValue = `+7 (${newValue.slice(0, 3)}) ${newValue.slice(3, 6)}-${newValue.slice(
                    6,
                    8,
                )}-${newValue.slice(8)}`;
            }
        }

        setValue(newValue);
        onChange?.(newValue); // Вызываем коллбэк, если он передан
    };

    return (
        <input type="tel" value={value} onChange={handleChange} placeholder="+7 (___) ___-__-__*" className="input" />
    );
};
