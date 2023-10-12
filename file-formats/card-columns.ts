import { ColumnFormat } from "./formats";

const columns: ColumnFormat[] = [
    {
        title: 'Id',
        key: 'id',
        type: 'string',
        defaultValue: 'id'
    },
    {
        title: 'TSYSCIN',
        key: 'externalcardid',
        type: 'string',
        defaultValue: '1af91726-204b-44ec-8715-54186e97055d'
    },
    {
        title: 'MemberUID',
        key: 'customerid',
        type: 'string',
        defaultValue: '2886e073-78b9-4760-a411-db92c77caf03'
    },
    {
        title: 'BankAccountUID',
        key: 'bankaccountid',
        type: 'string',
        defaultValue: '85a1fe22-13cf-4f76-9a49-856a63f1a69b'
    },
    {
        title: 'MaskedCardNumber',
        key: 'binrange',
        type: 'number',
        maxLength: 6
    },
    {
        title: 'MaskedCardNumber',
        key: 'panlastfour',
        type: 'number',
        maxLength: 4
    },
    {
        title: 'MaskedCardNumber',
        key: 'hashedpan',
        type: 'number',
        maxLength: 10
    },
    {
        title: 'FirstName/LastName',
        key: 'nameoncard',
        type: 'string',
        defaultValue: 'John Doe'
    },
    {
        title: 'CardTypeId',
        key: 'cardtypeid',
        type: 'number',
        options: ['1', '2', '3']
    },
    {
        title: 'CreditOrDebit',
        key: 'creditordebit',
        type: 'number',
        options: ['0', '1', '2']
    },
    {
        title: 'Status',
        key: 'cardstatusid',
        type: 'number',
        options: ['1', '2', '3']
    },
    {
        title: 'StatusChangeDate',
        key: 'expiry',
        type: 'Date'
    },
    {
        title: 'CreatedDate',
        key: 'createdat',
        type: 'Date'
    },
    {
        title: 'UpdatedDate',
        key: 'updatedat',
        type: 'Date'
    },
    {
        title: 'Version',
        key: 'version',
        type: 'string',
        defaultValue: '1.0'
    },
    {
        title: 'Status',
        key: 'cardstopcode',
        type: 'string',
        defaultValue: '67c95641-cba1-47ac-b7b9-868abcb4cbe9'
    },
    {
        title: 'SourceUID',
        key: 'externalcustomerid',
        type: 'string',
        defaultValue: 'c631e5f1-bf6a-4b73-98ef-99a376da3636'
    },
    {
        title: 'ExternalSource',
        key: 'externalsource',
        type: 'string',
        options: ['NW', 'TSYS']
    },
    {
        title: 'IsReward',
        key: 'isreward',
        type: 'boolean',
        options: ['true', 'false']
    },
    {
        title: 'CardProductId',
        key: 'cardproductid',
        type: 'string',
        defaultValue: '4ff4074e-5630-4b00-8b95-9ae9ce83c844'
    },
    {
        title: 'IssuerCountryCode',
        key: 'issuercountrycode',
        type: 'string',
        defaultValue: 'GBP'
    }
];

export default columns;