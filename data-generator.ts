import { Column } from 'exceljs';
import { v4 as uuidv4 } from 'uuid';
import { getFormat, ColumnFormat } from './file-formats/formats';

function getColumns(type: string): Partial<Column>[] {
    return getFormat(type).map(format => {
        return { key: format.key, header: format.title }; 
    });
}

function generateData<T>(type: string, rowCount: number): T[] {
    const data: T[] = [...Array<T>(rowCount)];

    const format = getFormat(type);

    data.forEach((row, index) => {
        (data as { [key: string]: any })[index] = generateRowData(format);
    });
    
    return data;
}

function generateRowData<T>(format: ColumnFormat[]): T {
    const data: any = {};

    format.forEach((column) => {        
        if (column.defaultValue) {
            if (column.defaultValue === 'guid') {
                (data as { [key: string]: any })[column.key] = uuidv4();
            } else {
                (data as { [key: string]: any })[column.key] = column.defaultValue;
            }
        }

        if (column.options) {
            (data as { [key: string]: any })[column.key] = column.options[Number(getRandomNumber(column.options.length))];
        }
        
        if (column.type === 'Date') {
            (data as { [key: string]: any })[column.key] = getRandomDate();
        }

        if (column.type === 'number') {
            if (column.maxLength && !column.minLength) {
                (data as { [key: string]: any })[column.key] = getRandomDigits(column.maxLength, column.protect);
            } else {
                (data as { [key: string]: any })[column.key] = getRandomNumber(column.maxLength, column.minLength, column.protect);
            }
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