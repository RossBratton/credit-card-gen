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
        maxLength: 16,
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
        maxLength: 3,
        protect: true
    },
    {
        title: 'Pan',
        key: 'pan',
        type: 'number',
        maxLength: 4,
        protect: true
    },
    {
        title: 'SortCode',
        key: 'sortCode',
        type: 'number',
        maxLength: 6,
        protect: true
    },
    {
        title: 'AccountNumber',
        key: 'accountNumber',
        type: 'number',
        maxLength: 8,
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
        maxLength: 1000000
    }
];

export default columns;