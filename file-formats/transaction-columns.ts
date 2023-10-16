// https://rewardinsight.atlassian.net/wiki/spaces/RBS/pages/2915532801/Process+Transaction

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
        title: 'PrivatePan',
        key: 'PrivatePan',
        type: 'number',
        maxLength: 16,
        protect: true
    },
    {
        title: 'ClearStatus',
        key: 'ClearStatus',
        type: 'string',
        defaultValue: 'ClearStatus Value'
    },
    {
        title: 'MTI',
        key: 'MTI',
        type: 'string',
        defaultValue: 'MTI Value'
    },
    {
        title: 'FunctionCode',
        key: 'FunctionCode',
        type: 'string',
        defaultValue: 'FunctionCode Value'
    },
    {
        title: 'ReversalLnd',
        key: 'ReversalLnd',
        type: 'string',
        defaultValue: 'ReversalLnd Value'
    },
    {
        title: 'ProcessCode',
        key: 'ProcessCode',
        type: 'string',
        defaultValue: 'ProcessCode Value'
    },
    {
        title: 'OriginatorID',
        key: 'OriginatorID',
        type: 'string',
        defaultValue: 'guid'
    },
    {
        title: 'MerchantID',
        key: 'MerchantID',
        type: 'string',
        defaultValue: 'guid'
    },
    {
        title: 'TerminalID',
        key: 'TerminalID',
        type: 'string',
        defaultValue: 'guid'
    },
    {
        title: 'LocationName',
        key: 'LocationName',
        type: 'string',
        defaultValue: 'Location name'
    },
    {
        title: 'LocationAddress',
        key: 'LocationAddress',
        type: 'string',
        defaultValue: 'Location address'
    },
    {
        title: 'LocationCountry',
        key: 'LocationCountry',
        type: 'string',
        defaultValue: 'Location country'
    },
    {
        title: 'MCC',
        key: 'MCC',
        type: 'string',
        defaultValue: 'MCC Value'
    },
    {
        title: 'CardholderPresentData',
        key: 'CardholderPresentData',
        type: 'string',
        defaultValue: 'CardholderPresentData Value'
    },
    {
        title: 'TranDate',
        key: 'TranDate',
        type: 'Date'
    },
    {
        title: 'TranCurrencyCode',
        key: 'TranCurrencyCode',
        type: 'string',
        defaultValue: 'TranCurrencyCode Value'
    },
    {
        title: 'TranCurrencyAmt',
        key: 'TranCurrencyAmt',
        type: 'number',
        minLength: 1,
        maxLength: 10000
    },
    {
        title: 'RecnCurrencyCode',
        key: 'RecnCurrencyCode',
        type: 'string',
        defaultValue: 'RecnCurrencyCode Value'
    },
    {
        title: 'RecnCurrencyAmt',
        key: 'RecnCurrencyAmt',
        type: 'number',
        minLength: 1,
        maxLength: 10000
    },
    {
        title: 'PWCBAmt',
        key: 'PWCBAmt',
        type: 'number',
        minLength: 1,
        maxLength: 10000
    },
    {
        title: 'PostFPInd',
        key: 'PostFPInd',
        type: 'string',
        defaultValue: 'PostFPInd Value'
    },
    {
        title: 'Amount',
        key: 'Amount',
        type: 'number',
        minLength: 1,
        maxLength: 10000
    },
    {
        title: 'CardInputMode',
        key: 'CardInputMode',
        type: 'string',
        defaultValue: 'CardInputMode Value'
    }
];

export default columns;