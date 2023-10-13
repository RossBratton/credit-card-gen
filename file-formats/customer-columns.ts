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
        title: 'BankId',
        key: 'BankId',
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
        title: 'Title',
        key: 'Title',
        type: 'string',
        options: ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof', 'Rev', 'Sir', 'Lord', 'Lady', 'Dame', 'Other']
    },
    {
        title: 'Forename',
        key: 'Forename',
        type: 'string',
        defaultValue: 'Forename'
    },
    {
        title: 'Surname',
        key: 'Surname',
        type: 'string',
        defaultValue: 'Surname'
    },
    {
        title: 'Address_Line1',
        key: 'Address_Line1',
        type: 'string',
        defaultValue: 'Address_Line1 Value'
    },
    {
        title: 'Address_Line2',
        key: 'Address_Line2',
        type: 'string',
        defaultValue: 'Address_Line2 Value'
    },
    {
        title: 'Address_Line3',
        key: 'Address_Line3',
        type: 'string',
        defaultValue: 'Address_Line3 Value'
    },
    {
        title: 'Address_Line4',
        key: 'Address_Line4',
        type: 'string',
        defaultValue: 'Address_Line4 Value'
    },
    {
        title: 'Address_Line5',
        key: 'Address_Line5',
        type: 'string',
        defaultValue: 'Address_Line5 Value'
    },
    {
        title: 'Postcode',
        key: 'Postcode',
        type: 'string',
        defaultValue: 'Postcode Value'
    },
    {
        title: 'DOB',
        key: 'DOB',
        type: 'Date'
    },
    {
        title: 'Gender',
        key: 'Gender',
        type: 'string',
        options: ['M', 'F', 'O']
    },
    {
        title: 'Email Address',
        key: 'Email Address',
        type: 'string',
        defaultValue: 'dummy@gmail.com'
    },
    {
        title: 'Mobile Number',
        key: 'Mobile Number',
        type: 'number',
        maxLength: 11,
        protect: true
    },
    {
        title: 'Account Status',
        key: 'Account Status',
        type: 'number',
        options: ['0', '1']
    },
    {
        title: 'DeceasedDate',
        key: 'deceaseddate',
        type: 'Date'
    },
    {
        title: 'Marketing Preferences Email',
        key: 'Marketing Preferences Email',
        type: 'string',
        defaultValue: 'marketing@gmail.com'
    },
    {
        title: 'Marketing Preferences Paper',
        key: 'Marketing Preferences Paper',
        type: 'string',
        defaultValue: 'Marketing Preferences Paper Value'
    },
    {
        title: 'Marketing Preferences Phone',
        key: 'Marketing Preferences Phone',
        type: 'string',
        defaultValue: 'Marketing Preferences Phone Value'
    },
    {
        title: 'Marketing Preferences SMS',
        key: 'Marketing Preferences SMS',
        type: 'string',
        defaultValue: 'Marketing Preferences SMS Value'
    },
    {
        title: 'Segment',
        key: 'Segment',
        type: 'string',
        defaultValue: 'Segment Value'
    }
];

export default columns;