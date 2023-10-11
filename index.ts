import Excel, { Column } from 'exceljs';
import * as path from 'path';
import { generateData, getColumns } from './data-generator';
import { printProgress } from './utils';

const fileTypes = ['card', 'customer'];

const rowCount = process.argv[2] ? parseInt(process.argv[2]) : 10000;
const fileType = process.argv[3];

if (fileTypes.indexOf(fileType) === -1) {
    printProgress(`Invalid file type. Must be one of ${fileTypes.join(', ')}.`);
    process.exit(1);
}

printProgress(`Generating ${rowCount} rows of data...`);

const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet(`${fileType} Data`);
const excelColumns: Partial<Column>[] = getColumns(fileType);

worksheet.columns = excelColumns;

// Build the data in chunks to avoid memory issues
const data = [];
const chunkSize = 10000;
const chunkCount = Math.ceil(rowCount / chunkSize);

for (let i = 0; i < chunkCount; i++) {
    printProgress("Generating chunk " + (i + 1) + " of " + chunkCount);
    const chunk = generateData(fileType, chunkSize);
    data.push(chunk);
    printProgress("Finished chunk " + (i + 1) + " of " + chunkCount);
}

data.forEach((chunk: any[], index: number) => {
    printProgress("Writing chunk " + (index + 1) + " of " + chunkCount);
    worksheet.addRows(chunk);
    printProgress("Finished writing chunk " + (index + 1) + " of " + chunkCount);
});

const exportPath = path.resolve(__dirname, `outputs/${fileType}_${rowCount}_rows_${new Date().toISOString()}.csv`);

printProgress(`Writing to ${exportPath}...`);
    workbook.csv.writeFile(exportPath).then(() => {
}).catch((err) => {
    console.error('Error writing file.');
    console.error(err);
}).finally(() => {
    printProgress('Finished.', true);
});