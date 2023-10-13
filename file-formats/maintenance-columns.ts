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
        title: 'ClientProductCode',
        key: 'ClientProductCode',
        type: 'string',
        options: ['RWM','AMA','RAM','NAM']
    },
    {
        title: 'AccountIdentifier',
        key: 'AccountIdentifier',
        type: 'string',
        defaultValue: 'AccountIdentifier Value'
    },
    {
        title: 'AccountNumber',
        key: 'AccountNumber',
        type: 'string',
        maxLength: 8
    },
    {
        title: 'MaintenanceFlag',
        key: 'MaintenanceFlag',
        type: 'string',
        defaultValue: 'MaintenanceFlag Value'
    },
    {
        title: 'Prefix',
        key: 'Prefix',
        type: 'string',
        defaultValue: 'Prefix Value'
    },
    {
        title: 'FirstName',
        key: 'FirstName',
        type: 'string',
        defaultValue: 'First name'
    },
    {
        title: 'LastName',
        key: 'LastName',
        type: 'string',
        defaultValue: 'Last name'
    },
    {
        title: 'AddressLine1',
        key: 'AddressLine1',
        type: 'string',
        defaultValue: 'Address Line 1 Value'
    },
    {
        title: 'AddressLine2',
        key: 'AddressLine2',
        type: 'string',
        defaultValue: 'Address Line 2 Value'
    },
    {
        title: 'AddressLine3',
        key: 'AddressLine3',
        type: 'string',
        defaultValue: 'Address Line 3 Value'
    },
    {
        title: 'City',
        key: 'City',
        type: 'string',
        defaultValue: 'City Value'
    },
    {
        title: 'EmailAddress',
        key: 'EmailAddress',
        type: 'string',
        defaultValue: 'dummy@gmail.com'
    },
    {
        title: 'HomeTelephoneNumber',
        key: 'HomeTelephoneNumber',
        type: 'number',
        maxLength: 11
    },
    {
        title: 'MobileTelephoneNumber',
        key: 'MobileTelephoneNumber',
        type: 'number',
        maxLength: 11
    },
    {
        title: 'DateOfBirth',
        key: 'DateOfBirth',
        type: 'Date'
    },
    {
        title: 'GenderCode',
        key: 'GenderCode',
        type: 'string',
        options: ['M', 'F']
    },
    {
        title: 'MaintenanceDateBankruptcyStatus',
        key: 'MaintenanceDateBankruptcyStatus',
        type: 'string',
        defaultValue: 'MaintenanceDateBankruptcyStatus Value'
    },
    {
        title: 'ClosedStatusFlag',
        key: 'ClosedStatusFlag',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: 'ClosedReasonCode',
        key: 'ClosedReasonCode',
        type: 'string',
        defaultValue: 'ClosedReasonCode Value'
    },
    {
        title: 'ChargeoffStatusFlag',
        key: 'ChargeoffStatusFlag',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: 'ChargeoffReasonCode',
        key: 'ChargeoffReasonCode',
        type: 'string',
        defaultValue: 'ChargeoffReasonCode Value'
    },
    {
        title: 'CreditRevokedStatusFlag',
        key: 'CreditRevokedStatusFlag',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: 'CreditRevokedReasonCode',
        key: 'CreditRevokedReasonCode',
        type: 'string',
        defaultValue: 'CreditRevokedReasonCode Value'
    },
    {
        title: 'SecurityFraudStatus',
        key: 'SecurityFraudStatus',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: 'FraudStatusFlag',
        key: 'FraudStatusFlag',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: 'XFTransferStatusFlag',
        key: 'XFTransferStatusFlag',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: 'WarningBulletinStatusFlag',
        key: 'WarningBulletinStatusFlag',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: 'ClientDefinedStatusFlag',
        key: 'ClientDefinedStatusFlag',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: 'CIN',
        key: 'CIN',
        type: 'string',
        defaultValue: 'CIN Value'
    },
    {
        title: 'CommunicationPreferenceForProgram',
        key: 'CommunicationPreferenceForProgram',
        type: 'string',
        defaultValue: 'CommunicationPreferenceForProgram Value'
    },
    {
        title: 'CommunicationPreferenceFor3rdPartyMailings',
        key: 'CommunicationPreferenceFor3rdPartyMailings',
        type: 'string',
        defaultValue: 'CommunicationPreferenceFor3rdPartyMailings Value'
    },
    {
        title: 'Filler',
        key: 'Filler',
        type: 'string',
        defaultValue: 'Filler Value'
    }
];

export default columns;