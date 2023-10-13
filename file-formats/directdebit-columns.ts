import { ColumnFormat } from "./formats";

const columns: ColumnFormat[] = [
    {
        title: 'RowNum',
        key: 'RowNum',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'BankID',
        key: 'BankID',
        type: 'string',
        options: ['0278', '0904', '0905', '0365', '0903', '0906', '0907']
    },
    {
        title: 'SortCode',
        key: 'SortCode',
        type: 'string',
        maxLength: 6,
        protect: true
    },
    {
        title: 'AccountNo',
        key: 'AccountNo',
        type: 'string',
        maxLength: 8,
        protect: true
    },
    {
        title: 'Amount',
        key: 'Amount',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'OIN',
        key: 'OIN',
        type: 'string',
        defaultValue: 'OIN Value'
    },
    {
        title: 'Date',
        key: 'Date',
        type: 'Date'
    },
    {
        title: 'Narrative',
        key: 'Narrative',
        type: 'string',
        defaultValue: 'Narrative Value'
    }
];

export default columns;