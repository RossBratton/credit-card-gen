import Excel, { Column } from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';
import { generateData, getColumns } from './data-generator';
import { printProgress } from './utils';

const fileTypes = ['card', 'customer', 'transaction', 'maintenance', 'eligibility', 'directdebit'];

const fileType = process.argv[2];
const rowCount = process.argv[3] ? parseInt(process.argv[3]) : 10000;

if (fileTypes.indexOf(fileType) === -1 && fileType !== 'all') {
    printProgress(`Invalid file type ${fileType}. Must be one of the following: all, ${fileTypes.join(', ')}.`);
    process.exit(1);
}

if (isNaN(rowCount)) {
    printProgress(`Invalid row count ${rowCount}. Must be a number.`);
    process.exit(1);
}

const fileTypesToGenerate = (fileType === 'all') ? fileTypes : [fileType];


for (let type of fileTypesToGenerate) {
    printProgress(`Generating ${rowCount} rows of data...`);

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet(`${type} Data`);
    const excelColumns: Partial<Column>[] = getColumns(type);

    worksheet.columns = excelColumns;

    // Build the data in chunks to avoid memory issues
    const data = [];
    const chunkSize = (rowCount < 10000) ? rowCount : 10000;
    const chunkCount = Math.ceil(rowCount / chunkSize);

    for (let i = 0; i < chunkCount; i++) {
        printProgress("Generating chunk " + (i + 1) + " of " + chunkCount);
        const chunk = generateData(type, chunkSize);
        data.push(chunk);
        printProgress("Finished chunk " + (i + 1) + " of " + chunkCount);
    }

    data.forEach((chunk: any[], index: number) => {
        printProgress("Writing chunk " + (index + 1) + " of " + chunkCount);
        worksheet.addRows(chunk);
        printProgress("Finished writing chunk " + (index + 1) + " of " + chunkCount);
    });

    const fileDirectory = path.resolve(__dirname, `outputs/${type}`);

    if (!fs.existsSync(fileDirectory)){
        fs.mkdirSync(fileDirectory);
    }

    const exportPath = `${fileDirectory}/${type}_${rowCount}_rows_${new Date().toISOString()}.csv`;

    printProgress(`Writing to ${exportPath}...`);
        workbook.csv.writeFile(exportPath).then(() => {
    }).catch((err) => {
        console.error('Error writing file.');
        console.error(err);
    }).finally(() => {
        printProgress('Finished.', true);
    });   
}