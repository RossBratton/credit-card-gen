interface ColumnFormat {
    title: ColumnTitles;
    key: string;
    type: string;
    protect?: boolean;
    minLength?: number;
    maxLength?: number;
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

const columns: ColumnFormat[] = [
    {
        title: ColumnTitles.Forename,
        key: "forename",
        type: 'string'
    },
    {
        title: ColumnTitles.Surname,
        key: "surname",
        type: 'string'
    },
    {
        title: ColumnTitles.CardNumber,
        key: "cardNumber",
        type: 'number',
        minLength: 16,
        maxLength: 16,
        protect: true
    },
    {
        title: ColumnTitles.CardType,
        key: "cardType",
        type: 'string',
        options: ['Credit', 'Debit', 'Debit (Prepaid)']
    },
    {
        title: ColumnTitles.Expires,
        key: "expires",
        type: 'Date'
    },
    {
        title: ColumnTitles.CVV,
        key: "cvv",
        type: 'number',
        minLength: 3,
        maxLength: 3,
        protect: true
    },
    {
        title: ColumnTitles.Pan,
        key: "pan",
        type: 'number',
        minLength: 4,
        maxLength: 4,
        protect: true
    },
    {
        title: ColumnTitles.SortCode,
        key: "sortCode",
        type: 'number',
        minLength: 6,
        maxLength: 6,
        protect: true
    },
    {
        title: ColumnTitles.AccountNumber,
        key: "accountNumber",
        type: 'number',
        minLength: 8,
        maxLength: 8,
        protect: true
    },
    {
        title: ColumnTitles.HasChip,
        key: "hasChip",
        type: 'boolean'
    },
    {
        title: ColumnTitles.Balance,
        key: "balance",
        type: 'number',
        minLength: 1,
        maxLength: 1000000
    }
]

function getFormat() {
    return columns
}

function getColumnTitle(columnTitle: ColumnTitles) {
    return ColumnTitles[columnTitle];
}

export { getFormat, getColumnTitle, ColumnTitles, ColumnFormat}