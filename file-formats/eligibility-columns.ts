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
        title: 'CIN',
        key: 'CIN',
        type: 'string',
        defaultValue: 'CIN Value'
    },
    {
        title: 'DOB',
        key: 'DOB',
        type: 'Date'
    },
    {
        title: 'PartialPostcode',
        key: 'PartialPostcode',
        type: 'string',
        defaultValue: 'PartialPostcode Value'
    },
    {
        title: 'IsEligible',
        key: 'IsEligible',
        type: 'string',
        options: ['True', 'False']
    }
];

export default columns;