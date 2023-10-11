import { ColumnFormat } from "./formats";

const columns: ColumnFormat[] = [
    {
        title: 'Forename',
        key: 'forename',
        type: 'string',
        defaultValue: 'Forename'
    },
    {
        title: 'Surname',
        key: 'surname',
        type: 'string',
        defaultValue: 'Surname'
    },
    {
        title: 'CardNumber',
        key: 'cardNumber',
        type: 'number',
        minLength: 16,
        maxLength: 16,
        padZerosLeft: true,
        protect: true
    },
    {
        title: 'CardType',
        key: 'cardType',
        type: 'string',
        options: ['Credit', 'Debit', 'Debit (Prepaid)']
    },
    {
        title: 'Expires',
        key: 'expires',
        type: 'Date'
    },
    {
        title: 'CVV',
        key: 'cvv',
        type: 'number',
        minLength: 3,
        maxLength: 3,
        padZerosLeft: true,
        protect: true
    },
    {
        title: 'Pan',
        key: 'pan',
        type: 'number',
        minLength: 4,
        maxLength: 4,
        padZerosLeft: true,
        protect: true
    },
    {
        title: 'SortCode',
        key: 'sortCode',
        type: 'number',
        minLength: 6,
        maxLength: 6,
        padZerosLeft: true,
        protect: true
    },
    {
        title: 'AccountNumber',
        key: 'accountNumber',
        type: 'number',
        minLength: 8,
        maxLength: 8,
        padZerosLeft: true,
        protect: true
    },
    {
        title: 'HasChip',
        key: 'hasChip',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: 'Balance',
        key: 'balance',
        type: 'number',
        minLength: 1,
        maxLength: 1000000,
        padZerosLeft: false
    }
];

export default columns;