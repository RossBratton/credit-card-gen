import { ColumnFormat } from "./formats";

const columns: ColumnFormat[] = [
    {
        title: 'Id',
        key: 'id',
        type: 'string',
        defaultValue: 'id'
    },
    {
        title: 'FirstName',
        key: 'firstname',
        type: 'string',
        defaultValue: 'First name'
    },
    {
        title: 'LastName',
        key: 'lastname',
        type: 'string',
        defaultValue: 'Last name'
    },
    {
        title: 'Email',
        key: 'email',
        type: 'string',
        defaultValue: 'dummy@gmail.com'
    },
    {
        title: 'Telephone',
        key: 'telephonenumber',
        type: 'number',
        maxLength: 11,
        protect: true
    },
    {
        title: 'MobileTelephone',
        key: 'mobilenumber',
        type: 'number',
        maxLength: 16,
        protect: true
    },
    {
        title: 'Status',
        key: 'customerstatusid',
        type: 'number',
        options: ['0', '1']
    },
    {
        title: 'LoginAttempts',
        key: 'failedlogins',
        type: 'number'
    },
    {
        title: 'ClubId',
        key: 'bankid',
        type: 'string',
        options: ['132', '138']
    },
    {
        title: 'SourceUID',
        key: 'externalid',
        type: 'string',
        defaultValue: '123456'
    },
    {
        title: 'OnlineRegistrationDate',
        key: 'registrationdate',
        type: 'Date'
    },
    {
        title: 'AgreedTCs',
        key: 'agreedtermssandcons',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'StatusChangeDate',
        key: 'deactivationdate',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'StatusChangeDate',
        key: 'optoutdate',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'Unsubscribed',
        key: 'marketingprefemail',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'MarketingPrefPush',
        key: 'marketingprefpush',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'EmailFormatHTML',
        key: 'emailimages',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'DOB',
        key: 'dateofbirth',
        type: 'string',
        defaultValue: '1900-01-01'
    },
    {
        title: 'Sex',
        key: 'gender',
        type: 'string',
        options: ['0', '1', '2']
    },
    {
        title: 'ContactByPost',
        key: 'marketingprefpaper',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'ContactByPhone',
        key: 'marketingprefphone',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'ContactBySMS',
        key: 'marketingprefsms',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'AttributeId',
        key: 'segmenttypeid',
        type: 'string',
        options: ['1', '2']
    },
    {
        title: 'Date',
        key: 'createdat',
        type: 'Date'
    },
    {
        title: 'LastUpdated',
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
        title: 'DeceasedDate',
        key: 'deceaseddate',
        type: 'Date'
    },
    {
        title: 'HideFirstTimeSSOLogin',
        key: 'HideFirstTimeSSOLogin',
        type: 'string',
        options: ['0', '1']
    },
    {
        title: 'PreferredLanguageCode',
        key: 'preferredlanguagecode',
        type: 'string',
        defaultValue: 'en'
    }
];

export default columns;