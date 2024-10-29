import axios from '../base';

const MethodName_GETPRODUCT = 'OSGetGoodList';
const MethodName_OSSale = 'OSSale';
const ApiKey = '011ba11bdcad4fa396660c2ec447ef14';

// --- Получение списка продуктов
export const get_List_Product = () => {
    return axios.post(`?MethodName=${MethodName_GETPRODUCT}&ismob=0&ApiKey=${ApiKey}`, {}).catch((error) => {
        return error;
    });
};

// --- Сохранение выбранного продукта
export const send_Select_Product = (props) => {
    const {
        Id,
        TableName,
        PrimaryKey,
        Price,
        Summa,
        ClientName,
        Email,
        Phone,
        PaymentTypeId,
        UseDelivery,
        DeliveryAddress,
        IsGift,
        MsgText,
    } = props;
    return axios
        .post(`?MethodName=${MethodName_OSSale}&ismob=0&ApiKey=${ApiKey}`, {
            Id,
            TableName,
            PrimaryKey,
            Price,
            Summa,
            ClientName,
            Email,
            Phone,
            PaymentTypeId,
            UseDelivery,
            DeliveryAddress,
            IsGift,
            MsgText,
        })
        .catch((error) => {
            return error;
        });
};
