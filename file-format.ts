interface ColumnFormat {
    title: ColumnTitles;
    key: string;
    type: string;
    defaultValue?: string;
    protect?: boolean;
    minLength?: number;
    maxLength?: number;
    padZerosLeft?: boolean;
    options?: string[];
} 

enum ColumnTitles {
    Forename,
    Surname,
    CardNumber,
    CardType,
    Expires,
    CVV,
    Pan,
    SortCode,
    AccountNumber,
    HasChip,
    Balance
};

const cardColumns: ColumnFormat[] = [
    {
        title: ColumnTitles.Forename,
        key: 'forename',
        type: 'string',
        defaultValue: 'Forename'
    },
    {
        title: ColumnTitles.Surname,
        key: 'surname',
        type: 'string',
        defaultValue: 'Surname'
    },
    {
        title: ColumnTitles.CardNumber,
        key: 'cardNumber',
        type: 'number',
        minLength: 16,
        maxLength: 16,
        padZerosLeft: true,
        protect: true
    },
    {
        title: ColumnTitles.CardType,
        key: 'cardType',
        type: 'string',
        options: ['Credit', 'Debit', 'Debit (Prepaid)']
    },
    {
        title: ColumnTitles.Expires,
        key: 'expires',
        type: 'Date'
    },
    {
        title: ColumnTitles.CVV,
        key: 'cvv',
        type: 'number',
        minLength: 3,
        maxLength: 3,
        padZerosLeft: true,
        protect: true
    },
    {
        title: ColumnTitles.Pan,
        key: 'pan',
        type: 'number',
        minLength: 4,
        maxLength: 4,
        padZerosLeft: true,
        protect: true
    },
    {
        title: ColumnTitles.SortCode,
        key: 'sortCode',
        type: 'number',
        minLength: 6,
        maxLength: 6,
        padZerosLeft: true,
        protect: true
    },
    {
        title: ColumnTitles.AccountNumber,
        key: 'accountNumber',
        type: 'number',
        minLength: 8,
        maxLength: 8,
        padZerosLeft: true,
        protect: true
    },
    {
        title: ColumnTitles.HasChip,
        key: 'hasChip',
        type: 'string',
        options: ['Yes', 'No']
    },
    {
        title: ColumnTitles.Balance,
        key: 'balance',
        type: 'number',
        minLength: 1,
        maxLength: 1000000,
        padZerosLeft: false
    }
]

function getFormat(type: string) {
    if (type === 'card') {
        return cardColumns
    }

    return [];
}

function getColumnTitle(columnTitle: ColumnTitles) {
    return ColumnTitles[columnTitle];
}

export { getFormat, getColumnTitle, ColumnTitles, ColumnFormat}