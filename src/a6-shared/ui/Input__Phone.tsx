import { useState } from 'react';

export const Input__Phone = (props) => {
    const [value, setValue] = useState('');

    const { onChange } = props;

    // Функция для обработки изменения значения в инпуте
    const handleChange = (e) => {
        let newValue = e.target.value.replace(/\D/g, ''); // Убираем все нецифровые символы

        if (newValue.length > 10) {
            newValue = newValue.substring(0, 10); // Ограничиваем длину до 10 символов
        }

        // Если значение пустое, то просто очищаем строку
        if (newValue.length === 0) {
            newValue = '';
        } else {
            // Применяем маску только тогда, когда длина нового значения изменилась
            if (newValue.length <= 3) {
                console.log(newValue.length);
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
        onChange(newValue);
    };

    return (
        <input type="tel" value={value} onChange={handleChange} placeholder="+7 (___) ___-__-__*" className="input" />
    );
};
