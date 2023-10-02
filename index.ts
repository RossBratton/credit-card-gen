import Excel, { Column } from 'exceljs';
import * as path from 'path';
import { generateData, getColumns } from './data-generator';

const rowCount = process.argv[2] ? parseInt(process.argv[2]) : 10000;

console.log(`Generating ${rowCount} rows of data...`);

const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('Card Data');
const excelColumns: Partial<Column>[] = getColumns();

worksheet.columns = excelColumns;

const data = generateData(rowCount);

data.forEach(row => {
    worksheet.addRow(row);
});

const exportPath = path.resolve(__dirname, `outputs/output_${rowCount}_rows_${new Date().toISOString()}.xlsx`);

workbook.xlsx.writeFile(exportPath).then(() => {
    console.log('Finished.');
}).catch((err) => {
    console.error(err);
});