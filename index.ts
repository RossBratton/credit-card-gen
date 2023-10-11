import Excel, { Column } from 'exceljs';
import * as path from 'path';
import { generateData, getColumns } from './data-generator';
import { printProgress } from './utils';

const rowCount = process.argv[2] ? parseInt(process.argv[2]) : 10000;

printProgress(`Generating ${rowCount} rows of data...`);

const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('Card Data');
const excelColumns: Partial<Column>[] = getColumns('card');

worksheet.columns = excelColumns;

// Build the data in chunks to avoid memory issues
const data = [];
const chunkSize = 10000;
const chunkCount = Math.ceil(rowCount / chunkSize);

for (let i = 0; i < chunkCount; i++) {
    printProgress("Generating chunk " + (i + 1) + " of " + chunkCount);
    const chunk = generateData('card', chunkSize);
    data.push(chunk);
    printProgress("Finished chunk " + (i + 1) + " of " + chunkCount);
}

data.forEach((chunk: any[], index: number) => {
    printProgress("Writing chunk " + (index + 1) + " of " + chunkCount);
    worksheet.addRows(chunk);
    printProgress("Finished writing chunk " + (index + 1) + " of " + chunkCount);
});

const exportPath = path.resolve(__dirname, `outputs/output_${rowCount}_rows_${new Date().toISOString()}.csv`);

printProgress(`Writing to ${exportPath}...`);
workbook.csv.writeFile(exportPath).then(() => {
}).catch((err) => {
    console.error('Error writing file.');
    console.error(err);
}).finally(() => {
    printProgress('Finished.', true);
});