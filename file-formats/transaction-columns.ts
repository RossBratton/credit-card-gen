import { ColumnFormat } from "./formats";

const columns: ColumnFormat[] = [
    {
        title: 'Description',
        key: 'description',
        type: 'string',
        defaultValue: 'This is the description'
    },
    {
        title: 'TransactionId',
        key: 'transactionid',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'TransactionExternalId',
        key: 'transactionexternalid',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'TypeId',
        key: 'transactiontypeid',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'ProcessDate',
        key: 'matcheddate',
        type: 'Date'
    },
    {
        title: 'Date',
        key: 'transactiondate',
        type: 'Date'
    },
    {
        title: 'ActivationDaysDate',
        key: 'transactionclearingdate',
        type: 'Date'
    },
    {
        title: 'MemberUID',
        key: 'customerid',
        type: 'string',
        defaultValue: '0a229cc8-403b-4261-b75e-fd8a29705022'
    },
    {
        title: 'NomineeCustomerId',
        key: 'nomineecustomerid',
        type: 'string',
        defaultValue: 'c88858f4-9fd8-4eaf-9d46-1ed3cc615fad'
    },
    {
        title: 'Id',
        key: 'cardid',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'PartialPan',
        key: 'panlastfour',
        type: 'number',
        maxLength: 4,
        protect: true
    },
    {
        title: 'MerchantId',
        key: 'merchantid',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'ExternalPartnerId',
        key: 'partnerid',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'HydraOfferId',
        key: 'offerid',
        type: 'string',
        defaultValue: 'b7abb2a9-637b-46eb-8c39-e84881e7d17a'
    },
    {
        title: 'CurrencyCode',
        key: 'currencycode',
        type: 'string',
        defaultValue: 'GBP'
    },
    {
        title: 'AffliateCommissionAmount',
        key: 'netamount',
        type: 'number',
        minLength: 1,
        maxLength: 100000
    },
    {
        title: 'VatAmount',
        key: 'vatamount',
        type: 'number',
        minLength: 1,
        maxLength: 100000
    },
    {
        title: 'VatAmount',
        key: 'vatamount',
        type: 'number',
        minLength: 1,
        maxLength: 100000
    },
    {
        title: 'PartnerCommissionAmount',
        key: 'grossamount',
        type: 'number',
        minLength: 1,
        maxLength: 100000
    },
    {
        title: 'VatRate',
        key: 'vatrate',
        type: 'number',
        minLength: 1,
        maxLength: 20
    },
    {
        title: 'Amount',
        key: 'transactionamount',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'ClubCash',
        key: 'paymentamount',
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    },
    {
        title: 'MarketingRate',
        key: 'marketingrate',
        type: 'number',
        minLength: 1,
        maxLength: 50
    },
    {
        title: 'BillingRate',
        key: 'billingrate',
        type: 'number',
        minLength: 1,
        maxLength: 50
    },
    {
        title: 'PartnerCommissionAmount',
        key: 'billingamount',
        type: 'number',
        minLength: 1,
        maxLength: 1000
    },
    {
        title: 'ActivationDaysDate',
        key: 'cleared',
        type: 'Date'
    },
    {
        title: 'ProcessDateCreated',
        key: 'createdat',
        type: 'Date'
    },
    {
        title: 'ProcessDateUpdated',
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
        title: 'BankAccountUID',
        key: 'bankaccountid',
        type: 'string',
        defaultValue: '03bcb3cd-b49a-4963-a71d-4dfa39d246b0'
    },
    {
        title: 'MCC',
        key: 'mcc',
        type: 'string',
        minLength: 1,
        maxLength: 200
    },
    {
        title: 'OIN',
        key: 'oin',
        type: 'string',
        defaultValue: 'OIN Value'
    },
    {
        title: 'SourceUID',
        key: 'customerexternalid',
        type: 'string',
        defaultValue: 'fc319dfc-224f-4767-8314-caa6bb79f701'
    },
    {
        title: 'CardInputMode',
        key: 'cardinputmode',
        type: 'string',
        defaultValue: 'Input mode value'
    },
    {
        title: 'MatcherRunId',
        key: 'matcherrunid',
        type: 'string',
        defaultValue: 'matcherid value'
    }
];

export default columns;