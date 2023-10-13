// https://rewardinsight.atlassian.net/wiki/spaces/RBS/pages/2915532801/Process+Transaction

import { ColumnFormat } from "./formats";

const columns: ColumnFormat[] = [
    {
        title: 'RowNum',
        key: 'rownum',
        type: 'string',
        defaultValue: 'guid'
    },
    {
        title: 'BankId',
        key: 'bankid',
        type: 'string',
        options: ['0278', '0904', '0905', '0365', '0903', '0906', '0907']
    },
    {
        title: 'PrivatePan',
        key: 'privatepan',
        type: 'string',
        maxLength: 16,
        protect: true
    },
    {
        title: 'ClearStatus',
        key: 'clearstatus',
        type: 'string',
        defaultValue: 'ClearStatus Value'
    },
    {
        title: 'MTI',
        key: 'mti',
        type: 'string',
        defaultValue: 'MTI Value'
    },
    {
        title: 'FunctionCode',
        key: 'functioncode',
        type: 'string',
        defaultValue: 'FunctionCode Value'
    },
    {
        title: 'ReversalLnd',
        key: 'reversallnd',
        type: 'string',
        defaultValue: 'ReversalLnd Value'
    },
    {
        title: 'ProcessCode',
        key: 'processcode',
        type: 'string',
        defaultValue: 'ProcessCode Value'
    },
    {
        title: 'OriginatorID',
        key: 'originatorid',
        type: 'string',
        defaultValue: 'guid'
    },
    {
        title: 'MerchantID',
        key: 'merchantid',
        type: 'string',
        defaultValue: 'guid'
    },
    {
        title: 'TerminalID',
        key: 'terminalid',
        type: 'string',
        defaultValue: 'guid'
    },
    {
        title: 'LocationName',
        key: 'locationname',
        type: 'string',
        defaultValue: 'Location name'
    },
    {
        title: 'LocationAddress',
        key: 'locationaddress',
        type: 'string',
        defaultValue: 'Location address'
    },
    {
        title: 'LocationCountry',
        key: 'locationcountry',
        type: 'string',
        defaultValue: 'Location country'
    },
    {
        title: 'MCC',
        key: 'mcc',
        type: 'string',
        defaultValue: 'MCC Value'
    },
    {
        title: 'CardholderPresentData',
        key: 'cardholderpresentdata',
        type: 'string',
        defaultValue: 'CardholderPresentData Value'
    },
    {
        title: 'TranDate',
        key: 'trandate',
        type: 'Date'
    },
    {
        title: 'TranCurrencyCode',
        key: 'trancurrencycode',
        type: 'string',
        defaultValue: 'TranCurrencyCode Value'
    },
    {
        title: 'TranCurrencyAmt',
        key: 'trancurrencyamt',
        type: 'string',
        minLength: 1,
        maxLength: 10000
    },
    {
        title: 'RecnCurrencyCode',
        key: 'recncurrencycode',
        type: 'string',
        defaultValue: 'RecnCurrencyCode Value'
    },
    {
        title: 'RecnCurrencyAmt',
        key: 'recncurrencyamt',
        type: 'string',
        minLength: 1,
        maxLength: 10000
    },
    {
        title: 'PWCBAmt',
        key: 'pwcbamt',
        type: 'string',
        minLength: 1,
        maxLength: 10000
    },
    {
        title: 'PostFPInd',
        key: 'postfpind',
        type: 'string',
        defaultValue: 'PostFPInd Value'
    },
    {
        title: 'Amount',
        key: 'amount',
        type: 'string',
        minLength: 1,
        maxLength: 10000
    },
    {
        title: 'CardInputMode',
        key: 'cardinputmode',
        type: 'string',
        defaultValue: 'CardInputMode Value'
    }
];

export default columns;