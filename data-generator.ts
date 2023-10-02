import { Column } from 'exceljs';
import { getFormat, getColumnTitle, ColumnTitles, ColumnFormat } from './file-format';
import { RawRowModel } from './models/raw-row.model';

function getColumns(): Partial<Column>[] {
    return getFormat().map(format => {
        return { key: format.key, header: getColumnTitle(format.title) }; 
    });
}

function generateData(rowCount: number = 10000): RawRowModel[] {
    const data: RawRowModel[] = [...Array<RawRowModel>(rowCount)];

    const format = getFormat();

    data.forEach((row, index) => {
        data[index] = generateRowData(row, format);
    });
    
    return data;
}

function generateRowData(data: RawRowModel, format: ColumnFormat[]): RawRowModel {
    data = new RawRowModel();

    format.forEach((column) => {
        switch (column.title) {
            case ColumnTitles.Forename:
                data.forename = 'Forename';
                break;
            case ColumnTitles.Surname:
                data.surname = 'Surname';
                break;
            case ColumnTitles.AccountNumber:
                data.accountNumber = getRandomDigits(column.maxLength, column.protect);
                break;
            case ColumnTitles.Balance:
                data.balance = getRandomNumber(column.maxLength, column.minLength, column.protect);
                break;
            case ColumnTitles.CardNumber:
                data.cardNumber = getRandomDigits(column.maxLength, column.protect);
                break;
            case ColumnTitles.CardType:
                data.cardType = column.options ? column.options[Number(getRandomNumber(column.options.length))] : '';
                break;
            case ColumnTitles.CVV:
                data.cvv = getRandomDigits(column.maxLength, column.protect);
                break;
            case ColumnTitles.Expires:
                data.expires = getRandomDate();
                break;
            case ColumnTitles.HasChip:
                data.hasChip = getRandomNumber(1) ? 'Yes' : 'No';
                break;
            case ColumnTitles.Pan:
                data.pan = getRandomDigits(column.maxLength, column.protect);
                break;
            case ColumnTitles.SortCode:
                data.sortCode = getRandomDigits(column.maxLength, column.protect);
                break;
        }
    });

    return data;
}

function getRandomDigits(maxLength: number = 0, protect: boolean = false): string {
    const randomNumber = Math.floor(Math.pow(10, maxLength-1) + Math.random() * 9 * Math.pow(10, maxLength-1));

    if (protect) {
        return protectContent(randomNumber.toString());
    }

    return randomNumber.toString();
}

function getRandomNumber(max: number = 0, min: number = 0, protect: boolean = false): string {
    const diff = max - min;
    const rand = Math.random();
    const diffMulti = Math.floor(rand * diff);
    const randomNumber = min + diffMulti;

    if (protect) {
        return protectContent(randomNumber.toString());
    }

    return randomNumber.toString();
}

function getRandomDate(): string {
    const fromTime = new Date().getTime();
    const toTime = new Date(1900, 0, 1).getTime();

    return new Date(fromTime + Math.random() * (toTime - fromTime)).toISOString();
}

function protectContent(content: string) {
    if (content.length < 5) {
        return content.replaceAll(/./g, '*');
    }

    const middle = content.substring(1, content.length - 1);
    const hiddenMiddle = middle.replaceAll(/./g, '*');
    const protectedContent = content.replaceAll(middle, hiddenMiddle);
    
    return protectedContent;
}

export { getColumns, generateData };